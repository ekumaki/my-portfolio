import Link from 'next/link'
import { Github, Twitter, Instagram } from 'lucide-react'
import { siteConfig } from '@/site.config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          {/* SNSアイコン - 一時的に非表示
          <div className="flex space-x-4">
            {siteConfig.social.x && (
              <Link
                href={`https://twitter.com/${siteConfig.social.x}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            <Link
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            {siteConfig.social.github && (
              <Link
                href={`https://github.com/${siteConfig.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}
          </div>
          */}
        </div>
      </div>
    </footer>
  )
}