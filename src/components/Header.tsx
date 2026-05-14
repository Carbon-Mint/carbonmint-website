'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/carbonmint-logo.png"
              alt="CarbonMint Logo"
              width={50}
              height={50}
              className="transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-green-700 group-hover:text-green-800 transition-colors leading-none">
                CARBONMINT
              </span>
              <span className="text-xs text-gray-500 leading-none">Sustainable Farming</span>
            </div>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-green-700 transition-colors">
              Home
            </Link>
            <Link href="#rice360" className="hover:text-green-700 transition-colors">
              Rice360™
            </Link>
            <Link href="#carbon" className="hover:text-green-700 transition-colors">
              Carbon
            </Link>
            <Link href="#features" className="hover:text-green-700 transition-colors">
              Platform
            </Link>
            <Link href="#partners" className="hover:text-green-700 transition-colors">
              Partners
            </Link>
            <Link href="/about" className="hover:text-green-700 transition-colors">
              About Us
            </Link>
            <Link
              href="#contact"
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="#home"
              className="block hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#rice360"
              className="block hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rice360™
            </Link>
            <Link
              href="#carbon"
              className="block hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Carbon
            </Link>
            <Link
              href="#features"
              className="block hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              href="#partners"
              className="block hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link
              href="/about"
              className="block hover:text-green-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="block bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Talk to Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
