import type { MetadataRoute } from "next";
import { readBlogs } from "./api/admin/blogs/store";
import { employerCountries } from "./_lib/data/employerCountries";
import { readDemands } from "./api/admin/demands/store";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://shivatravelconsultant.in";

  const img = (path: string) => `${baseUrl}/${encodeURIComponent(path)}`;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        img("shiva-manpower-overseas-jobs-hero.webp"),
        img("founder.webp"),
        img("licensed-overseas-recruitment-punjab.webp"),
        img("award-trophy-shiva-manpower.png"),
      ],
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("founder.webp"), img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("carousel 4.webp"), img("shiva-manpower-support-team.webp")],
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [img("success.webp")],
    },
    {
      url: `${baseUrl}/contactus`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jalandhar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/kapurthala`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/hoshiarpur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/phagwara`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/nawanshahr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/current-demands`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jobs/uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("UAE.jpg")],
    },
    {
      url: `${baseUrl}/jobs/saudi-arabia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("saudi-arabia-jobs-shiva-manpower.webp")],
    },
    {
      url: `${baseUrl}/jobs/qatar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("saudi-arabia-jobs-indian-workers.jpg")],
    },
    {
      url: `${baseUrl}/jobs/poland`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("poland-jobs-shiva-manpower.webp")],
    },
    {
      url: `${baseUrl}/jobs/romania`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("romania-jobs-shiva-manpower.webp")],
    },
    {
      url: `${baseUrl}/jobs/europe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("factory-worker-jobs-dubai-uae.jpg")],
    },
    {
      url: `${baseUrl}/jobs/usa`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [img("USA.png"), img("USA0 guam.png")],
    },
    {
      url: `${baseUrl}/nakodar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/punjab`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [img("shiva-manpower-nakodar-office-punjab.webp"), img("founder.webp")],
    },
    {
      url: `${baseUrl}/visa/schengen`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/romania`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("romania-jobs-shiva-manpower.webp")],
    },
    {
      url: `${baseUrl}/visa/poland`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/croatia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/saudi-arabia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/qatar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/kuwait`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/bahrain`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/visa/usa-h2b`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [img("USA.png"), img("USA0 guam.png")],
    },
    {
      url: `${baseUrl}/employers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [img("factory-worker-jobs-dubai-uae.jpg"), img("shiva-manpower-nakodar-office-punjab.webp")],
    },
    {
      url: `${baseUrl}/job-seekers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [img("shiva-manpower-overseas-jobs-hero.webp")],
    },
    {
      url: `${baseUrl}/salary-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/e-migrate`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [img("passport-documents-nakodar-office.webp")],
    },
    {
      url: `${baseUrl}/services/document-attestation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [img("passport-documents-nakodar-office.webp")],
    },
    {
      url: `${baseUrl}/services/gamca-medical`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/passport-assistance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [img("passport-documents-nakodar-office.webp")],
    },
    {
      url: `${baseUrl}/services/embassy-coordination`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/pre-departure-briefing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [img("carousel 2.webp")],
    },
    {
      url: `${baseUrl}/services/h2b-visa-processing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [img("USA.png"), img("USA0 guam.png")],
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/guides/how-to-verify-licensed-ra-agency`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/work-visa-comparison`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/gamca-medical-test`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const blogs = await readBlogs();
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(blog.image ? { images: [blog.image.startsWith("http") ? blog.image : `${baseUrl}${blog.image.startsWith("/") ? "" : "/"}${blog.image}`] } : {}),
  }));

  const employerPages: MetadataRoute.Sitemap = employerCountries.map((c) => ({
    url: `${baseUrl}/employers/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const demands = await readDemands();
  const demandPages: MetadataRoute.Sitemap = demands.map((d) => ({
    url: `${baseUrl}/current-demands/${d.id}`,
    lastModified: new Date(d.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.85,
    ...(d.poster ? { images: [d.poster.startsWith("http") ? d.poster : `${baseUrl}${d.poster.startsWith("/") ? "" : "/"}${d.poster}`] } : {}),
  }));

  return [...staticPages, ...employerPages, ...blogPages, ...demandPages];
}
