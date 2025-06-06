"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FeatureButtons from "./FeatureButtons";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [imageSrc, setImageSrc] = useState("/rickshaw.png"); // Default image

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      setRotation((prev) => prev + delta * 0.07);
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section className="w-screen min-h-screen relative overflow-hidden bg-[#FDE5BF] pb-16 pt-0">
      {/* Decorative Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-#FEE1B2" />
      </div>

      {/* Decorative Image with Slow Rotation */}
      <Image
        src="/decorative.png"
        alt="Decorative"
        width={600}
        height={600}
        className="absolute top-0 left-0 z-0 opacity-30"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      />

<div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pb-20 pt-20"> 
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    {/* Left Section: Text */}
    <div className="space-y-4 text-center lg:text-left">
      <div className="space-y-0">
        <h1 className="text-[clamp(48px,9vw,130px)] md:text-[clamp(72px,9vw,130px)] font-black leading-[1] tracking-[-1%] text-[#FF531A] mb-0 whitespace-nowrap">
          Smarter Mobility
        </h1>
        <h1 className="text-[clamp(36px,5.5vw,70px)] font-black leading-[1] tracking-[-1%] text-[#FF531A]">
          for a Better India
        </h1>
      </div>

        {/* Add Manual Space between these two - hidden on mobile */}
        <div className="h-0 lg:h-14"></div>

      <p className="text-[clamp(16px,4vw,24px)] text-[#6B0606] max-w-xl mx-auto lg:mx-0 lg:mt-8">
        <strong>Sustainable Last Mile Transport, Sustainable Livelihoods.</strong>
      </p>
      <p className="text-[clamp(14px,3.5vw,18px)] text-[#6B0606] max-w-xl mx-auto lg:mx-0 md:mt-24 lg:mt-40">
        Last-mile transport doesn't have to be unreliable, expensive, or polluting. Our <strong>electric fleet</strong> keeps people and packages moving - <strong>fast, affordable, and green.</strong> By offering disruptive vehicle uptime and <strong>micro-entrepreneurship</strong> opportunities across <strong>passenger & cargo</strong> mobility.
      </p>
      <div className="pt-6 flex justify-center lg:justify-start">
        <FeatureButtons className="flex-wrap justify-start" setImageSrc={setImageSrc} />
      </div>
    </div>

    {/* Right Section: Rickshaw + Person */}
    <div className="relative flex justify-center w-full"> 
      <div className="w-full max-w-[1100px] flex justify-center aspect-[11/9] scale-125"> {/* Increased scale from 125 to 150 */}
        <Image
          src={imageSrc}
          alt="Feature Image"
          width={1100}
          height={900}
          className="object-contain w-full h-full max-w-none" 
          priority
        />
      </div>
    </div>

  </div>
</div>



      <svg
        className="absolute bottom-0 left-0 w-screen h-screen"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFF8F3"
          d="M360,259 C100,447 120,316 0,360 L0,360 L360,360 Z"
        />
      </svg>
    </section>
  );
}
