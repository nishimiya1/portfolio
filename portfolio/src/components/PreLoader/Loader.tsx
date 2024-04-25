import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";
import "./preLoader.css";

const Loader: React.FC = () => {
  const counterRef = useRef<HTMLParagraphElement>(null);
  const textWrapperRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const startLoader = () => {
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue < 100) {
          const increment = Math.floor(Math.random() * 10 + 1);
          currentValue = Math.min(currentValue + increment, 100);
          if (counterRef.current)
            counterRef.current.textContent = String(currentValue);

          const delay = Math.floor(Math.random() * 200) + 25;
          setTimeout(updateCounter, delay);
        }
      };
      updateCounter();

      gsap.to(".count", {
        opacity: 0,
        delay: 3.5,
        duration: 0.5,
      });

      if (textWrapperRef.current) {
        textWrapperRef.current.innerHTML =
          textWrapperRef.current.textContent?.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          ) ?? "";
      }
      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml16 .letter",
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1500,
          delay: (_el: HTMLElement, i: number) => 30 * i,
        })
        .add({
          targets: ".ml16 .letter",
          translateY: [0, 100],
          easing: "easeOutExpo",
          duration: 3000,
          delay: (_el: HTMLElement, i: number) => 30 * i + 2000,
        });

      gsap.to(".pre-loader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 2,
        delay: 3,
      });
      gsap.to(".loader", {
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75,
      });
      gsap.to(".loader-bg", {
        height: 0,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 4,
      });
      gsap.to(".loader-2", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", // Corrected clip path
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.5,
      });

      gsap.from(".header h1", {
        y: 200,
        ease: "power4.inOut",
        duration: 1.5,
        delay: 3.75,
        stagger: 0.05,
      });
    };

    startLoader();
  }, []);

  return (
    <div className="loader-container">
      <div className="pre-loader z-[40]">
        <div className="loader">
          <div className="loader-bg"></div>
          <div className="loader-content">
            <div className="count" ref={counterRef}>
              <p>0</p>
            </div>
            <div className="copy">
              <p className="ml16" ref={textWrapperRef}>
                GNDN
              </p>
            </div>
          </div>
          <div className="loader-2">
            <div className="site-content">
              <div className="header">
                <h1>G</h1>
                <h1>D</h1>
                <h1>D</h1>
                <h1>N</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
