import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "app/_lib/data/blogs.json");

function readBlogs() {
  if (!fs.existsSync(DATA_PATH)) {
    fs.writeFileSync(DATA_PATH, "[]");
    return [];
  }
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

function writeBlogs(blogs: unknown[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(blogs, null, 2));
}

// GET all blogs
export async function GET() {
  const blogs = readBlogs();
  return NextResponse.json(blogs);
}

// POST create new blog
export async function POST(req: NextRequest) {
  const body = await req.json();
  const blogs = readBlogs();

  const slug =
    body.slug ||
    body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const newPost = {
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
  writeBlogs(blogs);

  return NextResponse.json(newPost, { status: 201 });
}

// PUT update blog
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const blogs = readBlogs();
  const index = blogs.findIndex((b: { slug: string }) => b.slug === body.slug);

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  blogs[index] = { ...blogs[index], ...body };
  writeBlogs(blogs);

  return NextResponse.json(blogs[index]);
}

// DELETE blog
export async function DELETE(req: NextRequest) {
  const { slug } = await req.json();
  const blogs = readBlogs();
  const filtered = blogs.filter((b: { slug: string }) => b.slug !== slug);

  if (filtered.length === blogs.length) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  writeBlogs(filtered);
  return NextResponse.json({ success: true });
}
