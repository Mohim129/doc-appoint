import React from 'react';
import DoctorsCard from '@/app/components/DoctorsCard';

const AllAppointmentsPage = async () => {
    const res = await fetch("http://localhost:5000/doctors");
    const doctors = await res.json();
    console.log(doctors);

    // if (loading) {
    //   return (
    //     <div className="flex justify-center items-center min-h-screen">
    //       <span className="loading loading-spinner loading-xl"></span>
    //     </div>
    //   );
    // }

    return (
        <main className="bg-background min-h-screen pb-section-gap">
            <section className="bg-surface-container-low py-12 mb-8">
                <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">All Appointments</h1>
                    <p className="font-body-md text-on-surface-variant">Browse through all our available specialists to find the right care for you.</p>
                </div>
            </section>

            <section className="px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {doctors.map((doctor, index) => (
                        <DoctorsCard key={index} doctor={doctor} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AllAppointmentsPage;