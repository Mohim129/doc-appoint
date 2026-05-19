import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop mt-section-gap grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-[1280px] mx-auto bg-surface-container">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary text-3xl"
              data-icon="medical_services"
            >
              medical_services
            </span>
            <span className="text-headline-md font-headline-md font-bold text-primary">
              DocAppoint
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
            Book trusted doctors near you, manage appointments, and take charge
            of your health.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-secondary transition-all shadow-sm"
              href="#"
            >
              <span
                className="material-symbols-outlined text-xl"
                data-icon="facebook"
              >
                social_leaderboard
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-secondary transition-all shadow-sm"
              href="#"
            >
              <span
                className="material-symbols-outlined text-xl"
                data-icon="alternate_email"
              >
                alternate_email
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-secondary transition-all shadow-sm"
              href="#"
            >
              <span
                className="material-symbols-outlined text-xl"
                data-icon="camera"
              >
                camera
              </span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant hover:text-secondary transition-all shadow-sm"
              href="#"
            >
              <span
                className="material-symbols-outlined text-xl"
                data-icon="share"
              >
                share
              </span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-4">
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-sm text-body-sm"
              href="#"
            >
              Home
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-sm text-body-sm"
              href="#"
            >
              All Appointments
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-sm text-body-sm"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-sm text-body-sm"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface-variant hover:text-primary hover:underline transition-all font-body-sm text-body-sm"
              href="#"
            >
              Privacy Policy
            </a>
          </nav>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-6">
            Newsletter
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
            Stay updated with the latest medical news and tips.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-surface-container-lowest border-outline-variant rounded-lg flex-1 font-body-sm focus:ring-primary focus:border-primary outline-none px-4 text-on-surface"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md hover:bg-surface-tint transition-all">
              Join
            </button>
          </div>
        </div>
      </footer>
      <div className="w-full py-6 text-center bg-surface-container-high border-t border-outline-variant/10">
        <p className="text-body-sm font-body-sm text-on-surface-variant">
          © 2026 DocAppoint. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
