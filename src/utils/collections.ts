import { getCollection } from 'astro:content';

export async function getWritingPosts() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getHistoryPosts() {
  const posts = await getWritingPosts();
  return posts.filter(p => p.id.startsWith('history/'));
}

export async function getPersonalPosts() {
  const posts = await getWritingPosts();
  return posts.filter(p => p.id.startsWith('personal/'));
}

export async function getDJPosts() {
  const posts = await getCollection('dj', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getRecentPosts(n: number) {
  const writing = await getWritingPosts();
  const dj = await getDJPosts();
  return [...writing, ...dj]
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, n);
}

export async function getAllTags() {
  const writing = await getWritingPosts();
  const dj = await getDJPosts();
  const tags = new Set<string>();
  [...writing, ...dj].forEach(p => p.data.tags.forEach(t => tags.add(t)));
  return Array.from(tags);
}

export async function getPostsByTag(tag: string) {
  const writing = await getWritingPosts();
  const dj = await getDJPosts();
  return [...writing, ...dj]
    .filter(p => p.data.tags.includes(tag))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getPostUrl(post: any): string {
  if (post.collection === 'dj') {
    return `/dj/${post.id}/`;
  }
  const id = post.id.replace(/^(history|personal)\//, '');
  return `/writing/${id}/`;
}
