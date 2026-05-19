'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Determine theme from document class
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/all-appointments', label: 'All Appointments' },
    { href: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto bg-surface/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-3xl" data-icon="medical_services">medical_services</span>
        <span className="text-headline-md font-headline-md font-bold text-primary">DocAppoint</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-label-md text-label-md transition-all duration-200 pb-1 ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-surface-container-low transition-all duration-200 text-on-surface-variant hover:text-primary cursor-pointer"
          aria-label="Toggle theme"
        >
          <span
            className="material-symbols-outlined"
            data-icon={theme === 'dark' ? 'light_mode' : 'dark_mode'}
          >
            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
          <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
