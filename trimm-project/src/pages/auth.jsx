import React from 'react';
import AuthCard from '../components/AuthCard';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-dust-50 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>

      <div className="relative z-10">
        <AuthCard />
      </div>
    </div>
  );
}