import { config, fields, collection } from '@keystatic/core';

// Check for production using multiple common environment markers
const isProd = process.env.NODE_ENV === 'production' || import.meta.env.PROD || process.env.VERCEL === '1';

export default config({
    storage: isProd
        ? {
            kind: 'github',
            repo: 'compoundingknowledge/compoundingknowledge-blog',
        }
        : {
            kind: 'local',
        },
    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
    },
});
