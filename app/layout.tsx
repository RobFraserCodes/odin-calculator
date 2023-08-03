import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rob Fraser - Calculator Project',
  description: 'A Calculator Project for The Odin Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-zinc-800'>
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
