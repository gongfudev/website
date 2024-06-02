import { defineCollection, reference, z } from "astro:content";

const tags = defineCollection({
  type: "content",
  schema: z.object({
    label: z.string(),
    title: z.string(),
  }),
});

const audiences = tags;
const technos = tags;
const tracks = tags;

const sessions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    audiences: z.array(reference("audiences")),
    technos: z.array(reference("technos")),
    tracks: z.array(reference("tracks")),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

export const collections = { audiences, technos, tracks, sessions };
