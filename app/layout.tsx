import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'I Spy Flashlight Game',
  description: 'A thrilling I Spy game where you use your cursor as a flashlight to search through darkness and find hidden objects before time runs out!',
  keywords: 'game, i spy, flashlight, puzzle, find objects, time challenge',
  authors: [{ name: 'I Spy Game' }],
  openGraph: {
    title: 'I Spy Flashlight Game',
    description: 'Use your cursor as a flashlight to find hidden objects in the dark!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}