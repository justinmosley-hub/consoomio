'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');
  const refreshToken = searchParams.get('refresh_token');
  const type = searchParams.get('type');

  useEffect(() => {
    // If this is a recovery link, set the session
    if (type === 'recovery' && accessToken && refreshToken) {
      supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
        .then(({ error }) => {
          if (error) {
            setError('This reset link is invalid or has expired. Please request a new password reset email.');
            setSessionReady(false);
          } else {
            setSessionReady(true);
          }
        });
    } else if (type === 'recovery') {
      setError('Missing access or refresh token. Please use the link from your email.');
    } else {
      // If not a recovery link, allow form (for dev/testing)
      setSessionReady(true);
    }
  }, [type, accessToken, refreshToken]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    if (!sessionReady) {
      setError('Session not ready. Please use the link from your email.');
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      if (
        error.message.toLowerCase().includes('jwt expired') ||
        error.message.toLowerCase().includes('invalid') ||
        error.message.toLowerCase().includes('token')
      ) {
        setError('This reset link is invalid or has expired. Please request a new password reset email.');
      } else {
        setError(error.message);
      }
    } else {
      setMessage('Password updated! You can now log in with your new password.');
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      {error && (
        <p className="mb-4 text-red-600">
          {error}
          {error.includes('reset link') && (
            <>
              {' '}
              <Link href="/forgot-password" className="text-blue-600 underline">Request a new reset email</Link>
            </>
          )}
        </p>
      )}
      {sessionReady && !message && !error && (
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 border rounded shadow bg-white">
          <label className="block mb-2 font-semibold">New Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      )}
      {message && <p className="mt-4 text-green-600">{message} <Link href="/login" className="text-blue-600 underline">Login</Link></p>}
    </main>
  );
} 