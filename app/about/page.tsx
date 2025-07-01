import { Metadata } from 'next';
import { Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | LEARN N\' EARN BLOG',
  description: 'Learn more about our mission and values',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-green-700">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 text-center mb-12">
            <Info className="h-12 w-12 text-primary" />
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">About Us</h1>
              <p className="text-muted-foreground max-w-2xl">
                We are dedicated to helping individuals master new skills and create sustainable income streams through comprehensive learning resources.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background/80 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide accessible, high-quality educational content that empowers learners to develop valuable skills and achieve financial independence.
              </p>
            </div>
            <div className="bg-background/80 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                We believe in practical learning, community support, and creating real-world opportunities for our learners to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}