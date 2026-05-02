import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

const BASE_URL = `https://${brand.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          ko: BASE_URL,
          en: BASE_URL,
        },
      },
    },
    {
      url: `${BASE_URL}/legal/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ko: `${BASE_URL}/legal/terms`,
          en: `${BASE_URL}/legal/terms`,
        },
      },
    },
    {
      url: `${BASE_URL}/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          ko: `${BASE_URL}/legal/privacy`,
          en: `${BASE_URL}/legal/privacy`,
        },
      },
    },
  ];
}
