import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('writing');

  return rss({
    title: 'Jonathan Peterson — Writing',
    description: 'Essays, opinions, and long-form posts on technology and culture.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date - a.data.date)
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description ?? '',
        link: `/writing/${post.id.replace(/^(history|personal)\//, '')}/`,
      })),
  });
}
