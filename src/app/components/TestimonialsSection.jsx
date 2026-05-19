import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "RU",
      name: "Rahim Uddin",
      quote: "Booking was seamless and the doctor was incredibly attentive. Highly recommend DocAppoint!",
      bgClass: "bg-primary-fixed-dim",
      textClass: "text-primary",
      stars: 5
    },
    {
      initials: "MA",
      name: "Maria Akter",
      quote: "Found the perfect specialist within minutes. The platform saved me so much time.",
      bgClass: "bg-secondary-fixed-dim",
      textClass: "text-secondary",
      stars: 5
    },
    {
      initials: "SH",
      name: "Sajid Hasan",
      quote: "Great experience overall. Loved the clean interface and quick confirmation. Will use again for my regular checkups.",
      bgClass: "bg-tertiary-fixed-dim",
      textClass: "text-tertiary",
      stars: 4,
      outlineStar: true
    },
    {
      initials: "NJ",
      name: "Nusrat Jahan",
      quote: "My pediatrician was wonderful with my son. The way she handled a toddler was really professional and kind. Will book again.",
      bgClass: "bg-primary-fixed",
      textClass: "text-primary",
      stars: 5
    },
    {
      initials: "TA",
      name: "Tariq Aziz",
      quote: "Trusted doctors, transparent fees, and zero hassle. Five stars for the convenience and reliability.",
      bgClass: "bg-secondary-fixed",
      textClass: "text-secondary",
      stars: 5
    },
    {
      initials: "LC",
      name: "Lamia Chowdhury",
      quote: "Easy to use and very reliable. Made managing appointments effortless for my entire family.",
      bgClass: "bg-tertiary-fixed",
      textClass: "text-tertiary",
      stars: 4,
      outlineStar: true
    }
  ];

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">What Patients Say</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Real reviews from people who trust DocAppoint.</p>
      </div>
      <div className="masonry-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="masonry-item p-8 bg-surface-container-lowest rounded-2xl doctor-card-shadow border border-outline-variant/10 relative overflow-hidden">
            <span className="material-symbols-outlined absolute -top-2 -right-2 text-secondary/5 text-8xl pointer-events-none" data-icon="format_quote" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
            <div className="flex text-secondary mb-4 relative z-10">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm" data-icon="star" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              ))}
              {testimonial.outlineStar && (
                <span className="material-symbols-outlined text-sm" data-icon="star" data-weight="outline">star</span>
              )}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface mb-6 italic relative z-10">{testimonial.quote}</p>
            <div className="flex items-center gap-3 relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${testimonial.bgClass} ${testimonial.textClass}`}>
                {testimonial.initials}
              </div>
              <span className="font-label-md text-label-md text-on-surface">— {testimonial.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
