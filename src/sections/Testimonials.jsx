import React from "react";
import Titleheader from "../components/Titleheader";
import { testimonials } from "../constants";
import Glowcard from "../components/Glowcard";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <Titleheader
          title="What People Say About Me?"
          sub="⭐️ Client Feedback Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial) => (
            <Glowcard
              card={testimonial}
              key={testimonial.name}
            >
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={`${import.meta.env.BASE_URL}images/${testimonial.imgPath}`}
                    alt={testimonial.name}
                  />
                </div>
                <p className="text-white-50 font-bold">{testimonial.name}</p>
                <p className="text-white-50 font-bold">
                  {testimonial.mentions}
                </p>
              </div>
            </Glowcard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
