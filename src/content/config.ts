import { defineCollection, z } from "astro:content";

export const collections = {
  sessions: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tracks: z.array(z.string()),
      audiences: z.array(z.string()),
      technos: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
