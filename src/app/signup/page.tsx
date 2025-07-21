import Auth from '../../components/Auth';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <Auth mode="signup" />
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">Back to Login</Link>
      </p>
    </main>
  );
} 