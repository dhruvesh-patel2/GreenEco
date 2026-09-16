import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || business.website;

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/reparation", priority: 0.95 },
  { path: "/entretien", priority: 0.75 },
  { path: "/boutique", priority: 0.65 },
  { path: "/notre-atelier", priority: 0.8 },
  { path: "/a-propos", priority: 0.7 },
  { path: "/contact", priority: 0.85 },
  { path: "/rendez-vous", priority: 0.9 },
  { path: "/mentions-legales", priority: 0.25 },
  { path: "/politique-de-confidentialite", priority: 0.25 },
  { path: "/politique-cookies", priority: 0.25 },
  { path: "/conditions-generales", priority: 0.25 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
