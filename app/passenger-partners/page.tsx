import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "../globals.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow bg-[#fee1b2] px-4 sm:px-6 md:px-12 py-12 pt-24 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
                
      <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1440 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Thick White Path */}
      <path
        d="M0 200H300C320 200 350 230 350 270V370C350 410 380 440 420 440H900C940 440 970 470 970 510V600"
        stroke="white"
        strokeWidth="80" /* Thick stroke for the base */
        strokeLinecap="round"
        opacity="0.4" /* Decreased opacity */
      />
      
      {/* Dashed Peach Line */}
      <path
        d="M0 200H300C320 200 350 230 350 270V370C350 410 380 440 420 440H900C940 440 970 470 970 510V600"
        stroke="#FFCBA3"
        strokeWidth="10" /* Thinner dashed line */
        strokeLinecap="round"
        strokeDasharray="30 20" /* Creates the dashed effect */
        opacity="0.4" /* Decreased opacity */
      />
    </svg></div>

        {/* Decorative Background Image - Fixed at 160° rotation & Responsive Size */}
        <div 
          className="absolute bottom-0 right-0 bg-[url('/decorative.png')] bg-contain bg-no-repeat opacity-40 pointer-events-none"
          style={{ 
            transform: "rotate(160deg)", 
            width: "clamp(300px, 40vw, 800px)", // Increased size range
            height: "clamp(300px, 40vw, 800px)"
          }}
        />
        <div className="max-w-full sm:max-w-2xl md:max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#6b0606] leading-tight">
              <div className="sm:block md:flex items-center md:whitespace-nowrap">
                <span><strong>More </strong> Rides.</span>
                <span className="md:ml-4">Lower Costs.</span>
              </div>
              <span>Happier Cities.</span>
            </h1>
            
            <p className="mt-6 text-[#390303] text-lg">
              <span className="font-semibold">Bhago</span> makes urban last-mile mobility <span className="font-semibold">effortless - scalable, electric</span>, and <span className="font-semibold">always available</span>. More 
              uptime means more rides, better margins, and a smoother experience for both drivers and passengers. 
              The city moves better with <span className="font-semibold">Bhago</span>.
            </p>
            
            <ul className="mt-8 space-y-2 text-[#390303] text-left md:text-left">
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Dependable EV fleet with <span className="font-semibold">24/7 availability</span></span>
  </li>
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span><span className="font-semibold">Lower cost-per-km</span> than traditional autos</span>
  </li>
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Optimized for <span className="font-semibold">ride-sharing</span> & urban commutes</span>
  </li>
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span><span className="font-semibold">Higher uptime</span> = More rides, better margins</span>
  </li>
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Supports government <span className="font-semibold">smart city initiatives</span></span>
  </li>
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Reliable & Safe <span className="font-semibold">rides, including women drivers & child-friendly options</span></span>
  </li>
  <li className="flex items-start md:justify-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span className="font-semibold">Enhanced night-time safety</span>
  </li>
</ul>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#390303]">
                Get in touch to deploy<br />
                <span className="text-2xl">Bhago EVs</span> in your network.
              </h3>
              
              <Link href="#contact" className="mt-6 inline-block bg-[#ff4102] text-white px-8 py-3 rounded-full font-medium hover:bg-[#ff8332] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] flex justify-center">
            <Image
              src="/passenger-partner.png"
              alt="Bhago EV with passenger"
              fill
              className="object-contain sm:scale-100 md:scale-125"
              priority
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
