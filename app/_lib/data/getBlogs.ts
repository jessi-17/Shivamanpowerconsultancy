import fs from "fs";
import path from "path";

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

const DATA_PATH = path.join(process.cwd(), "app/_lib/data/blogs.json");

export function getBlogs(): BlogPost[] {
  if (!fs.existsSync(DATA_PATH)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const blogs = getBlogs();
  return blogs.find((b) => b.slug === slug);
}
