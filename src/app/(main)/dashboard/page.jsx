"use client";

import React, { useState } from 'react';
import BookingCard from '@/app/components/BookingCard';
import UpdateProfileModal from '@/app/components/UpdateProfileModal';

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('bookings');
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const bookings = [
        {
            doctorName: "Dr. Imran Hossain",
            specialty: "General Physician",
            doctorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXH_bUwXKA_jeeKwrDZ8PAKrJFmHI9Rt8L8F9NTdFkrSDqEr4cCQ2W6mj7FAvx5u2GAN29B4UN9uM82gJlJBHR47XfQwlqCXrTk4JkE-g3gaJ_7zE0zbFh8LGWEFhYFP45Fp0XOfU3uk2zpcuY9vYJF-KJ359IytIJai-G7mEiaCYJU9Rrms1xfIYmkLayESaIehROHrSr_7djiI2lt6CWpIaWFjflE00fFRhvyxXu2wOycDT-52tZGRaz5RZenbAQzpHnURoH12L7",
            patientName: "Gfadsgh User",
            date: "2026-05-24",
            time: "19:30",
            reason: "Routine health checkup and annual wellness review."
        },
        {
            doctorName: "Dr. Sabrina Yasmin",
            specialty: "Cardiologist",
            doctorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrv3YI3q9Fcvwv0wl5pQKLX53LEtXZCx0FFJkAryKl8IzVGdFiRzfEwft9RzlPmrKnqqCMm4jtDEVuHyaG5FODlAjg2tQkQemT0M-CGRsDlrghaz4Yl7q79YiBlvG4N879Ez7xqyUHsSJaaSStLGO1uilAlTXmy_PuSG6Pndu0C5Y2Gz32FH8kDPVVQTTlgcdCYNeWQU-0QWcEY8XzaICX3NNbdeZaqbmaKQqHWubvCgu0-69XRNO8_N84-4KeoYSSwTOi9MrM8-ha",
            patientName: "Gfadsgh User",
            date: "2026-05-21",
            time: "23:00",
            reason: "Follow-up for blood pressure medication review."
        },
        {
            doctorName: "Dr. Nadia Akter",
            specialty: "Pediatrician",
            doctorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHipMWNqU2faWHj38iXLTa9C6Nc7tc7JO3pQt-p6pqwoM9MYwEnx0PNHvBAcqKSUNeZqsMydecmqyaMUuLBgqqosU77o1oMHrVOZodcbwi1I3aTf4yZmljuR_lha9XaLNJZBI7O6_9GC6mU9YGVJF5dRS1eXW58RpMuvChb158IYn5q6uxIYzmchc71dG9kL2pg7EZNzajiC4Il3mX-tBI5L8EFgbuyf-gmY4p4Fe2R1P0-BD1kEtwWWO3xl8TL3rN-Zg9f9FpjnBU",
            patientName: "Gfadsgh User",
            date: "2026-05-08",
            time: "20:30",
            reason: "Sudden onset of mild fever and dry cough."
        }
    ];

    return (
        <div className="bg-background text-on-background font-body-md min-h-screen">
            <main className="pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen pt-12 flex flex-col items-center">
                <div className="mb-8 text-center flex flex-col items-center">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6">Dashboard</h1>
                    
                    <div className="flex items-center bg-surface-container-low p-1.5 rounded-xl w-fit">
                        <button 
                            className={`px-6 py-2.5 rounded-lg font-label-md text-label-md transition-all ${activeTab === 'bookings' ? 'bg-surface-container text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/30'}`}
                            onClick={() => setActiveTab('bookings')}
                        >
                            My Bookings
                        </button>
                        <button 
                            className={`px-6 py-2.5 rounded-lg font-label-md text-label-md transition-all ${activeTab === 'profile' ? 'bg-surface-container text-primary font-semibold' : 'text-on-surface-variant hover:bg-surface-variant/30'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            My Profile
                        </button>
                    </div>
                </div>

                {activeTab === 'bookings' && (
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter lg:grid-cols-2 max-w-4xl mx-auto w-full">
                        {bookings.map((booking, index) => (
                            <BookingCard key={index} {...booking} />
                        ))}
                    </section>
                )}

                {activeTab === 'profile' && (
                    <section className="w-full">
                        <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-surface-container-high max-w-2xl mx-auto">
                            <div className="flex items-center mb-8 pb-8 border-b border-surface-variant text-center flex-col">
                                <div className="relative">
                                    <img alt="User Profile" className="w-20 h-20 rounded-full bg-primary-container object-cover border-4 border-surface-container-lowest shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvuEnlX2Lp27BL_oH0XxHzHzJxY6l_YMYsrOQtLc9x8d-6xra51vUzbML9O75cFmhVblPXmFdDdjXn_aQrOEJga_ctX-t5SNgJets3bzKt7RlREDFzRqOw7Y2Jf4tDsgQw7IOo2TSmcoMsFj31AZkpSgIbLDNMZcpe-0CHgpr37_3HFnRfQbJJV6y8q_vr7v_IsdCHag-JdH5YUDNXRDEjaQB5QFmaeQTWO4AetPR9LcUeaZ8X7xyLig-L9RE5RF1_NSfyx8pC4Cc"/>
                                </div>
                                <div className="ml-6 mt-4">
                                    <h2 className="font-headline-md text-headline-md text-on-surface">Gfadsgh User</h2>
                                    <p className="text-on-surface-variant font-body-md">Verified Patient ID: #29481</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
                                    <div className="font-body-md text-on-surface py-2 border-b border-surface-variant/50">Gfadsgh User</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="font-label-md text-label-md text-on-surface-variant">Email Address</label>
                                    <div className="font-body-md text-on-surface py-2 border-b border-surface-variant/50">user.gfadsgh@example.com</div>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-center w-full">
                                <button 
                                    className="bg-primary text-on-primary px-8 py-3 rounded-xl font-label-md text-label-md hover:shadow-lg transition-all"
                                    onClick={() => setIsProfileModalOpen(true)}
                                >
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <UpdateProfileModal 
                isOpen={isProfileModalOpen} 
                onClose={() => setIsProfileModalOpen(false)} 
                initialName="Gfadsgh User"
                initialImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvuEnlX2Lp27BL_oH0XxHzHzJxY6l_YMYsrOQtLc9x8d-6xra51vUzbML9O75cFmhVblPXmFdDdjXn_aQrOEJga_ctX-t5SNgJets3bzKt7RlREDFzRqOw7Y2Jf4tDsgQw7IOo2TSmcoMsFj31AZkpSgIbLDNMZcpe-0CHgpr37_3HFnRfQbJJV6y8q_vr7v_IsdCHag-JdH5YUDNXRDEjaQB5QFmaeQTWO4AetPR9LcUeaZ8X7xyLig-L9RE5RF1_NSfyx8pC4Cc"
            />
        </div>
    );
};

export default DashboardPage;