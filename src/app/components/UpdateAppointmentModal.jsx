"use client";

import React, { useState, useEffect } from 'react';

const UpdateAppointmentModal = ({ isOpen, onClose, initialData }) => {
    const [patientName, setPatientName] = useState(initialData?.patientName || '');
    const [date, setDate] = useState(initialData?.date || '');
    const [time, setTime] = useState(initialData?.time || '');
    const [reason, setReason] = useState(initialData?.reason || '');

    useEffect(() => {
        if (isOpen) {
            setPatientName(initialData?.patientName || '');
            setDate(initialData?.date || '');
            setTime(initialData?.time || '');
            setReason(initialData?.reason || '');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Changes saved successfully!');
        onClose();
    };

    return (
        <div 
            className={`${isOpen ? 'flex' : 'hidden'} fixed inset-0 z-[100] items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm transition-all duration-300`} 
        >
            <div className="bg-surface-container-lowest w-full max-w-[400px] max-h-[75vh] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30 relative">

                <div className="px-6 py-4 flex items-center justify-between border-b border-surface-variant">
                    <h2 className="font-headline-md text-headline-md text-on-surface">Update Appointment</h2>
                    <button 
                        className="text-on-surface-variant hover:bg-surface-variant p-1 rounded-full transition-colors active:scale-90" 
                        onClick={onClose}
                        type="button"
                    >
                        <span className="material-symbols-outlined" data-icon="close">close</span>
                    </button>
                </div>

                <form className="p-6 space-y-5 overflow-y-auto" onSubmit={handleSubmit}>

                    <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant block">Doctor</label>
                        <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/50 cursor-not-allowed">
                            <span className="material-symbols-outlined text-primary" data-icon="medical_services">medical_services</span>
                            <span className="font-body-md text-on-surface opacity-80">{initialData?.doctorName}</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="patient_name">Patient Name</label>
                        <div className="relative group">
                            <input 
                                className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border hover:border-primary/50 text-on-surface" 
                                id="patient_name" 
                                name="patient_name" 
                                placeholder="Enter patient name" 
                                type="text" 
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="space-y-1">
                            <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="date">Date</label>
                            <input 
                                className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border text-on-surface" 
                                id="date" 
                                name="date" 
                                type="date" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="time">Time</label>
                            <input 
                                className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border text-on-surface" 
                                id="time" 
                                name="time" 
                                type="time" 
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="reason">Reason for Visit</label>
                        <textarea 
                            className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border resize-none text-on-surface" 
                            id="reason" 
                            name="reason" 
                            placeholder="Briefly describe the reason..." 
                            rows="3"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="pt-4 flex flex-col gap-3">
                        <button 
                            className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-4 rounded-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group" 
                            type="submit"
                        >
                            <span className="material-symbols-outlined text-[20px]" data-icon="save">save</span>
                            Save Changes
                        </button>
                        <button 
                            className="w-full bg-secondary-container/20 hover:bg-secondary-container/40 text-on-secondary-container font-label-md text-label-md py-4 rounded-lg active:scale-95 transition-all" 
                            type="button"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAppointmentModal;
