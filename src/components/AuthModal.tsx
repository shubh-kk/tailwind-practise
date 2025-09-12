'use client';

import { useState, useEffect } from 'react';
import { auth } from '@/lib/auth'; // Adjust path as needed
import { useTheme } from 'next-themes';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted || !isOpen) return null;

  const handleSignIn = async (provider: 'google' | 'github') => {
    try {
      // Better Auth's signIn function
      await auth.signIn.social({ provider });
      onClose(); // Close modal after successful sign-in
    } catch (error) {
      console.error("Sign-in error:", error);
      // Handle error (e.g., show notification)
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`rounded-lg p-6 w-96 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sign In</h2>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            &times;
          </button>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => handleSignIn('google')}
            className={`w-full py-2 px-4 rounded flex items-center justify-center gap-2 ${
              theme === 'dark' 
                ? 'bg-red-700 hover:bg-red-600' 
                : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            <GoogleIcon /> {/* You'll need to add your own Google icon */}
            Sign in with Google
          </button>
          
          <button
            onClick={() => handleSignIn('github')}
            className={`w-full py-2 px-4 rounded flex items-center justify-center gap-2 ${
              theme === 'dark' 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-800 hover:bg-gray-700 text-white'
            }`}
          >
            <GitHubIcon /> {/* You'll need to add your own GitHub icon */}
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple icon placeholders - replace with actual icons
const GoogleIcon = () => <span>G</span>;
const GitHubIcon = () => <span>GH</span>;

export default AuthModal;