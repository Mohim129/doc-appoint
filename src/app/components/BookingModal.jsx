"use client";

import React, { useEffect } from 'react';

const BookingModal = ({ isOpen, onClose, doctorName }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        alert('Booking Confirmed!');
        onClose();
    };

    return (
        <div 
            className={`${isOpen ? 'flex' : 'hidden'} fixed inset-0 z-[100] items-center justify-center px-4 backdrop-blur-[8px] bg-[#181c22]/40 transition-all duration-300`} 
            id="bookingModal"
        >
            <div className="bg-white w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Close Button */}
                <button 
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-all text-on-surface-variant z-20" 
                    onClick={onClose}
                    type="button"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Header */}
                <div className="p-8 pb-4 border-b border-surface-container shrink-0 z-10 bg-white">
                    <h2 className="text-headline-md font-headline-md text-on-surface mb-1">Book Appointment</h2>
                    <p className="text-body-md text-on-surface-variant">with <span className="text-primary font-bold">{doctorName}</span></p>
                </div>

                {/* Form */}
                <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto" onSubmit={handleBookingSubmit}>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">User Email</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required type="email" defaultValue="asrock@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">Doctor Name</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container text-on-surface-variant cursor-not-allowed" readOnly type="text" defaultValue={doctorName} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">Patient Name *</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Full name" required type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">Gender *</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white" required defaultValue="">
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">Phone *</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="01XXXXXXXXX" required type="tel" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">Date *</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required type="date" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface">Time *</label>
                        <input className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required type="time" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-label-md font-label-md text-on-surface">Reason (optional)</label>
                        <textarea className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Brief reason for visit" rows="3"></textarea>
                    </div>
                    <div className="md:col-span-2 pt-4">
                        <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary-container transition-all shadow-lg active:scale-95" type="submit">
                            Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
