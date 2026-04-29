import { NextRequest, NextResponse } from "next/server";
import { readBlogs, writeBlogs, type BlogPost } from "./store";

export async function GET() {
  const blogs = await readBlogs();
  return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const blogs = await readBlogs();

  const slug =
    body.slug ||
    body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const newPost: BlogPost = {
    slug,
    title: body.title || "",
    excerpt: body.excerpt || "",
    content: body.content || "",
    image: body.image || "/Blog-1.jpg",
    category: body.category || "General",
    date: body.date || new Date().toISOString().split("T")[0],
    readTime: body.readTime || "5 min read",
    keywords: body.keywords || [],
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
  const blogs = await readBlogs();
  const filtered = blogs.filter((b) => b.slug !== slug);

  if (filtered.length === blogs.length) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  await writeBlogs(filtered);
  return NextResponse.json({ success: true });
}
