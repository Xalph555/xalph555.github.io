// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
	loader: glob({ pattern: '**/[^_]*.mdx', base: "./src/projects"}),
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
		gameEmbed: z
			.object({
				iframeSrc: z.string(),
				url: z.string(),
				width: z.number(),
				height: z.number(),
			})
			.optional(),
		heroImage: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		heroVideo: z
			.object({
				url: z.string(),
				title: z.string(),
			})
			.optional(),
		specifications: z.array(z.string()),
		links: z.object({
			itchio: z.string().optional(),
			github: z.string().optional(),
			bitbucket: z.string().optional(),
			gitlab: z.string().optional(),
			techDocs: z.string().optional(),
		}).optional(),
		summary: z.array(z.string()),
	}),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
	projects: projectCollection,
};
