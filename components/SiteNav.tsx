'use client'

import type { CSSProperties } from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Главная' },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/about', label: 'О студии' },
  { href: '/booking', label: 'Бронирование' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [navProgress, setNavProgress] = useState(0)

  useEffect(() => {
    const threshold = 96

    const onScroll = () => {
      const y = window.scrollY
      const progress = Math.min(y / threshold, 1)
      setNavProgress(progress)
      setScrolled(y > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav-shell ${scrolled ? 'is-scrolled' : 'is-top'}`}>
      <div
        className={`site-nav ${scrolled ? 'nav-glass' : 'nav-minimal'}`}
        style={{ '--nav-progress': navProgress } as CSSProperties}
      >
        <Link href="/" className="brand-mark">
          <span className="brand-line">Luma Atelier</span>
          <span className="brand-subline">photo studio</span>
        </Link>
        <nav>
          <ul className="site-nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
