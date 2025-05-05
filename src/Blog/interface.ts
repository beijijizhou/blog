export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    image_url: string
    published_at: string
    author_name: string
    category: string
    tags: string[] | null
  }
  