import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getDJPosts, getPostUrl } from '../../utils/collections';

export async function GET(context: APIContext) {
  const posts = await getDJPosts();

  return rss({
    title: 'Jonathan Peterson — DJ',
    description: 'What I\'m listening to and spinning — dance music for old people.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: getPostUrl(post),
    })),
  });
}
