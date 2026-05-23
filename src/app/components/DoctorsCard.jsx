import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DoctorsCard = ({ doctor }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden doctor-card-shadow border border-outline-variant/30 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span
            className="material-symbols-outlined text-secondary text-sm"
            data-icon="star"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="font-label-md text-label-md text-on-surface">
            {doctor.rating}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          {doctor.name}
        </h3>
        <span className="text-primary font-label-md text-label-md mb-4 block">
          {doctor.specialty}
        </span>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">
          {doctor.description}
        </p>
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="location_on"
            >
              location_on
            </span>
            <span className="text-body-sm font-body-sm">{doctor.location}</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span
              className="material-symbols-outlined text-sm"
              data-icon="work_history"
            >
              work_history
            </span>
            <span className="text-body-sm font-body-sm">
              {doctor.experience}
            </span>
          </div>
        </div>
        <div className="mt-auto pt-6 border-t border-outline-variant/30 flex items-center justify-between">
          <div>
            <span className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">
              Consultation
            </span>
            <span className="text-headline-md font-headline-md text-on-surface font-bold">
              {doctor.price}
            </span>
          </div>
          <Link
            href={`/all-appointments/${doctor._id}`}
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95 shadow-sm block text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
