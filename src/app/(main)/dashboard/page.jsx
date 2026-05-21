"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import BookingCard from "@/app/components/BookingCard";
import UpdateProfileModal from "@/app/components/UpdateProfileModal";
import toast from "react-hot-toast";

const apiBase = process.env.NEXT_PUBLIC_API_URL;

const DashboardPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const user = session?.user ?? null;

  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!isPending && !user) {
      router.replace("/signin?callbackUrl=/dashboard");
    }
  }, [isPending, user, router]);

  // Fetch user's appointments
  useEffect(() => {
    if (!user) return;
    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `${apiBase}/appointments?userEmail=${encodeURIComponent(user.email)}`,
        );
        if (!res.ok) throw new Error("Failed to fetch appointments");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        toast.error("Could not load appointments");
        console.error(err);
      } finally {
        setLoadingBookings(false);
      }
    };
    fetchAppointments();
  }, [user]);

  // Delete appointment handler (passed to BookingCard)
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${apiBase}/appointments/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setBookings((prev) => prev.filter((b) => b._id !== id));
      toast.success("Appointment deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete appointment");
      console.error(err);
    }
  };

  // Update appointment handler (to be used after save in modal)
  const handleUpdate = (updated) => {
    setBookings((prev) =>
      prev.map((b) => (b._id === updated._id ? updated : b)),
    );
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      <main className="pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen pt-12 flex flex-col items-center">
        <div className="mb-8 text-center flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-6">
            Dashboard
          </h1>

          <div className="flex items-center bg-surface-container-low p-1.5 rounded-xl w-fit">
            <button
              className={`px-6 py-2.5 rounded-lg font-label-md text-label-md transition-all ${
                activeTab === "bookings"
                  ? "bg-surface-container text-primary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-variant/30"
              }`}
              onClick={() => setActiveTab("bookings")}
            >
              My Bookings
            </button>
            <button
              className={`px-6 py-2.5 rounded-lg font-label-md text-label-md transition-all ${
                activeTab === "profile"
                  ? "bg-surface-container text-primary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-variant/30"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              My Profile
            </button>
          </div>
        </div>

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <section className="w-full max-w-4xl mx-auto">
            {loadingBookings ? (
              <div className="flex justify-center py-12">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : bookings.length === 0 ? (
              <div className="text-center py-12 text-on-surface-variant">
                <p className="text-body-lg">No bookings yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                {bookings.map((booking) => (
                  <BookingCard
                    key={booking._id}
                    booking={booking}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && user && (
          <section className="w-full max-w-2xl mx-auto">
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-surface-container-high">
              <div className="flex flex-col items-center mb-8 pb-8 border-b border-surface-variant">
                <div className="relative mb-4">
                  <img
                    alt="User Profile"
                    className="..."
                    src={user.image || "/default-avatar.png"}
                    width={80}
                    height={80}
                  />
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  {user.name || "User"}
                </h2>
                <p className="text-on-surface-variant font-body-md">
                  {user.email}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="font-label-md text-label-md text-on-surface-variant">
                    Full Name
                  </label>
                  <div className="font-body-md text-on-surface py-2 border-b border-surface-variant/50">
                    {user.name || "Not set"}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="font-label-md text-label-md text-on-surface-variant">
                    Email Address
                  </label>
                  <div className="font-body-md text-on-surface py-2 border-b border-surface-variant/50">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-center">
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
        initialName={user?.name || ""}
        initialImage={user?.image || ""}
        user={user} // pass full user for update API
      />
    </div>
  );
};

export default DashboardPage;
