import { Metadata } from 'next';
import { Book } from 'lucide-react';
import PostCard from '@/components/post-card';

export const metadata: Metadata = {
  title: 'Blog | LEARN N\' EARN BLOG',
  description: 'Explore our latest tutorials and guides on passive income',
};

const posts = [
  {
    title: "What is Passive Income? A Beginner's Guide to Earning Money While You Sleep",
    excerpt: "Discover the fundamentals of passive income and how you can start building wealth even while you're not actively working. Learn about different passive income streams and strategies for success.",
    date: "2024-03-20",
    slug: "what-is-passive-income"
  },
  {
    title: "10 Simple Passive Income Ideas for People with No Prior Experience",
    excerpt: "Looking to get started with passive income but don't know where to begin? Here are 10 beginner-friendly ideas that anyone can start with minimal investment and experience.",
    date: "2024-03-19",
    slug: "simple-passive-income-ideas"
  },
  {
    title: "How to Start a Blog That Earns Passive Income Through Affiliate Marketing",
    excerpt: "Learn the step-by-step process of creating a profitable blog through affiliate marketing. From choosing your niche to monetizing your content, this guide covers it all.",
    date: "2024-03-18",
    slug: "blog-affiliate-marketing-guide"
  },
  {
    title: "The Ultimate Guide to Creating and Selling Digital Products",
    excerpt: "Explore how to create, market, and sell digital products like ebooks, courses, and templates. Turn your knowledge into a profitable passive income stream.",
    date: "2024-03-17",
    slug: "digital-products-guide"
  },
  {
    title: "Investing in Dividend Stocks: A Complete Guide for Beginners",
    excerpt: "Learn how to build a dividend portfolio that generates passive income. Understand stock selection, risk management, and long-term investment strategies.",
    date: "2024-03-16",
    slug: "dividend-investing-guide"
  },
  {
    title: "How to Build a Successful Print-on-Demand Business",
    excerpt: "Start your own print-on-demand business with minimal upfront investment. Learn about design, marketing, and platform selection to create passive income.",
    date: "2024-03-15",
    slug: "print-on-demand-guide"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 text-center mb-12">
            <Book className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Our Blog</h1>
              <p className="text-muted-foreground max-w-2xl">
                Discover in-depth tutorials, practical guides, and expert insights to help you master passive income strategies.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}