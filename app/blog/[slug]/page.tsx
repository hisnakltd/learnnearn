import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CalendarIcon, ThumbsUp, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase/client';
import type { BlogPost } from '@/lib/supabase/types';

interface BlogPostParams {
  params: {
    slug: string;
  };
}

interface PostData {
  title: string;
  date: string;
  content: string;
}

// This would typically come from a database or CMS
const posts: Record<string, PostData> = {
  'what-is-passive-income': {
    title: "What is Passive Income? A Beginner's Guide to Earning Money While You Sleep",
    date: "2024-03-20",
    content: `
      Passive income is money earned with minimal ongoing effort. Unlike active income from a job,
      passive income continues flowing even when you're not actively working. This guide explores
      various passive income streams and how to get started.

      ## Why Passive Income Matters

      In today's economy, relying solely on a single income stream can be risky. Passive income
      provides financial security, flexibility, and the opportunity to build long-term wealth.
      Whether you're looking to supplement your current income or eventually replace it entirely,
      passive income strategies can help you achieve your financial goals.

      ## Common Passive Income Sources

      1. Dividend Stocks
      2. Real Estate Investments
      3. Online Courses
      4. Digital Products
      5. Affiliate Marketing
      6. Rental Properties
      7. Royalties
      8. High-Yield Savings Accounts

      ## Getting Started

      The key to successful passive income is choosing the right strategy for your situation.
      Consider factors like:
      
      - Initial investment required
      - Time commitment
      - Risk level
      - Your interests and expertise
      - Long-term potential

      Start small and gradually expand your passive income streams as you learn and grow.

      ## Affiliate Programs We Recommend

      1. [Amazon Associates](https://affiliate-program.amazon.com/) - Great for beginners
      2. [ClickBank](https://www.clickbank.com/) - Digital products marketplace
      3. [ShareASale](https://www.shareasale.com/) - Diverse product selection
      4. [Commission Junction](https://www.cj.com/) - High-quality merchants
    `
  },
  'simple-passive-income-ideas': {
    title: "10 Simple Passive Income Ideas for People with No Prior Experience",
    date: "2024-03-19",
    content: `
      Getting started with passive income doesn't have to be complicated. Here are 10 proven
      ideas that anyone can implement, regardless of their experience level.

      ## 1. Print-on-Demand Products

      Create designs for t-shirts, mugs, and other products without holding inventory.
      Platforms like Printful and Redbubble handle production and shipping.

      ## 2. Stock Photography

      If you enjoy photography, sell your photos on platforms like Shutterstock or Adobe Stock.
      Once uploaded, each photo can generate income indefinitely.

      ## 3. Digital Downloads

      Create and sell:
      - Printable planners
      - Wall art
      - Templates
      - Spreadsheets
      - Digital stickers

      ## 4. YouTube Channel

      Start a channel about your interests or expertise. Monetize through:
      - Ad revenue
      - Sponsorships
      - Affiliate marketing
      - Merchandise

      ## 5. Print Books with KDP

      Self-publish books on Amazon Kindle Direct Publishing:
      - Fiction novels
      - Non-fiction guides
      - Children's books
      - Coloring books
      - Journals

      ## 6. Online Courses

      Share your knowledge through platforms like:
      - Udemy
      - Skillshare
      - Teachable
      
      ## 7. Mobile Apps

      Create simple apps like:
      - Calculators
      - Productivity tools
      - Games
      - Lifestyle apps

      ## 8. Dividend Investing

      Start small with dividend-paying stocks:
      - Blue-chip companies
      - ETFs
      - REITs

      ## 9. Affiliate Marketing

      Promote products you trust through:
      - Blog posts
      - Social media
      - Email newsletters
      - YouTube videos

      ## 10. Rent Out Storage Space

      If you have extra space, rent it out:
      - Garage
      - Basement
      - Parking spot
      - Storage unit

      ## Getting Started

      1. Choose 1-2 ideas that match your interests
      2. Start with minimal investment
      3. Learn and improve as you go
      4. Reinvest earnings to grow
      5. Diversify into other streams
    `
  },
  'blog-affiliate-marketing-guide': {
    title: "How to Start a Blog That Earns Passive Income Through Affiliate Marketing",
    date: "2024-03-18",
    content: `
      Affiliate marketing through blogging is one of the most sustainable ways to generate
      passive income. This guide will show you how to get started and succeed.

      ## Choosing Your Niche

      Select a niche that:
      - You're passionate about
      - Has monetization potential
      - Has enough audience interest
      - Isn't oversaturated

      ## Setting Up Your Blog

      1. Choose a domain name
      2. Select a hosting provider
      3. Install WordPress
      4. Pick a professional theme
      5. Install essential plugins

      ## Creating Quality Content

      Focus on:
      - Solving reader problems
      - Providing detailed information
      - Using proper formatting
      - Including relevant images
      - Optimizing for SEO

      ## Affiliate Marketing Strategy

      1. Join affiliate programs
      2. Create product reviews
      3. Write comparison posts
      4. Add resource pages
      5. Include tutorial content

      ## Promoting Your Blog

      - SEO optimization
      - Social media marketing
      - Email list building
      - Guest posting
      - Community engagement

      ## Recommended Tools

      - WordPress
      - Ahrefs or SEMrush
      - Canva
      - MailerLite
      - Google Analytics

      ## Monetization Tips

      1. Only promote products you trust
      2. Disclose affiliate relationships
      3. Create detailed reviews
      4. Track performance
      5. Test different approaches

      Remember, success takes time and consistent effort. Focus on providing value first,
      and the income will follow.
    `
  },
  'digital-products-guide': {
    title: "The Ultimate Guide to Creating and Selling Digital Products",
    date: "2024-03-17",
    content: `
      Digital products offer excellent passive income potential with minimal overhead costs.
      Learn how to create and sell successful digital products.

      ## Popular Digital Product Types

      1. Online Courses
      2. Ebooks
      3. Templates
      4. Printables
      5. Software Tools
      6. Music/Sound Effects
      7. Digital Art
      8. Photography

      ## Creating Your First Product

      1. Market Research
         - Identify customer needs
         - Analyze competition
         - Find price points
         - Determine delivery method

      2. Product Development
         - Outline your product
         - Create content
         - Design graphics
         - Test functionality

      3. Platform Selection
         - Own website
         - Marketplaces
         - Course platforms
         - Digital product stores

      ## Marketing Strategy

      - Email marketing
      - Content marketing
      - Social media
      - Paid advertising
      - Affiliate programs

      ## Pricing Strategy

      Consider:
      - Market rates
      - Production costs
      - Target audience
      - Value provided
      - Competition

      ## Tools and Resources

      1. Creation Tools
         - Canva
         - Adobe Creative Suite
         - Camtasia
         - Google Docs

      2. Selling Platforms
         - Gumroad
         - Teachable
         - Etsy
         - Your own website

      ## Success Tips

      1. Start small and scale
      2. Get customer feedback
      3. Update regularly
      4. Build an email list
      5. Provide excellent support
    `
  },
  'dividend-investing-guide': {
    title: "Investing in Dividend Stocks: A Complete Guide for Beginners",
    date: "2024-03-16",
    content: `
      Dividend investing is a proven strategy for generating passive income through the
      stock market. Learn how to build a sustainable dividend portfolio.

      ## Understanding Dividends

      - What are dividends?
      - Types of dividends
      - Dividend yield
      - Payout ratio
      - Ex-dividend dates

      ## Building Your Portfolio

      1. Research
         - Company fundamentals
         - Dividend history
         - Industry analysis
         - Growth potential

      2. Stock Selection
         - Blue-chip companies
         - Dividend aristocrats
         - REITs
         - ETFs

      3. Risk Management
         - Diversification
         - Position sizing
         - Sector allocation
         - Regular monitoring

      ## Investment Strategy

      1. Long-term Focus
         - Buy and hold
         - Dividend reinvestment
         - Dollar-cost averaging
         - Regular review

      2. Portfolio Balance
         - Growth vs. income
         - Risk tolerance
         - Time horizon
         - Investment goals

      ## Tax Considerations

      - Qualified dividends
      - Tax-advantaged accounts
      - Foreign tax implications
      - Record keeping

      ## Common Mistakes to Avoid

      1. Chasing yield
      2. Lack of diversification
      3. Ignoring company fundamentals
      4. Emotional decisions
      5. Poor timing

      ## Getting Started

      1. Open a brokerage account
      2. Start with dividend ETFs
      3. Research individual stocks
      4. Create an investment plan
      5. Monitor and adjust
    `
  },
  'print-on-demand-guide': {
    title: "How to Build a Successful Print-on-Demand Business",
    date: "2024-03-15",
    content: `
      Print-on-demand (POD) businesses offer a low-risk way to start an online store.
      Learn how to create and grow a successful POD business.

      ## Understanding Print-on-Demand

      - How POD works
      - Benefits and limitations
      - Popular products
      - Market opportunities

      ## Getting Started

      1. Platform Selection
         - Printful
         - Printify
         - Redbubble
         - Society6
         - Merch by Amazon

      2. Design Creation
         - Design software
         - Design principles
         - Trending themes
         - Product mockups

      3. Product Selection
         - T-shirts
         - Hoodies
         - Mugs
         - Phone cases
         - Wall art

      ## Marketing Strategy

      1. Online Presence
         - Social media
         - Website/blog
         - Email marketing
         - Influencer partnerships

      2. SEO Optimization
         - Keywords
         - Product descriptions
         - Tags
         - Categories

      ## Design Tips

      1. Research trends
      2. Create unique designs
      3. Use quality software
      4. Test different styles
      5. Get feedback

      ## Business Growth

      - Expand product lines
      - Try new platforms
      - Build a brand
      - Engage with customers
      - Analyze data

      ## Success Tips

      1. Focus on quality
      2. Price competitively
      3. Provide good service
      4. Stay consistent
      5. Learn and adapt
    `
  }
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = posts[params.slug];
  return {
    title: post ? `${post.title} | LEARN N' EARN BLOG` : 'Blog Post Not Found',
    description: post ? post.title : 'This blog post could not be found',
  };
}

async function incrementViews(slug: string) {
  try {
    const { data: post } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug)
      .single();

    if (post) {
      await supabase.from('post_engagements').insert({
        post_id: post.id,
        type: 'view'
      });
    }
  } catch (error) {
    console.error('Error incrementing views:', error);
  }
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = posts[params.slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  // Increment view count
  await incrementViews(params.slug);

  return (
    <main className="min-h-screen bg-background py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4" />
                Like
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>
      </article>
    </main>
  );
}