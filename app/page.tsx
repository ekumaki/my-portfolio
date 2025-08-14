import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { ArrowRight, FileText, Briefcase } from 'lucide-react'
import { projects } from '@/data/projects'
import { getAllPosts } from '@/lib/mdx'
import { ProjectCard } from '@/components/features/ProjectCard'
import { PostCard } from '@/components/features/PostCard'

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            フルスタックエンジニア
          </h1>
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
            {siteConfig.title}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={siteConfig.resumeUrl}
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              すべてのプロジェクトを見る
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Latest Posts</h2>
          {latestPosts.length === 0 ? (
            <p className="text-center text-muted-foreground">記事がまだありません。</p>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latestPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  すべての記事を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}