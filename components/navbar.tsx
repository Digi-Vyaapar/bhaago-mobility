"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPhoneFlip } from "react-icons/fa6";
import Image
 from "next/image";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { label: "Passenger Partners", href: "/passenger-partners" },
    { label: "Cargo Partners", href: "/cargo-partners" },
    { label: "Driver Partners", href: "/driver-partners" },
    { label: "About", href: "/about" },
    { label: "Hiring Now", href: "/hiring" },
  ];
  return (
    <div className="fixed w-full top-0 z-50 flex justify-center items-center h-[80px] bg-transparent">
      {/* Logo (Left Side, Outside Navbar) */}
      <Link href="/">
        <div
          className={`absolute left-[5%] flex items-center transition-opacity duration-500 ${
        isScrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{
        top: "50%",
        transform: "translateY(-50%)",
          }}
        >
          <Image
        src="/bhago logo.png"
        alt="Bhaago Logo"
        width={150}
        height={150}
          />
        </div>
      </Link>

      {/* Main Navigation Bar (Centered) */}
      <div
        className={`flex items-center justify-center transition-all duration-500 ease-in-out ${
          isScrolled ? "w-[90%] md:w-[750px]" : "w-[90%] md:w-[700px]"
        } h-[55px] bg-[#FDF1E5] shadow-md border border-[#611313] rounded-[10px] px-[12px]`}
        style={{
          position: "relative",

        }}
      >
        {/* Logo Inside Navbar When Scrolled */}
        {isScrolled && (
            <div className="absolute left-5 flex items-center">
            <Link href="/">

              <img src="/logo.png" alt="Bhaago Logo" className="h-8 w-8" />
            </Link>

            </div>
        )}

        {/* Call Icon Inside Navbar When Scrolled */}
        {isScrolled && (
          <div className="absolute right-5 flex items-center">
            <div className="bg-[#FF4102] w-[40px] h-[40px] rounded-full flex justify-center items-center shadow-md">
              <FaPhoneFlip className="text-white text-xl" />
            </div>
          </div>
        )}

<nav className="flex justify-center items-center w-full space-x-6">
  {navItems.map(({ label, href }) => (
    <Link
      key={label}
      href={href}
      className="text-[#611313] font-medium flex justify-center items-center transition-all duration-500 ease-in-out hover:underline underline-offset-4"
      style={{
        fontFamily: "Georama, sans-serif",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "20px",
      }}
    >
      {label}
    </Link>
  ))}
</nav>
      </div>

      {/* Contact Us Button (Right Side, Outside Navbar) */}
      <div
        className={`absolute right-[5%] bg-[#FF4102] shadow-md transition-opacity duration-500 ease-in-out flex justify-center items-center ${
          isScrolled ? "opacity-0" : "opacity-100"
        } ${
          isScrolled ? "w-[50px] h-[50px] rounded-full" : "w-[130px] h-[40px] rounded-[8px]"
        }`}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Text (Fade Out) */}
          <span
            className={`absolute transition-opacity duration-500 ${
              isScrolled ? "opacity-0" : "opacity-100"
            } text-white font-semibold`}
            style={{ fontFamily: "Georama, sans-serif", fontSize: "14px" }}
          >
            Contact Us
          </span>

          {/* Icon (Fade In) */}
          <FaPhoneFlip
            className={`absolute transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            } text-white text-xl`}
          />
        </div>
      </div>
    </div>
  );
}