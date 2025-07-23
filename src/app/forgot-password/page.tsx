'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setError(error.message);
    else setMessage('Password reset email sent! Check your inbox.');
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 border rounded shadow bg-white">
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>
          {loading ? 'Sending...' : 'Send Reset Email'}
        </button>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
    </main>
  );
} 