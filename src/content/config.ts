import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    cover: image(),
    coverAlt: z.string(),
    category: z.array(z.string()),
    tags: z.array(z.string()),
    author: z.string()
  }),
});

export const collections = {
  posts: postsCollection,
};
