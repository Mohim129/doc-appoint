"use client";

import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client"; // import the raw auth client for updateUser
import toast from "react-hot-toast";

const UpdateProfileModal = ({
  isOpen,
  onClose,
  initialName,
  initialImage,
  user,
}) => {
  const [name, setName] = useState(initialName || "");
  const [image, setImage] = useState(initialImage || "");
  const [submitting, setSubmitting] = useState(false);

  // Prefill when opening – avoid effect warning by using key on modal? Not needed if we just update on open, it's fine.
  useEffect(() => {
    if (isOpen) {
      setName(initialName || "");
      setImage(initialImage || "");
    }
  }, [isOpen, initialName, initialImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Use Better Auth's updateUser method
      await authClient.updateUser({ name, image });
      toast.success("Profile updated successfully!");
      onClose();
      // Refresh the session automatically; the parent will re-render with new user data
    } catch (err) {
      toast.error(err.message || "Failed to update profile");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-[100] items-center justify-center px-4 backdrop-blur-[8px] bg-[#181c22]/40 transition-all duration-300`}
    >
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative">
        <button
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-all text-on-surface-variant z-20"
          onClick={onClose}
          type="button"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-8 pb-4 border-b border-surface-container shrink-0 z-10 bg-surface-container-lowest">
          <h2 className="text-headline-md font-headline-md text-on-surface mb-1">
            Update Profile
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Change your display name and profile image
          </p>
        </div>

        <form className="p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Full Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-label-md font-label-md text-on-surface">
              Image URL
            </label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-on-surface"
              required
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <button
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary-container transition-all shadow-lg active:scale-95 disabled:opacity-60"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
