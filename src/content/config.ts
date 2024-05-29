import { defineCollection, reference, z } from "astro:content";

const tracks = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    title: z.string()
  }),
});

const sessions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tracks: z.array(reference('tracks')),
    audiences: z.array(z.string()),
    technos: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = { tracks, sessions };
