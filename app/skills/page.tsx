import { Metadata } from 'next'
import { skillSections } from '@/data/skills'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Skills',
  description: '技術スキルと経験',
}

export default function SkillsPage() {
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Skills
        </h1>
        <p className="text-lg text-muted-foreground">
          技術スキルと実務経験
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillSections.map((section) => (
          <Card key={section.name}>
            <CardHeader>
              <CardTitle>{section.name}</CardTitle>
              {section.description && (
                <CardDescription>{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.items.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{skill.name}</h4>
                      {skill.experience && (
                        <p className="text-sm text-muted-foreground">
                          経験: {skill.experience}
                        </p>
                      )}
                    </div>
                    {skill.level && (
                      <Badge
                        variant="outline"
                        className={getLevelColor(skill.level)}
                      >
                        {getLevelLabel(skill.level)}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
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
  )
}