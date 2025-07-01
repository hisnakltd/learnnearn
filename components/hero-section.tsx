'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">LEARN N' EARN BLOG</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover expert-led tutorials and comprehensive guides that help you learn new skills
            and create income opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/blog">Start Learning</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
            <Button variant="secondary" size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link href="https://hisnakprogram.com" target="_blank" rel="noopener noreferrer">
                Hisnak Program
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}