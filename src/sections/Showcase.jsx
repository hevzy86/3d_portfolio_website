import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// iPad-specific styles
const iPadStyles = {
  "@media (min-width: 768px) and (max-width: 1024px)": {
    marginTop: "80px",
  },
};

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const textContentRef = useRef(null);

  // Dedicated effect for iPad-specific styling
  useEffect(() => {
    const handleIPadStyling = () => {
      if (textContentRef.current) {
        // Check if device is iPad Pro sized (around 1024×1366)
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
          textContentRef.current.style.marginTop = "60px";
        } else {
          textContentRef.current.style.marginTop = "";
        }
      }

      // Apply iPad-specific styling to project titles
      const titleContainers = document.querySelectorAll(".title-container");
      titleContainers.forEach((container) => {
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
          container.style.paddingTop = "10px";
          container.style.transform = "translateY(40%)";
        } else {
          container.style.paddingTop = "";
          container.style.transform = "";
        }
      });
    };

    // Initial call
    handleIPadStyling();

    // Add event listener for resize
    window.addEventListener("resize", handleIPadStyling);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleIPadStyling);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo("#work", { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Handle iPad-specific styling
    const handleResize = () => {
      if (textContentRef.current) {
        // Check if device is iPad-sized
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
          textContentRef.current.style.marginTop = "40px";
        } else {
          textContentRef.current.style.marginTop = "";
        }
      }

      // Apply iPad-specific styling to project titles
      const titleContainers = document.querySelectorAll(".title-container");
      titleContainers.forEach((container) => {
        if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
          container.style.paddingTop = "10px";
          container.style.transform = "translateY(40%)";
        } else {
          container.style.paddingTop = "";
          container.style.transform = "";
        }
      });
    };

    // Initial call
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ].filter(Boolean);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            if (textContentRef.current) {
              textContentRef.current.style.opacity = 1;
              textContentRef.current.style.zIndex = 10;
              textContentRef.current.style.position = "relative";
              handleResize(); // Apply iPad-specific styling after animation
            }
          },
        }
      );
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="app-showcase relative"
      id="work"
      ref={sectionRef}
      style={{ isolation: "isolate" }}
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper">
            <div
              className="image-wrapper"
              ref={project1Ref}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/project1.png`}
                alt="Ryde"
              />
            </div>
            <div
              className="text-content relative z-10 md:mt-10 lg:mt-5"
              ref={textContentRef}
              style={{
                position: "relative",
                zIndex: 10,
                ...(window.innerWidth >= 768 && window.innerWidth <= 1024
                  ? { marginTop: "20px" }
                  : {}),
              }}
            >
              <h2 className="relative z-10 bg-black bg-opacity-80 p-2 rounded-md">
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>

              <p className="text-white-50 md:text-xl relative z-10 bg-black bg-opacity-80 p-2 rounded-md mt-4">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          {/* RIGHT */}

          <div className="project-list-wrapper overflow-hidden flex justify-center">
            {/* Project 2 */}
            <div
              className="mb-24 relative"
              ref={project2Ref}
            >
              <div className="project-container">
                <div className="image-wrapper overflow-hidden mb-8">
                  <img
                    src={`${import.meta.env.BASE_URL}images/project2.png`}
                    alt="Library Management Platform"
                    className="rounded-xl"
                  />
                </div>
                <div className="title-container absolute bottom-0 left-0 w-full transform translate-y-1/3 pt-2 lg:pt-0 ">
                  <h2 className="text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-1 lg:mt-0 ">
                    The Library Management Platform
                  </h2>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div
              className="mb-24 relative"
              ref={project3Ref}
            >
              <div className="project-container">
                <div className="image-wrapper overflow-hidden mb-8">
                  <img
                    src={`${import.meta.env.BASE_URL}images/project3.png`}
                    alt="YC Directory"
                    className="rounded-xl"
                  />
                </div>
                <div className="title-container absolute bottom-0 left-0 w-full transform translate-y-1/3 pt-2">
                  <h2 className="text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg mt-1 pt-1">
                    YC Directory - A Startup Showcase App
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
