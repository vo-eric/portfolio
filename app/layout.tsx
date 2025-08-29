import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eric Vo - Software Engineer',
  description:
    'I’m a software engineer with three years of experience building digital products for startups and fast moving teams, with a strong focus on front-end development and cross-platform applications. I’ve delivered features like biometric authentication, reusable content systems, and real-time data integrations that directly improved user experience and reduced costs. I thrive in collaborative environments where ideas move quickly and engineering plays a direct role in shaping the product.',
  keywords: [
    'Software Engineer',
    'Clean Code',
    'Minimal Design',
    'Modern Development',
    'Web Development',
    'User Experience',
    'Design Systems',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Performance',
    'Accessibility',
    'Eric Vo',
  ],
  authors: [{ name: 'Eric Vo' }],
  creator: 'Eric Vo',
  openGraph: {
    title: 'Eric Vo - Software Developer Portfolio',
    description:
      'I’m a software engineer with three years of experience building digital products for startups and fast moving teams, with a strong focus on front-end development and cross-platform applications. I’ve delivered features like biometric authentication, reusable content systems, and real-time data integrations that directly improved user experience and reduced costs. I thrive in collaborative environments where ideas move quickly and engineering plays a direct role in shaping the product.',
    url: 'https://ericvo.dev',
    siteName: 'Eric Vo - Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric Vo - Modern Minimal Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
