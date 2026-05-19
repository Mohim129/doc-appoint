import React from 'react';

const TopDoctorsSection = () => {


  // filler for now for visuals
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
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Top Rated Doctors</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Highly reviewed specialists ready to see you.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-surface-container-lowest rounded-xl overflow-hidden doctor-card-shadow border border-outline-variant/30 flex flex-col group hover:-translate-y-1 transition-transform duration-300">
            <div className="relative h-64 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={doctor.name} src={doctor.image} />
              <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-sm" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="font-label-md text-label-md text-on-surface">{doctor.rating}</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface">{doctor.name}</h3>
              <span className="text-primary font-label-md text-label-md mb-4 block">{doctor.specialty}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-2">{doctor.description}</p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
                  <span className="text-body-sm font-body-sm">{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm" data-icon="work_history">work_history</span>
                  <span className="text-body-sm font-body-sm">{doctor.experience}</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                  <span className="text-label-sm font-label-sm text-on-surface-variant block uppercase tracking-wider">Consultation</span>
                  <span className="text-headline-md font-headline-md text-on-surface font-bold">{doctor.price}</span>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-all active:scale-95 shadow-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDoctorsSection;
