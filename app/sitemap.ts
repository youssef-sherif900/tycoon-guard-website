import type { MetadataRoute } from "next"
import { SEO_PAGES } from "@/lib/seo-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tycoon-guard.com"

  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  const seoRoutes = SEO_PAGES.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [...routes, ...seoRoutes]
}



