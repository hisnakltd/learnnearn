'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <Image
          src="/logo.png"
          alt="Learn N' Earn Blog Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      <span className="font-bold text-xl">LEB</span>
    </Link>
  );
}