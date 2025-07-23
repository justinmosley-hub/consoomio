'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const hideHeader = pathname === '/login' || pathname === '/signup';

  if (hideHeader) return null;

  return (
    <header className="w-full flex justify-end items-center p-4 border-b bg-white">
      <div className="flex gap-2">
        <Link href="/login" className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">Login</Link>
        <Link href="/signup" className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600">Sign Up</Link>
      </div>
    </header>
  );
} 