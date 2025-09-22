'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [lockUntil, setLockUntil] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState('');
  const router = useRouter();

  // Countdown timer for lock
  const formatTimeRemaining = () => {
    if (!lockUntil) return '';
    const now = new Date().getTime();
    const diff = new Date(lockUntil).getTime() - now;
    if (diff <= 0) {
      setLockUntil(null);
      setTimeRemaining('');
      return '';
    }
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let timer;
    if (lockUntil) {
      timer = setInterval(() => setTimeRemaining(formatTimeRemaining()), 1000);
    }
    return () => clearInterval(timer);
  }, [lockUntil]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Check lock
    if (lockUntil && new Date().getTime() < new Date(lockUntil).getTime()) {
      const minutesLeft = Math.ceil((new Date(lockUntil) - new Date()) / 60000);
      setError(`Too many failed attempts. Try again in ${minutesLeft} minute(s).`);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        if (data.lockUntil) {
          setLockUntil(data.lockUntil);
          setError(data.message || 'Account locked due to multiple attempts.');
        } else {
          setAttempts(data.attempts || attempts + 1);
          setError(data.message || 'Login failed. Check your credentials.');
        }

        // Handle new IP verification
        if (data.newIP) {
          setError('New IP detected. Verification email sent to admin.');
        }

        console.log('💻 Debug:', data); // Debug log for failed attempt
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>

          {error && (
            <div className={`p-3 rounded-md mb-4 ${lockUntil ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-700'}`}>
              {error} {lockUntil && <span className="font-medium">Time remaining: {timeRemaining}</span>}
            </div>
          )}

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={!!lockUntil || isLoading}
              placeholder="admin@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f99c00] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                disabled={!!lockUntil || isLoading}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f99c00] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-[#f99c00]"
                onClick={() => setShowPassword(!showPassword)}
                disabled={!!lockUntil || isLoading}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!!lockUntil || isLoading}
            className="w-full bg-[#f99c00] text-white py-3 px-4 rounded-md hover:bg-[#e08c00] font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? 'Processing...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
