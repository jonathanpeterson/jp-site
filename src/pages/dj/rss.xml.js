import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('dj');

  return rss({
    title: 'Jonathan Peterson — Jonny Spins',
    description: 'Dance music for old people. Mix reviews and DJ notes.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date - a.data.date)
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description ?? '',
        link: `/dj/${post.id}/`,
      })),
  });
}
