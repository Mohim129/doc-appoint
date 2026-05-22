"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

const UpdateAppointmentModal = ({ isOpen, onClose, appointment, onUpdate }) => {
  const [form, setForm] = useState({
    patientName: "",
    appointmentDate: "",
    appointmentTime: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Prefill when modal opens – but don't sync back to initial appointment (avoid effect warning)
  useEffect(() => {
    if (isOpen && appointment) {
      setForm({
        patientName: appointment.patientName || "",
        appointmentDate: appointment.appointmentDate?.slice(0, 10) || "",
        appointmentTime: appointment.appointmentTime || "",
      });
    }
  }, [isOpen, appointment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const tokenResponse = await authClient.token().catch(() => null);
      const token = tokenResponse?.data?.token;

      const headers = { 
        "Content-Type": "application/json" 
      };
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const res = await fetch(`${apiBase}/appointments/${appointment._id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          patientName: form.patientName,
          appointmentDate: form.appointmentDate,
          appointmentTime: form.appointmentTime,
        }),
      });
      if (!res.ok) throw new Error("Update failed");
      const data = await res.json();
      toast.success("Appointment updated successfully!");
      onUpdate({ ...appointment, ...form }); // update locally
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to update");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!appointment) return null;

  return (
    <div
      className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-[100] items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="bg-surface-container-lowest w-full max-w-[400px] max-h-[75vh] flex flex-col rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30 relative">
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-surface-variant">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Update Appointment
          </h2>
          <button
            className="text-on-surface-variant hover:bg-surface-variant p-1 rounded-full transition-colors active:scale-90"
            onClick={onClose}
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form className="p-6 space-y-5 overflow-y-auto" onSubmit={handleSubmit}>
          {/* Doctor (read-only) */}
          <div className="space-y-1">
            <label className="font-label-md text-label-md text-on-surface-variant block">
              Doctor
            </label>
            <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/50 cursor-not-allowed">
              <span className="material-symbols-outlined text-primary">
                medical_services
              </span>
              <span className="font-body-md text-on-surface opacity-80">
                {appointment.doctorName}
              </span>
            </div>
          </div>

          {/* Patient Name */}
          <div className="space-y-1">
            <label
              className="font-label-md text-label-md text-on-surface-variant block"
              htmlFor="patientName"
            >
              Patient Name
            </label>
            <input
              className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border hover:border-primary/50 text-on-surface"
              id="patientName"
              name="patientName"
              placeholder="Enter patient name"
              type="text"
              value={form.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label
                className="font-label-md text-label-md text-on-surface-variant block"
                htmlFor="appointmentDate"
              >
                Date
              </label>
              <input
                className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border text-on-surface [color-scheme:light] dark:[color-scheme:dark]"
                id="appointmentDate"
                name="appointmentDate"
                type="date"
                value={form.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-1">
              <label
                className="font-label-md text-label-md text-on-surface-variant block"
                htmlFor="appointmentTime"
              >
                Time
              </label>
              <input
                className="w-full bg-surface-container-lowest border-outline-variant rounded-lg px-4 py-3 font-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none border text-on-surface [color-scheme:light] dark:[color-scheme:dark]"
                id="appointmentTime"
                name="appointmentTime"
                type="time"
                value={form.appointmentTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md py-4 rounded-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group"
              type="submit"
              disabled={submitting}
            >
              <span className="material-symbols-outlined text-[20px]">
                save
              </span>
              {submitting ? "Saving..." : "Save Changes"}
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
