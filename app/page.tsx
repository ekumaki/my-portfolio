import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { ArrowRight, Briefcase, GraduationCap, Award } from 'lucide-react'
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
                  <GraduationCap className="h-5 w-5" />
                  経歴
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="relative pl-6 pb-6 border-l-2 border-muted last:pb-0 last:border-0">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                    <div>
                      <h3 className="font-semibold">フルスタックエンジニア</h3>
                      <p className="text-sm text-muted-foreground mb-2">2020年 - 現在</p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                        <li>AI技術を活用した開発効率化の推進</li>
                        <li>業務自動化ツールの設計・開発</li>
                        <li>Webアプリケーションの開発</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative pl-6 pb-6 border-l-2 border-muted last:pb-0 last:border-0">
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                    <div>
                      <h3 className="font-semibold">業務システム開発</h3>
                      <p className="text-sm text-muted-foreground mb-2">2010年 - 2020年</p>
                      <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                        <li>VBA/Accessを使った業務システムの開発</li>
                        <li>データ分析・レポート自動化</li>
                        <li>業務プロセスの改善提案</li>
                      </ul>
                    </div>
                  </div>
                </div>
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