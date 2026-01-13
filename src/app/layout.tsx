import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LINK CAMP 2025 | IEEE LINK',
  description: 'Join IEEE LINK for an immersive tech camp experience. LINK CAMP 2025 brings together innovation, learning, and networking for IEEE student members and college students.',
  keywords: ['IEEE', 'LINK CAMP', 'tech camp', 'student event', '2025', 'engineering', 'technology'],
  authors: [{ name: 'IEEE LINK' }],
  openGraph: {
    title: 'LINK CAMP 2025 | IEEE LINK',
    description: 'Join IEEE LINK for an immersive tech camp experience. Connect, Learn, Innovate.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LINK CAMP 2025 | IEEE LINK',
    description: 'Join IEEE LINK for an immersive tech camp experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-soft dark:bg-dark-bg`}>
        {children}
      </body>
    </html>
  )
}
