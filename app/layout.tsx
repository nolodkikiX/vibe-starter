import './globals.css'
import type { Metadata } from 'next'
import { SiteNav } from '../components/SiteNav'

export const metadata: Metadata = {
  title: 'Luma Atelier, Photo Studio',
  description: 'Cinematic photo studio website with premium design and subtle 3D accents.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="top-chrome" aria-hidden="true" />
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
