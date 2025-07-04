'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  // Disable authentication for static export
  const [user, setUser] = useState(null);

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="https://i.imgur.com/vrcL8Yx.png"
                alt="LEB Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold">LEARN N&apos; EARN BLOG</span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/store" className="text-muted-foreground hover:text-foreground">
              Store
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}