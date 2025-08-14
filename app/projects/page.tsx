import { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/features/ProjectCard'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Projects',
  description: '開発プロジェクトの一覧',
}

export default function ProjectsPage() {
  const tags = Array.from(new Set(projects.flatMap(p => p.tags))).sort()

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground">
          AIと自動化技術を活用した開発プロジェクト
        </p>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}