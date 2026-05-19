import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:h-[600px] w-full flex items-center py-16 lg:py-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6XTQ8uAmcvOUOkDAbvL7O93-yttFjKa5d2myVm2q2AvJ9udmjuElgOTy8lAOM-d6yQJWcOoLp-a7twjlBSP9KRH-rof_DsestIQ4K3quFUa57JfqWbqvuxjLj_LZpdR2f9RtpLu8lkMa47j0-kkIKF591wGT0UMRjmLv8e5COT4haRNzCouVOukxWgKimctzKmyUSRlisQ5pL_rm68dyGCyn_Tv5907twtKKZ2yhUzO3SGD_3HBP08o8aV2-Ww_HceQ3I8ZWbEZF"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181c22]/90 via-[#181c22]/75 to-[#181c22]/60 lg:bg-gradient-to-r lg:from-[#181c22]/85 lg:via-[#181c22]/50 lg:to-transparent"></div>
      </div>
      <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-[1280px] mx-auto w-full text-on-primary">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 mb-6">
          <span
            className="material-symbols-outlined text-sm text-secondary-container"
            data-icon="verified_user"
          >
            verified_user
          </span>
          <span className="text-label-sm font-label-sm text-secondary-container">
            VERIFIED HEALTHCARE
          </span>
        </div>
        <h1 className="font-display-lg text-display-lg mb-4 max-w-2xl">
          Care That Comes to You
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl">
          Browse top-rated doctors across specialties and book your slot in
          under a minute.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/all-appointments"
            className="flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-label-md hover:bg-primary/90 transition-all active:scale-95"
          >
            <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
            Browse Doctors
          </Link>
          <Link
            href="/my-bookings"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-label-md hover:bg-white/20 transition-all active:scale-95"
          >
            <FontAwesomeIcon className="w-4 h-4" icon={faCalendar} />
            My Bookings
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap justify-between sm:justify-start gap-x-8 gap-y-4 sm:gap-12 md:gap-20">
          <div className="flex flex-col min-w-[90px]">
            <span className="text-headline-md font-headline-md font-bold">
              500+
            </span>
            <span className="text-label-md font-label-md text-white/70">
              Verified Doctors
            </span>
          </div>
          <div className="flex flex-col min-w-[90px]">
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-secondary-container"
                data-icon="star"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-headline-md font-headline-md font-bold">
                4.9
              </span>
            </div>
            <span className="text-label-md font-label-md text-white/70">
              Avg. Rating
            </span>
          </div>
          <div className="flex flex-col min-w-[90px]">
            <span className="text-headline-md font-headline-md font-bold">
              50k+
            </span>
            <span className="text-label-md font-label-md text-white/70">
              Appointments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
