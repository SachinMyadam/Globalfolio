// app/components/LanguageSwitcher.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Check if we are currently in Spanish
  const isEs = pathname.startsWith('/es');

  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-full w-fit border border-gray-200">
      <Link 
        href="/en" 
        className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
          !isEs ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
        }`}
      >
        English
      </Link>
      <Link 
        href="/es" 
        className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
          isEs ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
        }`}
      >
        Español
      </Link>
    </div>
  );
}