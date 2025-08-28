import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, ArrowLeft, FileText, Wrench } from 'lucide-react'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'website',
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-8 md:py-12">
      <Link href="/works">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          制作物一覧に戻る
        </Button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {project.title}
          </h1>
          <p className="text-muted-foreground mb-6">
            {project.description || project.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  サイトへ
                </Button>
              </Link>
            )}
            {project.links.repo && (
              <Link
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  ソースコード
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {project.cover && (
            <Card>
              <CardContent className="p-6">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-background">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          )}


        </div>
      </div>
    </div>
  )
}