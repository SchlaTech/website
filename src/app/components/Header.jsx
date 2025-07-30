'use client';

import Link from 'next/link';

export default function Header({ title, subtitle }) {
  return (
    <header className="relative px-6 py-8 bg-[url('/images/comp.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-gray-900/50 z-0"></div>

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between z-10 px-4">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img src="/images/logo.png" alt="SchlaTech Logo" className="h-10 w-10 cursor-pointer" />
          </Link>
          <div className="text-3xl font-bold tracking-wide text-white dark:text-white">
            SCHLA<span className="text-blue-400">TECH</span>
          </div>
        </div>

        <ul className="flex space-x-6 text-white dark:text-white font-medium">
          <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="/#services" className="hover:text-blue-400 transition">Services</a></li>
          <li><a href="/#form" className="hover:text-blue-400 transition">Contact</a></li>
          <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
        </ul>
      </nav>

      <div className="relative z-10 mt-24 text-center text-white dark:text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">{subtitle}</p>
        <a href="#services" className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
          Explore Services
        </a>
      </div>
    </header>
  );
}
