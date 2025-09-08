import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Myth Debunker - Separating Fact from Fiction',
  description: 'A comprehensive database of debunked myths and superstitions backed by scientific evidence.',
  keywords: 'myths, superstitions, fact-checking, debunking, science, evidence',
  authors: [{ name: 'Myth Debunker Team' }],
  creator: 'Myth Debunker',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mythdebunker.com',
    title: 'Myth Debunker - Separating Fact from Fiction',
    description: 'A comprehensive database of debunked myths and superstitions backed by scientific evidence.',
    siteName: 'Myth Debunker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myth Debunker - Separating Fact from Fiction',
    description: 'A comprehensive database of debunked myths and superstitions backed by scientific evidence.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
