import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getPublishedProjects } from "@/data/projects";
import { getPublishedInsights } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/aiolab",
    "/insight",
    "/contact",
    "/privacy"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));

  const projectRoutes = getPublishedProjects().map((p) => ({
    url: `${siteConfig.url}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  const insightRoutes = getPublishedInsights().map((p) => ({
    url: `${siteConfig.url}/insight/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
