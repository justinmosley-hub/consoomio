import Auth from '../../components/Auth';

export default function SignInPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign In</h1>
      <Auth mode="signin" />
    </main>
  );
} 