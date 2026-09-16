import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || business.website;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
