import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:h-[600px] w-full flex items-center py-16 lg:py-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" data-alt="A professional medical setting featuring two diverse healthcare practitioners in white coats examining a digital interface together. The lighting is bright and airy, conveying a sense of clean professionalism and collaborative care. The overall aesthetic is modern and corporate with soft violet and cool blue undertones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6XTQ8uAmcvOUOkDAbvL7O93-yttFjKa5d2myVm2q2AvJ9udmjuElgOTy8lAOM-d6yQJWcOoLp-a7twjlBSP9KRH-rof_DsestIQ4K3quFUa57JfqWbqvuxjLj_LZpdR2f9RtpLu8lkMa47j0-kkIKF591wGT0UMRjmLv8e5COT4haRNzCouVOukxWgKimctzKmyUSRlisQ5pL_rm68dyGCyn_Tv5907twtKKZ2yhUzO3SGD_3HBP08o8aV2-Ww_HceQ3I8ZWbEZF"/>
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface/90 via-on-surface/75 to-on-surface/60 lg:bg-gradient-to-r lg:from-on-surface/85 lg:via-on-surface/50 lg:to-transparent"></div>
      </div>
      <div className="relative z-10 px-margin-mobile lg:px-margin-desktop max-w-[1280px] mx-auto w-full text-on-primary">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 mb-6">
          <span className="material-symbols-outlined text-sm text-secondary-container" data-icon="verified_user">verified_user</span>
          <span className="text-label-sm font-label-sm text-secondary-container">VERIFIED HEALTHCARE</span>
        </div>
        <h1 className="font-display-lg text-display-lg mb-4 max-w-2xl">Care That Comes to You</h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl">Browse top-rated doctors across specialties and book your slot in under a minute.</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden min-w-[320px] max-w-full flex-1 sm:flex-initial">
            <span className="material-symbols-outlined px-4 text-white/70" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-white placeholder-white/60 w-full py-4 px-2 font-body-md outline-none" placeholder="Search doctors, specialties..." type="text"/>
            <button className="bg-tertiary-container text-on-tertiary-container px-6 py-4 font-label-md hover:bg-tertiary transition-all active:scale-95 whitespace-nowrap">Browse Doctors</button>
          </div>
          <button className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-label-md hover:bg-white/20 transition-all active:scale-95">
            <span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
            My Bookings
          </button>
        </div>
        <div className="mt-16 flex flex-wrap justify-between sm:justify-start gap-x-8 gap-y-4 sm:gap-12 md:gap-20">
          <div className="flex flex-col min-w-[90px]">
            <span className="text-headline-md font-headline-md font-bold">500+</span>
            <span className="text-label-md font-label-md text-white/70">Verified Doctors</span>
          </div>
          <div className="flex flex-col min-w-[90px]">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary-container" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              <span className="text-headline-md font-headline-md font-bold">4.9</span>
            </div>
            <span className="text-label-md font-label-md text-white/70">Avg. Rating</span>
          </div>
          <div className="flex flex-col min-w-[90px]">
            <span className="text-headline-md font-headline-md font-bold">50k+</span>
            <span className="text-label-md font-label-md text-white/70">Appointments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
