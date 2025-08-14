# Portfolio Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイト

## 🚀 特徴

- **Next.js 14 App Router**: Server Components を活用した高速なレンダリング
- **TypeScript**: 型安全な開発
- **Tailwind CSS + shadcn/ui**: モダンで一貫性のあるUI
- **MDX Blog**: Markdown で書ける技術ブログ
- **レスポンシブデザイン**: モバイルフレンドリー
- **ダークモード対応**: システムテーマに対応
- **SEO最適化**: メタデータとJSON-LD構造化データ
- **アクセシビリティ**: キーボード操作とaria属性に対応

## 📁 プロジェクト構造

```
my-portfolio/
├── app/                    # Next.js App Router ページ
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx          # ホームページ
│   ├── about/            # Aboutページ
│   ├── skills/           # スキルページ
│   ├── projects/         # プロジェクト一覧・詳細
│   ├── blog/            # ブログ一覧・記事詳細
│   └── contact/         # コンタクトページ
├── components/
│   ├── ui/              # shadcn/ui コンポーネント
│   ├── layout/          # レイアウトコンポーネント
│   ├── features/        # 機能コンポーネント
│   └── providers/       # プロバイダー
├── lib/
│   ├── utils.ts         # ユーティリティ関数
│   └── mdx.ts          # MDX処理ユーティリティ
├── data/
│   ├── projects.ts      # プロジェクトデータ
│   └── skills.ts       # スキルデータ
├── content/
│   └── posts/          # MDX ブログ記事
├── public/
│   └── images/         # 画像ファイル
└── site.config.ts      # サイト設定
```

## 🛠️ 技術スタック

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Content**: MDX, gray-matter
- **Deployment**: Vercel

## 📦 セットアップ

### 前提条件

- Node.js 18.x 以上
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd my-portfolio
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. ブラウザで http://localhost:3000 を開く

## 🔧 カスタマイズ

### サイト情報の更新

`site.config.ts` を編集してサイトの基本情報を更新:

```typescript
export const siteConfig = {
  name: "あなたの名前",
  title: "キャッチフレーズ",
  description: "サイトの説明",
  url: "https://your-domain.com",
  social: {
    github: "your-github",
    x: "your-twitter",
    // ...
  },
  resumeUrl: "/resume/your-resume.pdf",
  email: "your-email@example.com"
}
```

### プロジェクトの追加

`data/projects.ts` にプロジェクト情報を追加:

```typescript
export const projects: Project[] = [
  {
    slug: "project-slug",
    title: "プロジェクト名",
    subtitle: "サブタイトル",
    summary: "概要",
    tags: ["タグ1", "タグ2"],
    tech: ["技術1", "技術2"],
    links: {
      demo: "https://demo-url.com",
      repo: "https://github.com/user/repo"
    },
    cover: "/images/projects/project-image.png",
    featured: true // ホームページに表示するか
  }
]
```

### スキルの更新

`data/skills.ts` でスキル情報を更新:

```typescript
export const skillSections: SkillSection[] = [
  {
    name: "カテゴリ名",
    description: "説明",
    items: [
      {
        name: "スキル名",
        level: "advanced", // beginner | intermediate | advanced | expert
        experience: "経験年数"
      }
    ]
  }
]
```

### ブログ記事の追加

`content/posts/` に MDX ファイルを作成:

```markdown
---
title: "記事タイトル"
date: "2024-01-15"
tags: ["タグ1", "タグ2"]
excerpt: "記事の概要"
cover: "/images/blog/article-image.jpg"
---

# 記事の内容

Markdown で記事を書きます。
```

### 画像の配置

- プロジェクト画像: `public/images/projects/`
- ブログ画像: `public/images/blog/`
- その他の画像: `public/images/`

## 🚀 デプロイ

### Vercel へのデプロイ

1. [Vercel](https://vercel.com) でアカウントを作成
2. GitHub リポジトリを接続
3. プロジェクトをインポート
4. 自動的にビルド・デプロイが実行される

### 環境変数（必要に応じて）

Vercel のダッシュボードで環境変数を設定:

- `NEXT_PUBLIC_SITE_URL`: サイトのURL

## 📝 開発ガイド

### NPM スクリプト

```bash
npm run dev        # 開発サーバー起動
npm run build      # プロダクションビルド
npm run start      # プロダクションサーバー起動
npm run lint       # ESLint実行
npm run typecheck  # TypeScript型チェック
```

### コードの構成

- **Pages**: `app/` ディレクトリに配置
- **Components**: 再利用可能なコンポーネントは `components/` に配置
- **Data**: 静的データは `data/` に配置
- **Content**: ブログ記事は `content/posts/` に配置
- **Utilities**: ユーティリティ関数は `lib/` に配置

### スタイリング

- Tailwind CSS クラスを使用
- shadcn/ui コンポーネントをベースとして活用
- ダークモード対応のため `dark:` クラスを適切に使用

## 🔍 SEO 対策

- メタデータの最適化
- JSON-LD 構造化データ
- サイトマップ（自動生成）
- OGP 画像対応
- レスポンシブデザイン

## 📱 レスポンシブ対応

- モバイルファースト
- タブレット・デスクトップ対応
- フレキシブルなレイアウト

## ♿ アクセシビリティ

- キーボード操作対応
- aria 属性の適切な使用
- 色のコントラスト比に配慮
- スクリーンリーダー対応

## 📄 ライセンス

MIT License

## 🤝 貢献

プルリクエストや Issue の作成を歓迎します。

## 📞 サポート

質問や問題がある場合は、Issue を作成してください。