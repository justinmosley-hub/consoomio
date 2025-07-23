'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { AuthUser } from '@supabase/supabase-js';

interface AuthProps {
  mode?: 'signin' | 'signup' | 'both';
}

export default function Auth({ mode = 'both' }: AuthProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Check for current user on mount
  // (for simplicity, not using useEffect here, but you can add it for persistence)

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else setUser(data.user);
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else setUser(data.user);
    setLoading(false);
  };

  const handleSignOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow mt-8">
      {user ? (
        <div>
          <p className="mb-2">Logged in as: <span className="font-bold">{user.email}</span></p>
          <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">
            {mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Sign Up' : 'Sign In / Sign Up'}
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <div className="flex gap-2 mb-2">
            {(mode === 'signin' || mode === 'both') && (
              <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>Sign In</button>
            )}
            {(mode === 'signup' || mode === 'both') && (
              <button onClick={handleSignUp} className="bg-green-500 text-white px-4 py-2 rounded" disabled={loading}>Sign Up</button>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
} 