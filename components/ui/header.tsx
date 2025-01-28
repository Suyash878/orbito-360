import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, Sparkles, CreditCard, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationBar = () => {
  return (
    <nav className="w-full border-b bg-white fixed shadow-sm z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
                <span className="text-white font-semibold text-sm"></span>
            </Link>
            <Image src='/orbito360Logo.png' alt='Image' width={200} 
        height={300} ></Image>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">
                Features
              </Link>
            </div>
            <div className="relative group">
              <Link href="/use-cases" className="text-gray-600 hover:text-gray-900">
                Use cases
              </Link>
            </div>
            <div className="relative group">
              <Link href="/resources" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link
              href="/get-started"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-zinc-800 transition-colors"
            >
              Get started for free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;