import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/hero-section';
import FeaturedSection from '@/components/featured-section';
import NewsletterSection from '@/components/newsletter-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <NewsletterSection />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful learners who have transformed their careers
              through our comprehensive guides and tutorials.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/blog">Explore Articles</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/store">Visit Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}