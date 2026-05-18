import type { MetadataRoute } from "next";

const baseUrl = "https://chompmate.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/waitlist`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/methodology`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/sources`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/delete-account`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
