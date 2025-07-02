import Link from 'next/link';
import { Metadata } from 'next';
import { Box as Fox } from 'lucide-react';
import AuthForm from '@/app/auth/auth-form';

export const metadata: Metadata = {
  title: 'Register | LEARN N\' EARN BLOG',
  description: 'Create your account',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md p-8">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Fox className="h-12 w-12 text-primary" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">
              Register to get started with LEARN N&apos; EARN BLOG
            </p>
          </div>
        </div>
        <div className="mt-8">
          <AuthForm mode="register" />
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}