import { siteConfig } from '@/site.config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase, Award, Info } from 'lucide-react'
import { projects } from '@/data/projects'
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
      <section className="px-6 py-24 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/works/${project.slug}`}
                className="group cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="relative aspect-[19/10] overflow-hidden rounded-lg bg-background transition-transform group-hover:scale-[1.02]">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-center font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
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
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">About</h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  このサイトについて
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  これまでに個人で制作してきた成果物をまとめたポートフォリオサイトです。
                  <br />
                  学習や趣味の中で取り組んだWebサイトやアプリケーションを掲載しており、自身のスキルや取り組みの過程を振り返る場としても活用しています。
                  <br />
                  今後も制作を重ねながら、作品を追加していく予定です。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  プロフィール
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
                <p>
                  20年間の行政実務を経て、現在はAIを活用したWebサイトやアプリの開発に取り組んでいます。
                  <br />
                  常に「人に役立つ仕組みをシンプルに届けること」を念頭に制作を行っています。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  資格・認定
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white dark:bg-black">基本情報技術者</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black">G検定</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black">データサイエンティスト検定（リテラシーレベル）</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black">情報セキュリティマネジメント試験</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black">日商簿記2級</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-black">FP2級</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </main>
  )
}
