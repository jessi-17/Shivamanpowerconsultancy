import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
import fs from "fs";
import path from "path";

const BLOB_PATH = "data/blogs.json";
const SEED_PATH = path.join(process.cwd(), "app/_lib/data/blogs.json");

async function readBlogs(): Promise<unknown[]> {
  const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
  if (blobs.length > 0) {
    const res = await fetch(blobs[0].url, { cache: "no-store" });
    return await res.json();
  }
  // First run: seed from the bundled JSON file
  const raw = fs.existsSync(SEED_PATH) ? fs.readFileSync(SEED_PATH, "utf-8") : "[]";
  const blogs = JSON.parse(raw);
  await put(BLOB_PATH, JSON.stringify(blogs), { access: "public", allowOverwrite: true });
  return blogs;
}

async function writeBlogs(blogs: unknown[]) {
  await put(BLOB_PATH, JSON.stringify(blogs), { access: "public", allowOverwrite: true });
}

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

  (blogs as typeof newPost[]).unshift(newPost);
  await writeBlogs(blogs);

  return NextResponse.json(newPost, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const blogs = await readBlogs() as { slug: string }[];
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
  const blogs = await readBlogs() as { slug: string }[];
  const filtered = blogs.filter((b) => b.slug !== slug);

  if (filtered.length === blogs.length) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  await writeBlogs(filtered);
  return NextResponse.json({ success: true });
}
