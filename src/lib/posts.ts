import { getCollection } from 'astro:content';

/**
 * Fetches all published essays + photo essays, tagged with `photoEssay`,
 * sorted reverse-chronologically. Used by the homepage and the site-wide
 * footer's posts section so the sort/filter logic lives in one place.
 */
export async function getAllPosts() {
  const essays = (await getCollection('essay'))
    .filter((e) => !e.data.draft)
    .map((entry) => ({ entry, photoEssay: false }));

  const photoEssays = (await getCollection('photoEssay'))
    .filter((e) => !e.data.draft)
    .map((entry) => ({ entry, photoEssay: true }));

  return [...essays, ...photoEssays]
    .map((post) => ({
      ...post,
      href: post.entry.data.externalUrl ?? `/${post.entry.id}`,
    }))
    .sort(
      (a, b) =>
        b.entry.data.publishDate.getTime() - a.entry.data.publishDate.getTime(),
    );
}

export type PostEntry = Awaited<ReturnType<typeof getAllPosts>>[number];
