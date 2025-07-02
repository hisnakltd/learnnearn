import Link from 'next/link';
import { Metadata } from 'next';
import { Box as Fox } from 'lucide-react';
import AuthForm from '@/app/auth/auth-form';

export const metadata: Metadata = {
  title: 'Sign In | LEARN N\' EARN BLOG',
  description: 'Sign in to your account',
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Fox className="h-12 w-12 text-primary" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
        </div>
        <div className="mt-8">
          <AuthForm mode="sign-in" />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}