import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter | LEARN N\' EARN BLOG',
  description: 'Subscribe to our newsletter for the latest updates',
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Newsletter</h1>
          <p className="text-muted-foreground mb-8">
            Stay updated with our latest tutorials and guides.
          </p>
        </div>
      </div>
    </main>
  );
}