// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    projectDate: z.date(),
    cardImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    techDetails: z.array(z.string()),
    subtitle: z.string(),
    gameEmbed: z.object({
      iframeSrc: z.string(),
      url: z.string(),
      width: z.number(),
      height: z.number(),
    }).optional(),
    heroImage: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    specifications: z.array(z.string()),
    links: z.object({
      itchio: z.string().optional(),
      github: z.string().optional(),
      bitbucket: z.string().optional(),
      techDocs: z.string().optional(),
    }),
    summary: z.string(),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectCollection,
};