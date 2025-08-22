import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { ArrowRight, Briefcase, Award, Info } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/features/ProjectCard'
import { TypingAnimation } from '@/components/ui/typing-animation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative flex min-h-[70vh] items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="block sm:hidden text-left inline-block">
              <TypingAnimation 
                text="AI×自動化で業務を速く、正確に。" 
                className="inline-block"
                isMobile={true}
              />
            </span>
            <span className="hidden sm:block text-center">
              <TypingAnimation 
                text="AI×自動化で業務を速く、正確に。" 
                className="inline-block"
                isMobile={false}
              />
            </span>
          </h1>
        </div>
      </section>

      {/* Featured Works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/works"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              すべての制作物を見る
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">About</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  このサイトについて
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  Exmachinaは、AI技術と自動化を活用した開発事例や制作物を紹介するポートフォリオサイトです。実践的なソリューションを通じて、技術の可能性をご覧いただけます。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  プロフィール
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  フルスタックエンジニアとして、AIと自動化技術を活用した業務効率化ソリューションの開発に従事しています。
                  特に、大規模言語モデル（LLM）を活用した開発効率化と、VBAやPythonを使った業務自動化を得意としています。
                </p>
                <p>
                  「技術で人の仕事を楽にする」をモットーに、実用的で保守性の高いシステムの構築を心がけています。
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  資格・認定
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">基本情報技術者</Badge>
                  <Badge variant="secondary">G検定</Badge>
                  <Badge variant="secondary">データサイエンティスト検定（リテラシーレベル）</Badge>
                  <Badge variant="secondary">情報セキュリティマネジメント試験</Badge>
                  <Badge variant="secondary">日商簿記2級</Badge>
                  <Badge variant="secondary">FP2級</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </main>
  )
}