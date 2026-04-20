import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getWritingPosts, getPostUrl } from '../../utils/collections';

export async function GET(context: APIContext) {
  const posts = await getWritingPosts();

  return rss({
    title: 'Jonathan Peterson — Writing',
    description: 'Writing on technology, product craft, and internet history.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: getPostUrl(post),
    })),
  });
}
