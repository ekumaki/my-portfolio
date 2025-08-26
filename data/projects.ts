export interface Project {
  slug: string
  title: string
  subtitle: string
  summary: string
  description?: string
  tags: string[]
  tech: string[]
  links: {
    demo?: string
    repo?: string
    article?: string
  }
  cover: string
  metrics?: string[]
  role?: string
  learnings?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "ai-mini-apps-100",
    title: "AI Mini Apps 100",
    subtitle: "VibeCoding（AI）で作った100のミニWebアプリ集",
    summary: "電卓／日付ツール／テキスト加工などをAI支援で量産。静的HTMLをGitHub Pagesで公開。",
    description: "AI（VibeCoding）を活用して、日常業務で使える100個のミニWebアプリケーションを３日間で開発。電卓、日付計算、テキスト変換、URLエンコーダーなど、シンプルながら実用的なツールを静的HTMLとJavaScriptで実装し、GitHub Pagesで公開しています。",
    tags: ["個人開発", "AI"],
    tech: ["HTML", "JavaScript", "GitHub Pages"],
    links: {
      demo: "https://ekumaki.github.io/ai-mini-apps-100/",
      repo: "https://github.com/ekumaki/ai-mini-apps-100"
    },
    cover: "/images/works/ai-mini-apps-100.png",
    metrics: [
      "短時間での大量プロトタイピング",
      "AIプロンプト設計ワークフロー確立",
      "100個のアプリを2週間で開発"
    ],
    role: "企画・開発・デプロイ",
    learnings: [
      "AIとの効果的な協働方法",
      "反復的な開発プロセスの最適化",
      "静的サイトの効率的な管理"
    ],
    featured: true
  },
  {
    slug: "portfolio-site",
    title: "ポートフォリオサイト",
    subtitle: "Next.js 14で構築した個人ポートフォリオ",
    summary: "このサイト自体もポートフォリオの一つ。Next.js App Router、TypeScript、Tailwind CSSで実装。",
    tags: ["個人開発"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    links: {
      repo: "https://github.com/yourusername/portfolio"
    },
    cover: "/images/works/portfolio-site.png",
    featured: true
  }
]