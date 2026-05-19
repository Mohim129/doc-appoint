import React from 'react';
import DoctorsCard from '@/app/components/DoctorsCard';

const AllAppointmentsPage = () => {

    const doctors = [
        {
          name: "Dr. Ayesha Rahman",
          specialty: "Cardiologist",
          description: "Highly experienced cardiologist specializing in heart diseases, preventive care, and patient-centered treatment.",
          location: "Dhanmondi, Dhaka",
          experience: "10 years experience",
          price: "৳800",
          rating: "4.9",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCwePlI-FE0Vt0L0UGcyz0QRIM_JHijNLZzovzx9x3tJbRigSc3yDvApM4egpvZAzRM_0LNw77gQpcF2kPxLE-wpU5HazXnnix2YXku1gMGpbhoEz6FFHnUU_62T3TqOkQ9cb24lFPAczCWx03BeSe1OYYfGM7n7ZM6KCPXZk_BttECseXudPL1H_A72buOv82Hyvqp-qFCTP4B_dqYT_yA-Vzpr3uojLtWcy1CnwnK1KmJPJ6wLu03OxS8PB2qwpMDy_r8-YwKRTj"
        },
        {
          name: "Dr. Nadia Akter",
          specialty: "Dermatologist",
          description: "Skin specialist offering acne treatment, laser therapy, and cosmetic dermatology with personalized care.",
          location: "Bashundhara, Dhaka",
          experience: "8 years experience",
          price: "৳700",
          rating: "4.9",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTLWNsxy73zsp9ngshiTI5u1dww81q9g9SG2k3y4K_Ii-tvO4A0aRZKhYxQdJfdk5DOaYlMQMSdd7vjfBJLcYsmqcS8wbsIBZMh080jzZSb1rv-iZFfz88eS5VYUm8NPzfJVy9ogV_32wuzm6MVN2-yYkGy-YjW-Cu4kT7UK9YxVVXycjuShUlss6QXyBxmCplXdVde6md1LWVvo4DcsbsTGd0cz6JV0xn8qfkwUpJYNVK0NR9q9BsFfXAukDawM8FatFWRA1gv32o"
        },
        {
          name: "Dr. Imran Hossain",
          specialty: "Neurologist",
          description: "Neurology consultant with expertise in stroke care, epilepsy management, and headache disorders.",
          location: "Panthapath, Dhaka",
          experience: "12 years experience",
          price: "৳1000",
          rating: "4.8",
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyjD8gUdSJNi7TCEi72kJ1e3OsdLlbqjzP8Mwzr3uYpugUHTOKhYBT0n18-G65pzuc6D2049_l_ezyxdK_2Cu2vdcMhjCBc_loGsiZBc9cYK-SE3wbJ01Ed-F5HeBoLdZ9MFnhVdxb7D2sg5eMxv8A9BKmIS1pBhg_7BAWI9VPBvGuaY_Y-HxFYxzM7ad2Ds0JS4uqn0QOut-0O2yGbkl4qCVZdvA2cYJB_26oWjy8RDlZPVPbPD_Ygms45DpN5iCV7h_eYC0rYKsn"
        }
      ];

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