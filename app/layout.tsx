import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dinesh Dhayfule — Software Developer',
  description: 'Software Developer building scalable web apps, production-ready APIs, and ML-powered solutions. B.Tech CSE student from Solapur, India.',
  keywords: ['Software Developer', 'Web Developer', 'Full Stack', 'Portfolio', 'Dinesh Dhayfule'],
  authors: [{ name: 'Dinesh Dhayfule' }],
  openGraph: {
    title: 'Dinesh Dhayfule — Software Developer',
    description: 'I build scalable web applications, production APIs, and intelligent software solutions.',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-neo-bg text-neo-text font-sans selection:bg-neo-accent selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
