"use client";

import React, { useState, useEffect } from "react";
import DoctorsCard from "@/app/components/DoctorsCard";
// import Loading from "@/app/components/Loading";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

const AllAppointmentsPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all doctors once
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch(`${apiBase}/doctors`);
        if (!res.ok) throw new Error("Failed to fetch doctors");
        const data = await res.json();
        setAllDoctors(data);
      } catch (err) {
        console.error(err);
        setAllDoctors([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  // Filter doctors based on search query (case‑insensitive)
  const filteredDoctors =
    searchQuery.trim() === ""
      ? allDoctors
      : allDoctors.filter((doctor) =>
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  // Handle search – could be triggered by button or Enter key
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

//   if (loading) return <Loading />;

  return (
    <main className="bg-background min-h-screen pb-section-gap">
      {/* Header section */}
      <section className="bg-surface-container-low py-12 mb-8">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
            All Appointments
          </h1>
          <p className="font-body-md text-on-surface-variant mb-8">
            Browse through all our available specialists to find the right care
            for you.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex items-center max-w-lg">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-on-surface-variant">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search doctors by name..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              className="ml-3 px-6 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95 shadow-sm"
            >
              Search
            </button>
            {/* Clear button (optional) */}
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput("");
                  setSearchQuery("");
                }}
                className="ml-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        {filteredDoctors.length === 0 ? (
          <div className="flex justify-center items-center py-12 text-on-surface-variant">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredDoctors.map((doctor) => (
              <DoctorsCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default AllAppointmentsPage;
