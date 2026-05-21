"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const image = formData.get("image");
    const password = formData.get("password");

    if (!name || name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      newErrors.email = "Invalid email address";
    if (image && !/^https?:\/\/.+/i.test(image))
      newErrors.image = "Invalid URL";
    if (!password || password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    else {
      if (!/[a-z]/.test(password))
        newErrors.password = "Must include a lowercase letter";
      if (!/[A-Z]/.test(password))
        newErrors.password = "Must include an uppercase letter";
    }
    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image || undefined,
      callbackURL: "/signin",
    });

    if (error) {
      toast.error(error.message || "Sign up failed");
    } else if (data) {
      toast.success("Account created! Please sign in.");
      router.push("/signin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-margin-mobile md:px-margin-desktop">
      <div className="w-full max-w-md bg-surface-container-lowest p-8 rounded-2xl shadow-md border border-outline-variant/30">
        <h1 className="text-headline-lg font-headline-lg text-on-surface text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-label-md font-label-md text-on-surface mb-1"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.name && (
              <p className="text-error text-label-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-label-md font-label-md text-on-surface mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.email && (
              <p className="text-error text-label-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="image"
              className="block text-label-md font-label-md text-on-surface mb-1"
            >
              Photo URL (optional)
            </label>
            <input
              id="image"
              name="image"
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.image && (
              <p className="text-error text-label-sm mt-1">{errors.image}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-label-md font-label-md text-on-surface mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="At least 6 characters, 1 uppercase, 1 lowercase"
              required
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.password && (
              <p className="text-error text-label-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-on-primary py-3 rounded-xl font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95 shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/30"></div>
          </div>
          <div className="relative flex justify-center text-label-sm">
            <span className="px-4 bg-surface-container-lowest text-on-surface-variant">
              or
            </span>
          </div>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={async () => {
            try {
              await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
              });
            } catch (err) {
              toast.error("Google sign up failed");
            }
          }}
          className="w-full flex items-center justify-center gap-3 py-3 border border-outline-variant rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Sign In link */}
        <p className="text-center text-body-sm text-on-surface-variant mt-6">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-primary hover:underline font-label-md"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
