import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'OmniReview',
  description: 'All your media in one place.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="w-full flex justify-end items-center p-4 border-b bg-white">
          <div className="flex gap-2">
            <Link href="/login" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Login</Link>
            <Link href="/signup" className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600">Sign Up</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}