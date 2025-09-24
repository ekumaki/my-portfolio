import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      {project.cover && (
        <Link href={`/works/${project.slug}`} className="block group" aria-label={`${project.title} の詳細へ`}>
          <div className="relative w-full aspect-[19/10] overflow-hidden rounded-t-lg bg-background cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Link href={`/works/${project.slug}`} className="flex-1">
          <Button variant="default" className="w-full" size="sm">
            詳細を見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <div className="flex gap-2">
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="デモを見る"
            >
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          )}
          {project.links.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHubリポジトリ"
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}