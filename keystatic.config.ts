import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    writing: collection({
      label: 'Writing',
      slugField: 'title',
      path: 'src/content/writing/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'Tech History', value: 'tech-history' },
            { label: 'Personal', value: 'personal' },
            { label: 'Music', value: 'music' },
            { label: 'DJ', value: 'dj' },
            { label: 'Food', value: 'food' },
            { label: 'Culture', value: 'culture' },
            { label: 'Opinion', value: 'opinion' },
          ],
        }),
        banner: fields.text({ label: 'Banner image path', description: 'e.g. /images/foo.jpg' }),
        content: fields.mdx({ label: 'Content', extension: 'md' }),
      },
    }),

    dj: collection({
      label: 'DJ',
      slugField: 'title',
      path: 'src/content/dj/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        date: fields.date({ label: 'Date' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'Music', value: 'music' },
            { label: 'DJ', value: 'dj' },
          ],
        }),
        content: fields.mdx({ label: 'Content', extension: 'md' }),
      },
    }),

    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        banner: fields.text({ label: 'Banner image path' }),
        content: fields.mdx({ label: 'Content', extension: 'md' }),
      },
    }),
  },
});
