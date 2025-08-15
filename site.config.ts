export const siteConfig = {
  name: "{{YOUR_NAME}}",
  title: "AI×自動化で業務を速く、正確に。",
  description: "フルスタックエンジニアとして、AIと自動化技術を活用した業務効率化ソリューションを提供します。",
  url: "https://your-domain.com",
  ogImage: "https://your-domain.com/og-image.png",
  social: {
    github: "ekumaki",
    x: "yourusername",
    zenn: "",
    qiita: ""
  },
  email: "your-email@example.com"
} as const

export type SiteConfig = typeof siteConfig