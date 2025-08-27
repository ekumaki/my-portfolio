export const siteConfig = {
  name: "Exmachina",
  title: "AI×自動化で業務を速く、正確に。",
  description: "フルスタックエンジニアとして、AIと自動化技術を活用した業務効率化ソリューションを提供します。",
  url: "https://your-domain.com",
  ogImage: "/images/works/my-portfolio.png",
  social: {
    github: "ekumaki",
    x: "yourusername",
    zenn: "",
    qiita: ""
  },
  email: "your-email@example.com"
} as const

export type SiteConfig = typeof siteConfig