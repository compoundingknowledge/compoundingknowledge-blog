import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        created: z.date().or(z.string().transform((str) => new Date(str))),
        updated: z.date().or(z.string().transform((str) => new Date(str))).optional(),
        description: z.string().optional(),
        // Add more fields if needed (e.g. tags, image)
    }),
});

export const collections = { posts };
