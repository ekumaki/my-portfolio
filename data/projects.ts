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

const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : ''

export const projects: Project[] = [
  {
    slug: "ai-mini-apps-100",
    title: "AI Mini Apps 100",
    subtitle: "VibeCoding（AI）で作った100のミニWebアプリ集",
    summary: "電卓／日付ツール／テキスト加工などをAI支援で量産。静的HTMLをGitHub Pagesで公開。",
    description: "AI（VibeCoding）を活用して、日常業務で使える100個のミニWebアプリケーションを３日間で開発。電卓、日付計算、テキスト変換、URLエンコーダーなど、シンプルながら実用的なツールを静的HTMLとJavaScriptで実装し、GitHub Pagesで公開しています。",
    tags: [],
    tech: ["HTML", "JavaScript", "GitHub Pages", "Claude Code"],
    links: {
      demo: "https://ekumaki.github.io/ai-mini-apps-100/",
      repo: "https://github.com/ekumaki/ai-mini-apps-100"
    },
    cover: `${basePath}/images/works/ai-mini-apps-100.png`,
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
    slug: "sns-draft-app",
    title: "下書き箱",
    subtitle: "SNS投稿の下書きを素早く作成・保存するWebアプリ",
    summary: "140文字カウンタ搭載、検索・ピン留め、オフライン編集/保存に対応したPWA（ホーム画面から起動できるWebアプリ）。",
    description: "X（旧twitter）などのSNS投稿の下書きを素早く作って補完できるPWA（ホーム画面から起動できるWebアプリ）です。140文字のカウンタを搭載し、検索・ピン留めで管理も快適、オフラインでも編集と保存が可能です。",
    tags: [],
    tech: ["HTML", "JavaScript", "PWA", "GitHub Pages"],
    links: {
      demo: "https://ekumaki.github.io/sns-draft-app/",
      repo: "https://github.com/ekumaki/sns-draft-app"
    },
    cover: `${basePath}/images/works/sns-draft-app.png`
  },
  {
    slug: "flash-memo",
    title: "パッとメモ",
    subtitle: "超軽量・高速Windows用メモアプリ",
    summary: "クリップボード連携とピン留め機能を備えた、シンプルで使いやすいメモアプリ。",
    description: "Windows環境で動作する超軽量・高速メモアプリです。クリップボード連携とシンプルな操作性に特化し、ちょっとしたメモを書いてすぐに活用できるのが魅力です。ピン止め機能を使えば常に最前面に表示され、必要なときにすぐアクセスできます。",
    tags: [],
    tech: ["C#", ".NET 8", "WPF", "Claude Code"],
    links: {
      repo: "https://github.com/ekumaki/flash-memo"
    },
    cover: `${basePath}/images/works/flash-memo.png`,
    featured: true
  },
  {
    slug: "portfolio-site",
    title: "ポートフォリオサイト",
    subtitle: "Next.js 14で構築した個人ポートフォリオ",
    summary: "このサイト自体もポートフォリオの一つ。Next.js App Router、TypeScript、Tailwind CSSで実装。",
    description: "このサイト自体もポートフォリオの一つ。Next.js 14のApp Router、TypeScript、Tailwind CSSを使用してClaude Codeの支援を受けながら開発しました。作品を効果的に見せるため、シンプルで見やすいデザインを心がけ、レスポンシブ対応やダークモード切り替え機能も実装しています。",
    tags: [],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Claude Code"],
    links: {
      repo: "https://github.com/yourusername/portfolio"
    },
    cover: `${basePath}/images/works/my-portfolio.png`,
    featured: true
  }
]
