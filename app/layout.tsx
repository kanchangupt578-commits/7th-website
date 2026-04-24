import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Lumina AI | Future-Ready Business Solutions',
  description: 'Design, Innovation, and AI-powered intelligence for the modern enterprise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-[#0A0B0D] text-gray-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
