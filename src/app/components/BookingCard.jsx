"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import UpdateAppointmentModal from './UpdateAppointmentModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";

const BookingCard = ({ doctorName, specialty, doctorImage, patientName, date, time, reason }) => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    return (
        <>
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] border border-gray-300 border-surface-container-high p-6 flex flex-col transition-transform hover:scale-[1.01] duration-300">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="font-headline-md text-headline-md text-primary mb-1">{doctorName}</h3>
                        <span className="text-label-sm font-label-sm text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded-full">{specialty}</span>
                    </div>
                    <Image alt="Doctor profile" className="rounded-lg bg-surface-container-high object-cover" src={doctorImage} width={48} height={48} />
                </div>
                <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center text-on-surface-variant">
                        <span className="material-symbols-outlined mr-2 text-[20px]">person</span>
                        <span className="text-body-sm font-body-sm">Patient: <span className="font-medium text-on-surface">{patientName}</span></span>
                    </div>
                    <div className="flex items-center text-on-surface-variant">
                        <FontAwesomeIcon icon={faCalendar} className="mr-2 text-[16px] w-5" />
                        <span className="text-body-sm font-body-sm">Date: <span className="font-medium text-on-surface">{date}</span></span>
                    </div>
                    <div className="flex items-center text-on-surface-variant">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-[16px] w-5" />
                        <span className="text-body-sm font-body-sm">Time: <span className="font-medium text-on-surface">{time}</span></span>
                    </div>
                    <div className="flex items-start text-on-surface-variant">
                        <span className="material-symbols-outlined mr-2 text-[20px]">info</span>
                        <span className="text-body-sm font-body-sm leading-tight">Reason: <span className="font-medium text-on-surface">{reason}</span></span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button 
                        className="flex-1 border border-primary text-primary font-label-md text-label-md py-2.5 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center"
                        onClick={() => setIsUpdateModalOpen(true)}
                    >
                        <span className="material-symbols-outlined text-[18px] mr-1">edit</span> Update
                    </button>
                    <button className="flex-1 bg-error text-on-error font-label-md text-label-md py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px] mr-1">delete</span> Delete
                    </button>
                </div>
            </div>

            <UpdateAppointmentModal 
                isOpen={isUpdateModalOpen}
                onClose={() => setIsUpdateModalOpen(false)}
                initialData={{ doctorName, patientName, date, time, reason }}
            />
        </>
    );
};

export default BookingCard;
