import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Everguard Group — Licensed Investigations & Intelligence',
  description:
    'Everguard Group provides licensed private investigators and intelligence specialists for insurance companies, law firms, and corporate clients across Australia. Professional, discreet, and confidential.',
  keywords:
    'private investigators Australia, insurance investigations, workers compensation fraud, surveillance investigations, litigation support, court-ready reports, fraud investigations Queensland',
  openGraph: {
    title: 'Everguard Group — Licensed Investigations & Intelligence',
    description:
      'Licensed investigators across Australia. Professional, discreet, and confidential for insurers, law firms, and corporate clients.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-AU"
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable} ${dmSans.variable}`}
    >
      <body
        className="bg-[#060D18] text-white antialiased font-body"
        style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
