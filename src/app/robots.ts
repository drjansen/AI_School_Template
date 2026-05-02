import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block API and internal Next.js routes from indexing
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `https://${brand.domain}/sitemap.xml`,
    host: `https://${brand.domain}`,
  };
}
