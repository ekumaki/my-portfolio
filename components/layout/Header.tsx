"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { FileText, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { siteConfig } from '@/site.config'
import { ThemeToggle } from '@/components/features/ThemeToggle'
import { useTheme } from 'next-themes'

const basePath = process.env.NODE_ENV === 'production' ? '/my-portfolio' : ''

const navItems = [
  { href: '/works', label: 'Works' },
  { href: '/#about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // SSR中はデフォルトのロゴを表示
  const currentTheme = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light'

  // About セクションへのスムーズスクロール
  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // トップページにいる場合は直接スクロール
    if (pathname === '/') {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // 他のページからの場合は、トップページに遷移してからスクロール
      window.location.href = `${basePath}/#about`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              key={currentTheme}
              src={currentTheme === 'dark' ? `${basePath}/logo/exmachina_logo_02.svg` : `${basePath}/logo/exmachina_logo_01.svg`}
              alt={siteConfig.name}
              width={250}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              item.label === 'About' ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleAboutClick}
                  className={cn(
                    "transition-colors hover:text-foreground/80 cursor-pointer",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* モバイルメニューボタン */}
        <div className="flex md:hidden flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground/60"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col space-y-3 p-4">
            {navItems.map((item) => (
              item.label === 'About' ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    handleAboutClick(e)
                    setIsMenuOpen(false)
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground/80 cursor-pointer",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}