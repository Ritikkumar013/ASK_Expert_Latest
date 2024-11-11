"use client";
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";

const Imagescroller = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
      }, []);

    const calculateTransform = () => {
        let transformValue = scrollPosition * 0.5 - 800;
        if (windowWidth < 640) {
          transformValue = scrollPosition * 0.3 - 600;
        }
        else if (windowWidth < 1024) {
          transformValue = scrollPosition * 0.4 - 300;
        }
        else {
          transformValue = scrollPosition * 0.5 - 300;
        }
        return `translateX(${transformValue}px)`;
      };

  return (
    <div className="w-full py-12 lg:pt-20 lg:px-0">
        <div className="text-center mb-12 px-5 md:px-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Reliable Solutions{" "}
            <span className="text-[#dc143c]">Backed by 500+ Trusted </span>
            Brands
          </h3>
          <p className="max-w-3xl mx-auto text-base">
            Join a community of leading businesses that rely on our experts for
            quick and effective tech support.
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className="flex w-[320%] md:w-[160%] justify-between items-center"
            id="logo-scroller"
            style={{
              transform: calculateTransform(),
              transition: "transform 0.1s linear",
            }}
          >
            {[
              "sugar",
              "mindvalley",
              "jenna",
              "nike",
              "amy",
              "hotmart",
              "benefit",
            ].map((brand) => (
              <Image
                key={brand}
                src={`/${brand}.png`}
                alt={`${brand} logo`}
                width={300}
                height={300}
                className="w-auto h-24 text-center"
              />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Imagescroller