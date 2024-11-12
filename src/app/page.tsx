import React from "react";
import TabCarousel from "@/Components/Homepage/TabCarousel";
import Testimonials from "@/Components/Homepage/Testimonials";
import Image from "next/image";
import Howitworksdesktop from "@/Components/Homepage/Howitworksdesktop";
import Howitworksmobile from "@/Components/Homepage/Howitworksmobile";
import Imagescroller from "@/Components/Homepage/Imagescroller";

export default function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="bg-gradient-to-b from-[#ffe3e3] md:pt-12">
        <div className="container flex flex-col-reverse md:flex-row max-w-screen-xl mx-auto items-center p-5 md:px-8 md:gap-8">
          <div className="basis-1/2 text-center md:text-left">
            <h1 className="font-bold text-4xl lg:text-6xl">
              Get Help from <br />
              <span className="text-[#dc143c]">Experts </span> Starting at Just
              £1
            </h1>
            <p className="my-5 text-base">
              Facing tech issues? Don’t stress. Connect with verified
              professionals and get solutions in minutes, all starting at just
              £1. From device setups to troubleshooting, we’ve got you
              covered—no high fees. No waiting. Just dependable answers from
              experts.
            </p>
            <button className="bg-[#ffd600] text-sm py-3 px-7 font-[400] rounded-md my-3">
              Start Now for Just £1
            </button>
          </div>
          <div className="basis-1/2 mt-6 md:mt-0">
            <Image
              src="/banner2.png"
              width={500}
              height={500}
              alt="Generative AI Banner"
              className="ml-auto w-full md:max-w-[400px] lg:max-w-[520px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <Imagescroller />

      {/* Section 3 */}
      <div className="w-full px-5 py-14 pb-16 lg:pb-20 md:px-8">
        <div className="text-center mb-12 text-xl">
          {" "}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {" "}
            Effortless Help, <span className="text-[#DC143C]">
              {" "}
              Anytime{" "}
            </span>{" "}
            You Need It{" "}
          </h1>{" "}
          <p className="max-w-3xl mx-auto text-base">
            {" "}
            Get the expert assistance you need with just a click. Our platform
            combines human expertise with cutting-edge AI to deliver fast,
            reliable solutions for your tech issues, all without the wait.{" "}
          </p>{" "}
        </div>

        <div className="container flex flex-col md:flex-row md:items-center max-w-[1100px] mx-auto bg-black justify-between rounded-2xl">
          <div className="basis-1/2 p-14 md:p-0 md:pl-8">
            <h3 className="font-bold text-3xl text-white">
              Start your
              <span className="text-[#dc143c]"> First Chat </span> today
            </h3>
            <p className="text-sm text-white pt-2">
              Whether youre dealing with a printer problem, software glitch, or
              setting up a new device, were here to help. Start a chat today and
              experience seamless troubleshooting and support at your
              fingertips.
            </p>
            <button className="bg-black text-white text-left h-10 rounded-md my-2 underline underline-offset-4 font-[500]">
              Chat with an Expert Now →
            </button>
          </div>

          <div className="md:basis-1/2 relative">
            <Image
              className="ml-auto rounded-r-2xl w-full lg:max-w-[470px]"
              src="/Rectangle-24.png"
              width={470}
              height={306}
              alt="Chat illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent rounded-r-2xl"></div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-[#f5f5f5] py-14 w-full">
        <div className=" max-w-screen-xl mx-auto">
          <div className="text-center mb-20 md:mb-5 px-5 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Amplifying Business Impact with
              <span className="text-[#dc143c]"> Expert Help </span> at Every
              Step
            </h1>
            <p className="text-base py-3">
              Here’s how we make expert assistance seamless, efficient, and
              tailored to your needs.
            </p>
          </div>
          <div>
            {/* Desktop component (visible on tablet and larger screens) */}
            <div className="hidden md:block px-5">
              <Howitworksdesktop />
            </div>

            {/* Mobile component (visible on small screens only) */}
            <div className="block md:hidden px-5">
              <Howitworksmobile />
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full px-5 py-12 md:py-14 md:pb-10 md:px-6 lg:px-5">
        <div className="container max-w-screen-xl mx-auto lg:px-8">
          <div className="text-center mb-20 p-4 md:mb-12">
            <h1 className="text-3xl md:text-4xl  font-bold mb-4">
              Tailored Solutions for All Your{" "}
              <span className="text-[#DC143C]">Tech </span> Needs
            </h1>
            <p className="max-w-3xl mx-auto">
              Industry-specific tech support designed to resolve your issues
              quickly and efficiently.
            </p>
          </div>
          <TabCarousel />
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-[#f5f5f5] pt-12 pb-16 md:py-16 ">
        <div className="mb-12 text-center px-5 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hear What <span className="text-[#DC143C]">Our Customers </span>{" "}
            Have to Say
          </h1>
          <p className="max-w-3xl mx-auto">
            Thousands of satisfied customers have turned to our platform for
            tech support that’s fast, reliable, and affordable. Don’t just take
            our word for it—see how we’ve helped people solve their issues and
            keep their tech running smoothly.
          </p>
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
