import { Metadata } from 'next'
import { getAllPosts, getAllTags } from '@/lib/mdx'
import { PostCard } from '@/components/features/PostCard'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Blog',
  description: '技術記事とチュートリアル',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          技術的な学びや開発のヒントを共有
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">タグ</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-muted-foreground">記事がまだありません。</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}