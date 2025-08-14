import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GracefullyAdeola - Wedding Celebration',
  description: 'Join Adejumoke & Olaoluwa as they celebrate their love on November 22, 2025',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}