import { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/features/ProjectCard'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Works',
  description: '制作物の一覧',
}

export default function WorksPage() {

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Works
        </h1>
        <p className="text-lg text-muted-foreground">
          これまでに個人で制作してきた成果物です
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}