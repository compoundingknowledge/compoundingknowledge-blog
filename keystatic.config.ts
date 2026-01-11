import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: import.meta.env.PROD
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
                title: fields.text({ label: 'Title' }),
                content: fields.text({ label: 'Content', multiline: true }),
            },
        }),
    },
});