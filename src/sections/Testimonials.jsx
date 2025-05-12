import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Client Feedback Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <GlowCard
              card={testimonial}
              key={testimonial.name}
            >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                  />
                </div>
                <p className="text-white-50 font-bold">
                  {testimonial.name}
                </p>
                <p className="text-white-50 font-bold">
                  {testimonial.mentions}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
