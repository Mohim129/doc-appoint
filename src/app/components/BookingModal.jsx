"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

async function getAuthToken() {
  try {
    const res = await fetch("/api/auth-token");
    if (!res.ok) return null;
    const { token } = await res.json();
    return token;
  } catch {
    return null;
  }
}

const BookingModal = ({ isOpen, onClose, doctorName }) => {
  const { data: session } = useSession();
  const user = session?.user ?? null;
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const appointmentData = {
      doctorName: doctorName,
      patientName: formData.get("patientName"),
      gender: formData.get("gender"),
      phone: formData.get("phone"),
      appointmentDate: formData.get("appointmentDate"),
      appointmentTime: formData.get("appointmentTime"),
    };

    try {
      const token = await getAuthToken();
      const res = await fetch(`${apiBase}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(appointmentData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to book appointment");
      }

      toast.success("Appointment booked successfully!");
      form.reset();
      onClose();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-[100] items-center justify-center px-4 backdrop-blur-[8px] bg-[#181c22]/40 transition-all duration-300`}
      id="bookingModal"
    >
      <div className="bg-surface-container-lowest w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden relative">
        <button
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-all text-on-surface-variant z-20"
          onClick={onClose}
          type="button"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-8 pb-4 border-b border-surface-container shrink-0 z-10 bg-surface-container-lowest">
          <h2 className="text-headline-md font-headline-md text-on-surface mb-1">
            Book Appointment
          </h2>
          <p className="text-body-md text-on-surface-variant">
            with <span className="text-primary font-bold">{doctorName}</span>
          </p>
        </div>

        <form
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto"
          onSubmit={handleBookingSubmit}
        >
          {/* User Email (read-only, from session) */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              User Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container text-on-surface-variant cursor-not-allowed"
              readOnly
              type="email"
              value={user?.email || ""}
            />
          </div>

          {/* Doctor Name (read-only) */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Doctor Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container text-on-surface-variant cursor-not-allowed"
              readOnly
              type="text"
              value={doctorName}
            />
          </div>

          {/* Patient Name */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Patient Name *
            </label>
            <input
              name="patientName"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-surface-container-lowest text-on-surface"
              placeholder="Full name"
              required
              type="text"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Gender *
            </label>
            <select
              name="gender"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-surface-container-lowest text-on-surface"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Phone *
            </label>
            <input
              name="phone"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-surface-container-lowest text-on-surface"
              placeholder="01XXXXXXXXX"
              required
              type="tel"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Date *
            </label>
            <input
              name="appointmentDate"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-surface-container-lowest text-on-surface [color-scheme:light] dark:[color-scheme:dark]"
              required
              type="date"
            />
          </div>

          {/* Time */}
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Time *
            </label>
            <input
              name="appointmentTime"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-surface-container-lowest text-on-surface [color-scheme:light] dark:[color-scheme:dark]"
              required
              type="time"
            />
          </div>

          {/* Reason (optional) */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-label-md font-label-md text-on-surface">
              Reason (optional)
            </label>
            <textarea
              name="reason"
              className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-surface-container-lowest text-on-surface"
              placeholder="Brief reason for visit"
              rows="3"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-4">
            <button
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary-container transition-all shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
