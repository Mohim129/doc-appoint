"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/app/components/BookingModal';

const DoctorProfilePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
            <main className="max-w-container-max mx-auto px-margin-desktop pt-8 pb-section-gap">

                <nav className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-8">
                    <Link className="hover:text-primary" href="/">Home</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <Link className="hover:text-primary" href="/all-appointments">All Appointments</Link>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-primary">Dr. Nadia Akter</span>
                </nav>
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap mb-section-gap items-start bg-surface-container-lowest p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-outline-variant">

                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 transition-transform group-hover:scale-105"></div>
                        <img 
                            alt="Dr. Nadia Akter portrait" 
                            className="w-full aspect-[4/5] object-cover rounded-[1.5rem] shadow-lg border-4 border-surface-container-lowest" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPzYO4I7eG_RXRH5TfDZeK4tTGa2y9Dr9S3FjGRT7LQCIRHDGoDTjwQvQO4cfqSQSlZWj8ZaT6yOEyHRFYQEt1M9bGMCK4q_EmSPOfKNp6VW9VcBH-Re7dsJRGMcH5mRRItSC8sZLWa0AqkxRpwYN6lpMYX4kYuupdXy7tn7aV5DzpMyjnbM7_FVMRCTx2JJ2s0pBHp8tO1rkxiI6HOIqFjmV92v2PxtxjgCRzixwJdQtyuIWrqq0IeG0CAaNZBFEVziRmn1Xv4vxC"
                        />
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8">
                        <div className="flex flex-col gap-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm w-fit">
                                Dermatologist
                            </span>
                            <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">Dr. Nadia Akter</h1>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="text-body-md font-bold">4.9</span>
                                <span className="text-on-surface-variant text-body-md">/ 5.0 (250 reviews)</span>
                            </div>
                        </div>

                        <p className="text-body-lg text-on-surface-variant leading-relaxed">
                            Skin specialist offering expert acne treatment, advanced laser therapy, and comprehensive cosmetic dermatology with a dedicated, personalized approach to patient wellness.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface-variant">Experience</p>
                                    <p className="text-body-md font-bold">8 years</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">domain</span>
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface-variant">Hospital</p>
                                    <p className="text-body-md font-bold">Apollo Hospital</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface-variant">Location</p>
                                    <p className="text-body-md font-bold">Bashundhara, Dhaka</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div>
                                    <p className="text-label-sm text-on-surface-variant">Consultation Fee</p>
                                    <p className="text-body-md font-bold">৳700</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-label-md font-label-md text-on-surface uppercase tracking-wider">Availability</h3>
                            <div className="flex flex-wrap gap-3">
                                <button className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-label-md font-label-md">
                                    11:00 AM - 02:00 PM
                                </button>
                                <button className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-label-md font-label-md">
                                    06:00 PM - 09:00 PM
                                </button>
                            </div>
                        </div>

                        <button 
                            className="mt-4 bg-primary text-on-primary py-4 px-10 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all w-fit" 
                            onClick={() => setIsModalOpen(true)}
                        >
                            Book Appointment
                        </button>
                    </div>
                </section>
            </main>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                doctorName="Dr. Nadia Akter" 
            />
        </div>
    );
};

export default DoctorProfilePage;
