import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const writing = await getCollection('writing');
  const dj = await getCollection('dj');

  const writingItems = writing.map(post => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description ?? '',
    link: `/writing/${post.id.replace(/^(history|personal)\//, '')}/`,
  }));

  const djItems = dj.map(post => ({
    title: post.data.title,
    pubDate: post.data.date,
    description: post.data.description ?? '',
    link: `/dj/${post.id}/`,
  }));

  const items = [...writingItems, ...djItems].sort(
    (a, b) => b.pubDate - a.pubDate
  );

  return rss({
    title: 'Jonathan Peterson',
    description: 'Product leader. Engineer at heart. Enthusiastic DJ for the afterparty.',
    site: context.site,
    items,
  });
}
