"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  const slides = [
    {
      bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR6XTQ8uAmcvOUOkDAbvL7O93-yttFjKa5d2myVm2q2AvJ9udmjuElgOTy8lAOM-d6yQJWcOoLp-a7twjlBSP9KRH-rof_DsestIQ4K3quFUa57JfqWbqvuxjLj_LZpdR2f9RtpLu8lkMa47j0-kkIKF591wGT0UMRjmLv8e5COT4haRNzCouVOukxWgKimctzKmyUSRlisQ5pL_rm68dyGCyn_Tv5907twtKKZ2yhUzO3SGD_3HBP08o8aV2-Ww_HceQ3I8ZWbEZF",
      badge: "VERIFIED HEALTHCARE",
      icon: "verified_user",
      title: "Care That Comes to You",
      description:
        "Browse top-rated doctors across specialties and book your slot in under a minute.",
    },
    {
      bg: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      badge: "MODERN CLINIC & TECH",
      icon: "medical_services",
      title: "Advanced Medical Care",
      description:
        "Experience state-of-the-art diagnostic facilities and highly personalized medical treatment plans.",
    },
    {
      bg: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
      badge: "TRUSTED BY FAMILIES",
      icon: "groups",
      title: "Compassionate Care for Every Family",
      description: "From routine checkups to specialized treatments, our network of trusted physicians is here to support your family's health journey."
    },
  ];

  return (
    <section className="relative min-h-[600px] lg:h-[600px] w-full overflow-hidden bg-[#181c22]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-full min-h-[600px] lg:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full flex items-center py-16 lg:py-0">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
              <Image
                src={slide.bg}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#181c22]/95 via-[#181c22]/80 to-[#181c22]/60 lg:bg-gradient-to-r lg:from-[#181c22]/90 lg:via-[#181c22]/60 lg:to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-[1280px] mx-auto w-full text-on-primary mt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 mb-6">
                <span
                  className="material-symbols-outlined text-sm text-secondary-container"
                  data-icon={slide.icon}
                >
                  {slide.icon}
                </span>
                <span className="text-label-sm font-label-sm text-secondary-container tracking-wider">
                  {slide.badge}
                </span>
              </div>
              
              <h1 className="font-display-lg text-display-lg mb-4 max-w-2xl animate-fade-in-up font-bold tracking-tight text-white">
                {slide.title}
              </h1>
              
              <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl animate-fade-in-up">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up">
                <Link
                  href="/all-appointments"
                  className="flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-label-md hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/25 cursor-pointer z-20"
                >
                  <FontAwesomeIcon className="w-4 h-4" icon={faMagnifyingGlass} />
                  Browse Doctors
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-label-md hover:bg-white/20 transition-all active:scale-95 cursor-pointer z-20"
                >
                  <FontAwesomeIcon className="w-4 h-4" icon={faCalendar} />
                  My Bookings
                </Link>
              </div>

              {/* Statistics Counters */}
              <div className="mt-16 flex flex-wrap justify-between sm:justify-start gap-x-8 gap-y-4 sm:gap-12 md:gap-20 animate-fade-in-up">
                <div className="flex flex-col min-w-[90px]">
                  <span className="text-headline-md font-headline-md font-bold text-white">
                    500+
                  </span>
                  <span className="text-label-md font-label-md text-white/75">
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
                    <span className="text-headline-md font-headline-md font-bold text-white">
                      4.9
                    </span>
                  </div>
                  <span className="text-label-md font-label-md text-white/75">
                    Avg. Rating
                  </span>
                </div>
                <div className="flex flex-col min-w-[90px]">
                  <span className="text-headline-md font-headline-md font-bold text-white">
                    50k+
                  </span>
                  <span className="text-label-md font-label-md text-white/75">
                    Appointments
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
