import React from "react";
import { words } from "../constants";
import Button from "../components/button";
import Heroexperience from "../components/Heromodels/Heroexperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/Animatedcounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        opacity: 0,
        y: 50,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1.5,
        duration: 3,
        ease: "power2. inOut",
      }
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 z-10">
        <img
          src={`${import.meta.env.BASE_URL}images/bg.png`}
          alt="background"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper flex flex-row gap-2">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              I'm Vladimir developer from San Francisco
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>
        {/* RIGHT: 3D MODEL */}

        <figure>
          <div className="hero-3d-layout">
            <Heroexperience />
          </div>
        </figure>
      </div>



      <AnimatedCounter />
    </section>
  );
};

export default Hero;
