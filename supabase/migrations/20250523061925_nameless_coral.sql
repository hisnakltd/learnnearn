/*
  # Add blog engagement tracking

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `content` (text)
      - `excerpt` (text)
      - `published_at` (timestamp)
      - `views` (integer)
      - `created_at` (timestamp)
    
    - `post_engagements`
      - `id` (uuid, primary key)
      - `post_id` (uuid, references blog_posts)
      - `user_id` (uuid, references auth.users)
      - `type` (text) - 'view', 'like', 'share'
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for reading and writing engagements
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  published_at timestamptz DEFAULT now(),
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create post_engagements table
CREATE TABLE IF NOT EXISTS post_engagements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('view', 'like', 'share')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_engagements ENABLE ROW LEVEL SECURITY;

-- Policies for blog_posts
CREATE POLICY "Blog posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only authenticated users can create blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policies for post_engagements
CREATE POLICY "Users can view their own engagements"
  ON post_engagements
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own engagements"
  ON post_engagements
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);