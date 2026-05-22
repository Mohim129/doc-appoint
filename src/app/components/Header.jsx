"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Header = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auth state – correct hook usage
  const { data, isPending } = useSession();
  const user = data?.user ?? null;

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const currentTheme = isDark ? "dark" : "light";
    if (currentTheme !== "light") {
      setTimeout(() => setTheme(currentTheme), 0);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const handleLogout = async () => {
    await signOut({ callbackURL: "/" });
    toast.success("Logged out successfully!");
  };

  // Build navigation links – Dashboard only for authenticated users
  const baseLinks = [
    { href: "/", label: "Home" },
    { href: "/all-appointments", label: "All Appointments" },
  ];
  const navLinks = user
    ? [...baseLinks, { href: "/dashboard", label: "Dashboard" }]
    : baseLinks;

  return (
    <header className="sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto bg-surface/80 backdrop-blur-md shadow-sm">
      <Link className="flex items-center gap-2" href="/">
        <span
          className="material-symbols-outlined text-primary text-3xl"
          data-icon="medical_services"
        >
          medical_services
        </span>
        <span className="text-headline-md font-headline-md font-bold text-primary">
          DocAppoint
        </span>
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-label-md text-label-md transition-all duration-200 pb-1 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Right side: theme toggle + auth buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={toggleTheme}
          className="hidden md:block p-2 rounded-full hover:bg-surface-container-low transition-all duration-200 text-on-surface-variant hover:text-primary cursor-pointer"
          aria-label="Toggle theme"
        >
          <span
            className="material-symbols-outlined"
            data-icon={theme === "dark" ? "light_mode" : "dark_mode"}
          >
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </button>

        {/* Auth section – hidden while loading, then shows appropriate button */}
        {!isPending && (
          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-outline-variant">
            {user ? (
              <>
                <img
                  src={user.image || "/default-avatar.png"}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary-fixed object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/default-avatar.png";
                  }}
                />
                <button
                  onClick={handleLogout}
                  className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/signin"
                className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95"
              >
                Login
              </Link>
            )}
          </div>
        )}

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-surface-container-low transition-all text-on-surface-variant cursor-pointer ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface shadow-lg border-t border-outline-variant md:hidden">
          <nav className="flex flex-col py-4 px-margin-mobile gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-label-md text-label-md transition-all duration-200 py-2 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
              <span className="font-label-md text-on-surface-variant">
                Theme
              </span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-surface-container-low hover:bg-surface-container transition-all duration-200 text-on-surface-variant hover:text-primary"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon={theme === "dark" ? "light_mode" : "dark_mode"}
                >
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </button>
            </div>
            {/* Mobile auth button */}
            {!isPending && (
              <div className="pt-2">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-primary text-on-primary w-full py-3 rounded-lg font-label-md text-label-md hover:bg-surface-tint mt-2 active:scale-95 transition-all"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/signin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-primary text-on-primary w-full py-3 rounded-lg font-label-md text-label-md hover:bg-surface-tint mt-2 active:scale-95 transition-all block text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
