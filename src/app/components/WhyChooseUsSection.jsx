'use client';

import React, { useState, useEffect } from 'react';

const WhyChooseUsSection = () => {
  const cards = [
    {
      icon: 'verified',
      title: 'Verified Doctors',
      description: 'Every specialist on DocAppoint is vetted, licensed, and reviewed by real patients.',
      iconColor: 'text-primary',
      iconBg: 'bg-primary-container/20',
    },
    {
      icon: 'schedule',
      title: 'Instant Booking',
      description: 'Skip the calls. Reserve a slot in seconds and get instant confirmation.',
      iconColor: 'text-secondary',
      iconBg: 'bg-secondary/10',
    },
    {
      icon: 'favorite',
      title: 'Patient-First Care',
      description: 'Transparent fees, clear availability, and a smooth experience from start to finish.',
      iconColor: 'text-tertiary',
      iconBg: 'bg-tertiary-container/20',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Setup window size checking
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex, cards.length]);

  return (
    <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Why Choose DocAppoint?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Built around your health and your time.</p>
        </div>
        
        {/* Carousel Outer Wrapper */}
        <div 
          className="w-full overflow-hidden md:overflow-visible py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Track */}
          <div
            className="flex md:flex-row transition-transform duration-500 ease-in-out md:transform-none md:w-full md:justify-center md:gap-4 lg:gap-8"
            style={{
              transform: isMobile ? `translateX(-${activeIndex * 100}%)` : 'none',
              width: isMobile ? `${cards.length * 100}%` : '100%',
            }}
          >
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-500 ease-in-out cursor-pointer rounded-2xl bg-surface-container-lowest text-center flex flex-col items-center justify-center
                    ${isMobile ? 'w-1/3 px-6 shrink-0' : 'w-full md:w-1/3'}
                    ${isActive 
                      ? 'p-10 shadow-xl border-2 border-secondary scale-100 md:scale-105 z-10 opacity-100' 
                      : 'p-8 doctor-card-shadow opacity-70 scale-90 md:scale-95 border-2 border-transparent z-0'
                    }`}
                >
                  <div className={`rounded-xl flex items-center justify-center mx-auto transition-all duration-500 ease-in-out ${card.iconBg}
                    ${isActive ? 'w-20 h-20 mb-8' : 'w-16 h-16 mb-6'}`}
                  >
                    <span
                      className={`material-symbols-outlined ${card.iconColor} transition-all duration-500 ${isActive ? 'text-4xl' : 'text-3xl'}`}
                      data-icon={card.icon}
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{card.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {cards.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? 'w-6 bg-secondary' : 'w-2 bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
