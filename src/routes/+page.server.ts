import type { Post } from '$lib/types'

async function getPosts() {
  let posts: Post[] = []

  const paths = import.meta.glob('/src/posts/**/*.md', { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split('/').at(-2)

    if (file && typeof file == 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>
      const post = { ...metadata, slug } satisfies Post
      posts.push(post)
    }

  }

  const sortedPosts = posts.sort((first, second) =>
    new Date(second.date).getTime() - new Date(first.date).getTime()
  )

  return sortedPosts
}


export async function load() {
  const posts: Post[] = await getPosts()
  return { posts }
}
