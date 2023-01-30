// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
const mdSchema = z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishDate: z.string().transform(str => new Date(str)),
})

// 2. Define your collection(s)
const blogsCollection = defineCollection({ schema: mdSchema });
const projectsCollection = defineCollection({ schema: mdSchema });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'blogs': blogsCollection,
    'projects': projectsCollection
};