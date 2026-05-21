"use client";
import React, { useState } from "react";
import Image from "next/image";
import UpdateAppointmentModal from "./UpdateAppointmentModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import toast from "react-hot-toast";

const BookingCard = ({ booking, onDelete, onUpdate }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this appointment?")) {
      await onDelete(booking._id);
    }
  };

  return (
    <>
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] border border-surface-container-high p-6 flex flex-col transition-transform hover:scale-[1.01] duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-1">
              {booking.doctorName}
            </h3>
            {/* If you have specialty in booking, show it; otherwise you can fetch from doctor */}
          </div>
          {/* Optionally show doctor image if available in booking */}
        </div>
        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center text-on-surface-variant">
            <span className="material-symbols-outlined mr-2 text-[20px]">
              person
            </span>
            <span className="text-body-sm font-body-sm">
              Patient:{" "}
              <span className="font-medium text-on-surface">
                {booking.patientName}
              </span>
            </span>
          </div>
          <div className="flex items-center text-on-surface-variant">
            <FontAwesomeIcon
              icon={faCalendar}
              className="mr-2 text-[16px] w-5"
            />
            <span className="text-body-sm font-body-sm">
              Date:{" "}
              <span className="font-medium text-on-surface">
                {booking.appointmentDate?.slice(0, 10)}
              </span>
            </span>
          </div>
          <div className="flex items-center text-on-surface-variant">
            <FontAwesomeIcon icon={faClock} className="mr-2 text-[16px] w-5" />
            <span className="text-body-sm font-body-sm">
              Time:{" "}
              <span className="font-medium text-on-surface">
                {booking.appointmentTime}
              </span>
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="flex-1 border border-primary text-primary font-label-md text-label-md py-2.5 rounded-lg hover:bg-primary/5 transition-colors flex items-center justify-center"
            onClick={() => setIsUpdateModalOpen(true)}
          >
            <span className="material-symbols-outlined text-[18px] mr-1">
              edit
            </span>{" "}
            Update
          </button>
          <button
            className="flex-1 bg-error text-on-error font-label-md text-label-md py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            onClick={handleDelete}
          >
            <span className="material-symbols-outlined text-[18px] mr-1">
              delete
            </span>{" "}
            Delete
          </button>
        </div>
      </div>

      <UpdateAppointmentModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        appointment={booking}
        onUpdate={(updated) => {
          onUpdate(updated);
          setIsUpdateModalOpen(false);
        }}
      />
    </>
  );
};

export default BookingCard;
