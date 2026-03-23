import type { Metadata } from "next";
import { notFound } from "next/navigation";
import blogs from "../../_lib/data/blogs";
import BlogPostContent from "./content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `/blog/${blog.slug}`,
      type: "article",
      images: [{ url: blog.image, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
    },
    publisher: {
      "@type": "Organization",
      name: "Shiva Travel & Manpower Consultants",
      logo: {
        "@type": "ImageObject",
        url: "/logo.jpg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <BlogPostContent blog={blog} />
    </>
  );
}
