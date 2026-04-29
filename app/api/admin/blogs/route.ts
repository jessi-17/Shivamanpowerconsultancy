import { NextRequest, NextResponse } from "next/server";
import { put, head } from "@vercel/blob";
import fs from "fs";
import path from "path";

const BLOB_PATH = "data/blogs.json";
const SEED_PATH = path.join(process.cwd(), "app/_lib/data/blogs.json");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  keywords: string[];
}

// A real Vercel Blob token starts with "vercel_blob_". Treat anything else
// (missing, placeholder, etc.) as "no Blob — use local seed file".
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const HAS_BLOB = BLOB_TOKEN.startsWith("vercel_blob_");

function readSeed(): BlogPost[] {
  try {
    const raw = fs.existsSync(SEED_PATH) ? fs.readFileSync(SEED_PATH, "utf-8") : "[]";
    const blogs = JSON.parse(raw);
    return Array.isArray(blogs) ? blogs : [];
  } catch {
    return [];
  }
}

export async function readBlogs(): Promise<BlogPost[]> {
  if (!HAS_BLOB) return readSeed();

  try {
    const blob = await head(BLOB_PATH);
    const res = await fetch(`${blob.url}?t=${Date.now()}`, { cache: "no-store" });
    const raw = await res.json();
    return Array.isArray(raw) ? raw : [];
  } catch (err: unknown) {
    if ((err as { name?: string })?.name === "BlobNotFoundError") {
      const seeded = readSeed();
      try {
        await put(BLOB_PATH, JSON.stringify(seeded), {
          access: "public",
          allowOverwrite: true,
          addRandomSuffix: false,
          cacheControlMaxAge: 0,
        });
      } catch {
        /* swallow — return seed anyway */
      }
      return seeded;
    }
    console.error("[blogs] Blob read failed, falling back to seed:", err);
    return readSeed();
  }
}

async function writeBlogs(blogs: BlogPost[]) {
  if (!HAS_BLOB) {
    fs.writeFileSync(SEED_PATH, JSON.stringify(blogs, null, 2));
    return;
  }
  await put(BLOB_PATH, JSON.stringify(blogs), {
    access: "public",
    allowOverwrite: true,
    addRandomSuffix: false,
    cacheControlMaxAge: 0,
  });
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
