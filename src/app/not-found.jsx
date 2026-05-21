import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-lg rounded-[2rem] border border-outline-variant/50 bg-surface-container-lowest/95 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <div className="mb-6 text-center">
          <p className="text-label-md font-label-md uppercase tracking-[0.25em] text-primary mb-3">
            404 error
          </p>
          <h1 className="text-display-lg font-display-lg text-on-surface mb-3">
            Page Not Found
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back to a working page.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-on-primary font-semibold shadow-lg shadow-primary/20 transition hover:bg-primary-container"
          >
            <span>Back to Home</span>
            
          </Link>
        </div>
      </div>
    </div>
  );
}
