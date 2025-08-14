import { Metadata } from 'next'
import { siteConfig } from '@/site.config'
import { skillSections } from '@/data/skills'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, GraduationCap, Award, Heart, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'プロフィールと経歴',
}

export default function AboutPage() {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'advanced':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20'
      case 'intermediate':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
      case 'beginner':
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
      default:
        return ''
    }
  }

  const getLevelLabel = (level?: string) => {
    switch (level) {
      case 'expert':
        return '熟練'
      case 'advanced':
        return '上級'
      case 'intermediate':
        return '中級'
      case 'beginner':
        return '初級'
      default:
        return ''
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            About
          </h1>
          <p className="text-lg text-muted-foreground">
            {siteConfig.title}
          </p>
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
                <Badge variant="secondary">応用情報技術者</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                価値観
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">効率性:</span>
                  <span className="text-muted-foreground">
                    繰り返し作業は自動化し、人間はより創造的な仕事に集中すべき
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">実用性:</span>
                  <span className="text-muted-foreground">
                    完璧を求めすぎず、実際に使える「動くもの」を素早く作る
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">継続的改善:</span>
                  <span className="text-muted-foreground">
                    フィードバックを大切にし、常により良い方法を探求する
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                技術スキル
              </CardTitle>
              <CardDescription>実務経験のある技術とレベル</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {skillSections.map((section) => (
                  <div key={section.name} className="space-y-4">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      {section.name}
                    </h4>
                    <div className="space-y-3">
                      {section.items.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{skill.name}</p>
                            {skill.experience && (
                              <p className="text-xs text-muted-foreground">
                                経験: {skill.experience}
                              </p>
                            )}
                          </div>
                          {skill.level && (
                            <Badge
                              variant="outline"
                              className={`text-xs ${getLevelColor(skill.level)}`}
                            >
                              {getLevelLabel(skill.level)}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>スキル活用の具体例</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">AI × 開発効率化</h4>
                <p className="text-sm text-muted-foreground">
                  Claude、ChatGPT、VibeCodingを活用し、コード生成・レビュー・ドキュメント作成を効率化。
                  プロンプトエンジニアリングにより、開発速度を10倍以上に向上。
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">業務自動化</h4>
                <p className="text-sm text-muted-foreground">
                  Python + VBAで定型業務を自動化。月40時間の作業時間削減を実現。
                  Excel/Accessを活用した業務システムの構築で、エラー率を95%削減。
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Webアプリケーション開発</h4>
                <p className="text-sm text-muted-foreground">
                  Next.js + TypeScriptでモダンなWebアプリを構築。
                  Server Componentsを活用し、高速でSEOに優れたサイトを実現。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}