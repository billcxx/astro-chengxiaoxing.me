import type { CollectionEntry } from "astro:content";

export function sortPosts(
  a: CollectionEntry<"blogs">,
  b: CollectionEntry<"blogs">
) {
  return b.data.publishDate.getTime() - a.data.publishDate.getTime();
}
