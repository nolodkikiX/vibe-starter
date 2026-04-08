import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luma Atelier, Photo Studio',
  description: 'Cinematic photo studio website with premium design and subtle 3D accents.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
