export interface SkillSection {
  name: string
  description?: string
  items: SkillItem[]
}

export interface SkillItem {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  experience?: string
}

export const skillSections: SkillSection[] = [
  {
    name: "Languages & Tools",
    description: "プログラミング言語と開発ツール",
    items: [
      { name: "TypeScript", level: "advanced", experience: "3年" },
      { name: "Python", level: "advanced", experience: "5年" },
      { name: "VBA", level: "expert", experience: "10年" },
      { name: "Access", level: "expert", experience: "10年" },
      { name: "Excel", level: "expert", experience: "15年" },
      { name: "Git", level: "advanced", experience: "5年" },
      { name: "GitHub Actions", level: "intermediate", experience: "2年" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    description: "フレームワークとライブラリ",
    items: [
      { name: "Next.js", level: "advanced", experience: "2年" },
      { name: "React", level: "advanced", experience: "3年" },
      { name: "Tailwind CSS", level: "advanced", experience: "2年" },
      { name: "Node.js", level: "intermediate", experience: "3年" },
      { name: "FastAPI", level: "intermediate", experience: "1年" }
    ]
  },
  {
    name: "AI & Automation",
    description: "AI活用と自動化技術",
    items: [
      { name: "Claude", level: "expert", experience: "2年" },
      { name: "ChatGPT", level: "expert", experience: "2年" },
      { name: "VibeCoding", level: "advanced", experience: "1年" },
      { name: "RPA/スクレイピング", level: "advanced", experience: "5年" },
      { name: "プロンプトエンジニアリング", level: "advanced", experience: "2年" }
    ]
  },
  {
    name: "Database & Infrastructure",
    description: "データベースとインフラ",
    items: [
      { name: "PostgreSQL", level: "intermediate", experience: "3年" },
      { name: "MySQL", level: "intermediate", experience: "3年" },
      { name: "Vercel", level: "advanced", experience: "2年" },
      { name: "AWS", level: "beginner", experience: "1年" }
    ]
  }
]