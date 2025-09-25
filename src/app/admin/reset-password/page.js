'use client';

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // token from email link
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check token presence
  useEffect(() => {
    if (!token) {
      setMessage("Invalid or expired reset link. Please check your email.");
      setTokenValid(false);
    } else {
      setTokenValid(true);
    }
  }, [token]);

  // Password validation function
  const isPasswordValid = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!tokenValid) return;

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!isPasswordValid(newPassword)) {
      setMessage("Password must be 8+ characters, include uppercase, number, and symbol.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Invalid or expired token.");
        return;
      }

      setMessage("Password reset successfully! Redirecting to login...");
      setTimeout(() => router.push("/admin/login"), 2000);
    } catch (err) {
      console.error(err);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleReset} className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Reset Password</h2>

        {!tokenValid ? (
          <p className="text-red-600 text-center">{message}</p>
        ) : (
          <>
            {/* New Password Field */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-[#f99c00]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={
                loading ||
                newPassword !== confirmPassword ||
                !isPasswordValid(newPassword)
              }
              className={`w-full py-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-[#f99c00] hover:bg-[#e08c00]'}`}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>

            {message && <p className="mt-2 text-center text-red-600">{message}</p>}
          </>
        )}
      </form>
    </div>
  );
}
