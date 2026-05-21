"use client";

import React, { useState, useEffect } from "react";
import DoctorsCard from "./DoctorsCard";
// import Loading from "@/app/components/Loading"; // adjust path to your Loading component

const apiBase = process.env.NEXT_PUBLIC_API_URL;

const TopDoctorsSection = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopDoctors = async () => {
      try {
        const res = await fetch(`${apiBase}/doctors`);
        if (!res.ok) throw new Error("Failed to fetch doctors");
        const data = await res.json();

        const topRated = data
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 3);
        setDoctors(topRated);
      } catch (err) {
        console.error("Error fetching top doctors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTopDoctors();
  }, []);

  // if (loading) return <Loading />;

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          Top Rated Doctors
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Highly reviewed specialists ready to see you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {doctors.map((doctor) => (
          <DoctorsCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default TopDoctorsSection;
