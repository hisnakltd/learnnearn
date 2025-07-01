import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function PostCard({ title, excerpt, date, slug }: PostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link href={`/blog/${slug}`}>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  );
}