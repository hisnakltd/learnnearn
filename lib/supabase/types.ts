export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  published_at: string;
  views: number;
  created_at: string;
};

export type PostEngagement = {
  id: string;
  post_id: string;
  user_id: string;
  type: 'view' | 'like' | 'share';
  created_at: string;
};