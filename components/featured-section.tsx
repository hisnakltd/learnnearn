'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Code, DollarSign } from 'lucide-react';

const features = [
  {
    title: 'In-Depth Tutorials',
    description: 'Step-by-step guides covering the latest technologies and best practices.',
    icon: Book,
  },
  {
    title: 'Coding Projects',
    description: 'Hands-on projects to build your portfolio and gain practical experience.',
    icon: Code,
  },
  {
    title: 'Monetization Guides',
    description: 'Learn how to turn your skills into income opportunities.',
    icon: DollarSign,
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive learning resources and practical guidance to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}