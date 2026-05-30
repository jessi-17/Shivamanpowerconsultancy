import { NextRequest, NextResponse } from "next/server";
import { readBlogs, writeBlogs, type BlogPost } from "./store";

export async function GET() {
  const blogs = await readBlogs();
  return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
    return NextResponse.json(
      { error: "Title is required." },
      { status: 400 }
    );
  }

  const blogs = await readBlogs();

  const slug =
    (body.slug && String(body.slug).trim()) ||
    body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  if (!slug) {
    return NextResponse.json(
      { error: "Could not generate a URL slug from the title — add letters or numbers, or set a slug manually." },
      { status: 400 }
    );
  }

  if (blogs.some((b) => b.slug === slug)) {
    return NextResponse.json(
      {
        error: `A post with the slug "${slug}" already exists. Open it from the blog list and use Edit to update it, or change the slug on this post.`,
      },
      { status: 409 }
    );
  }

  const newPost: BlogPost = {
    slug,
    title: body.title.trim(),
    excerpt: body.excerpt || "",
    content: body.content || "",
    image: body.image || "/dubai-jobs-from-punjab-guide.jpg",
    imageAlt: body.imageAlt || undefined,
    category: body.category || "General",
    date: body.date || new Date().toISOString().split("T")[0],
    dateModified: body.dateModified || undefined,
    lastReviewed: body.lastReviewed || undefined,
    readTime: body.readTime || "5 min read",
    keywords: Array.isArray(body.keywords) ? body.keywords : [],
    faqs: Array.isArray(body.faqs) ? body.faqs : undefined,
  };

  blogs.unshift(newPost);
  await writeBlogs(blogs);

  return NextResponse.json(newPost, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const blogs = await readBlogs();
  const index = blogs.findIndex((b) => b.slug === body.slug);

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  blogs[index] = { ...blogs[index], ...body };
  await writeBlogs(blogs);

  return NextResponse.json(blogs[index]);
}

export async function DELETE(req: NextRequest) {
  const { slug } = await req.json();

  if (!slug || typeof slug !== "string") {
    return NextResponse.json(
      { error: "A slug is required to delete a post." },
      { status: 400 }
    );
  }

  const blogs = await readBlogs();
  const filtered = blogs.filter((b) => b.slug !== slug);

  if (filtered.length === blogs.length) {
    return NextResponse.json({ error: `No post found with slug "${slug}".` }, { status: 404 });
  }

  await writeBlogs(filtered);
  return NextResponse.json({ success: true });
}
