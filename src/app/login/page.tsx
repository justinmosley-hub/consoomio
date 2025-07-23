import Auth from '../../components/Auth';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <Auth mode="signin" />
      <p className="mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
      </p>
      <p className="mt-2">
        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>
      </p>
    </main>
  );
} 