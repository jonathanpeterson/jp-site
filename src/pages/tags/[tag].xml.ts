import rss from '@astrojs/rss';
import { getAllTags, getPostsByTag, getPostUrl } from '../../utils/collections';
import type { APIContext } from 'astro';

export async function getStaticPaths() {
  const tags = await getAllTags();
  return tags.map(tag => ({ params: { tag } }));
}

export async function GET(context: APIContext) {
  const { tag } = context.params as { tag: string };
  const posts = await getPostsByTag(tag);

  return rss({
    title: `Jonathan Peterson · #${tag}`,
    description: `Posts tagged ${tag}`,
    site: context.site ?? 'https://jonathan-peterson.com',
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.date,
      link: getPostUrl(post),
    })),
  });
}
