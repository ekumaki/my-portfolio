import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Github, Twitter, BookOpen, FileText } from 'lucide-react'
import { siteConfig } from '@/site.config'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Contact',
  description: '連絡先とSNS',
}

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground">
            お仕事のご相談やご質問はお気軽にご連絡ください
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>メール</CardTitle>
              <CardDescription>
                お仕事のご依頼や技術的なご相談
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`mailto:${siteConfig.email}`}>
                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  メールを送る
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SNS</CardTitle>
              <CardDescription>
                最新の活動や技術情報を発信しています
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {siteConfig.social.github && (
                <Link
                  href={`https://github.com/${siteConfig.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      @{siteConfig.social.github}
                    </p>
                  </div>
                </Link>
              )}

              {siteConfig.social.x && (
                <Link
                  href={`https://twitter.com/${siteConfig.social.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-medium">X (Twitter)</p>
                    <p className="text-sm text-muted-foreground">
                      @{siteConfig.social.x}
                    </p>
                  </div>
                </Link>
              )}

              {siteConfig.social.zenn && (
                <Link
                  href={`https://zenn.dev/${siteConfig.social.zenn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <BookOpen className="h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-medium">Zenn</p>
                    <p className="text-sm text-muted-foreground">
                      @{siteConfig.social.zenn}
                    </p>
                  </div>
                </Link>
              )}

              {siteConfig.social.qiita && (
                <Link
                  href={`https://qiita.com/${siteConfig.social.qiita}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <div className="flex-1">
                    <p className="font-medium">Qiita</p>
                    <p className="text-sm text-muted-foreground">
                      @{siteConfig.social.qiita}
                    </p>
                  </div>
                </Link>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>その他の情報</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 基本的にメールでのご連絡をお願いしています</li>
                <li>• 返信には1-2営業日いただく場合があります</li>
                <li>• 技術的な質問はGitHubのIssueでも受け付けています</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}