"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BookingModal from "@/app/components/BookingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useSession } from "@/lib/auth-client";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

const DoctorProfilePage = ({ params }) => {
  const { doctorId } = use(params);
  const router = useRouter();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auth state
  const { data: session, isPending } = useSession();
  const user = session?.user ?? null;

  useEffect(() => {
    if (!isPending && !user) {
      router.replace(`/signin?callbackUrl=/all-appointments/${doctorId}`);
    }
  }, [isPending, user, router, doctorId]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`${apiBase}/doctors/${doctorId}`);
        if (!res.ok) throw new Error("Failed to fetch doctor data");
        const data = await res.json();
        setDoctor(data);
      } catch (err) {
        console.error(err);
        setDoctor(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [doctorId]);

  // Handle Book Appointment click
  const handleBookAppointment = () => {
    if (!user) {
      // Not logged in – redirect to login with callback to this page
      router.push(`/signin?callbackUrl=/all-appointments/${doctorId}`);
    } else {
      // Logged in – open the booking modal
      setIsModalOpen(true);
    }
  };

  if (!doctor) {
    return (
      <div className="text-center py-20 text-on-surface-variant">
        <h2 className="text-headline-lg font-headline-lg">Loading.....</h2>
        <Link
          href="/all-appointments"
          className="text-primary hover:underline mt-4 inline-block"
        >
          ← Back to all appointments
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <main className="max-w-container-max mx-auto px-margin-desktop pt-8 pb-section-gap">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant mb-8">
          <Link className="hover:text-primary" href="/">
            Home
          </Link>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <Link className="hover:text-primary" href="/all-appointments">
            All Appointments
          </Link>
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
          <span className="text-primary">{doctor.name}</span>
        </nav>

        {/* Doctor details */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-section-gap mb-section-gap items-start bg-surface-container-lowest p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-outline-variant">
          {/* Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -z-10 transition-transform group-hover:scale-105"></div>
            <div className="w-full aspect-[4/5] relative rounded-[1.5rem] shadow-lg border-4 border-surface-container-lowest overflow-hidden">
              <Image
                alt={`${doctor.name} portrait`}
                src={doctor.image}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-8">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-label-sm w-fit">
                {doctor.specialty}
              </span>
              <h1 className="text-headline-lg font-headline-lg text-on-surface tracking-tight">
                {doctor.name}
              </h1>
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span className="text-body-md font-bold">
                  {doctor.rating ?? "N/A"}
                </span>
                <span className="text-on-surface-variant text-body-md">
                  / 5.0 ({doctor.reviewCount ?? 0} reviews)
                </span>
              </div>
            </div>

            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {doctor.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Experience */}
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <FontAwesomeIcon icon={faClock} className="text-xl" />
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant">
                    Experience
                  </p>
                  <p className="text-body-md font-bold">{doctor.experience}</p>
                </div>
              </div>
              {/* Hospital */}
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">domain</span>
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant">
                    Hospital
                  </p>
                  <p className="text-body-md font-bold">{doctor.hospital}</p>
                </div>
              </div>
              {/* Location */}
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant">
                    Location
                  </p>
                  <p className="text-body-md font-bold">{doctor.location}</p>
                </div>
              </div>
              {/* Fee */}
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant">
                    Consultation Fee
                  </p>
                  <p className="text-body-md font-bold">৳{doctor.fee}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="flex flex-col gap-3">
              <h3 className="text-label-md font-label-md text-on-surface uppercase tracking-wider">
                Availability
              </h3>
              <div className="flex flex-wrap gap-3">
                {doctor.availability?.map((slot, index) => (
                  <button
                    key={index}
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-label-md font-label-md"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Appointment Button */}
            <button
              onClick={handleBookAppointment}
              className="mt-4 bg-primary text-on-primary py-4 px-10 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all w-fit"
            >
              Book Appointment
            </button>
          </div>
        </section>
      </main>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={doctor.name}
      />
    </div>
  );
};

export default DoctorProfilePage;
