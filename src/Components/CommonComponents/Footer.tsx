"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="bg-black w-full text-white p-5 pt-10 md:p-8 md:pt-12 md:pb-2 ">
      <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col gap-12 justify-between pb-8 md:gap-20">
        <div className=" basis-1/2 lg:basis-1/3 text-sm">
        <img src="/Logo.png" className="w-[150px]" />
          <p className="mb-4">
          Get expert assistance anytime, anywhere. From troubleshooting to setup, we’re here to simplify your tech journey with fast, reliable support tailored to your needs
          </p>
          <Link
            href="#"
            className="p-3 md:p-3 sm:p-2 bg-[#FFD600] text-black rounded text-sm inline-block"
          >
            Chat Now!
          </Link>
        </div>
        <div className="basis-1/2 lg:basis-1/3 lg:p-2">
          <h4 className="text-lg mb-3 leading-6">
            Stay Updated with the Latest Tips and Exclusive Offers from Our
            Experts
          </h4>
          <p className="text-xs mb-3 text-gray-400">
            Subscribe to our newsletter to get regular updates, tips, and offers
            that keep your devices running at their best.
          </p>
          <form onSubmit={handleSubmit} className="flex mt-8">
            <div className="basis-5/6">
              {/* Email Input */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full bg-transparent border-b border-gray-300 p-2  focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            {/* Submit Button */}
            <div className="basis-1/6">
              <button
                type="submit"
                className="bg-white px-5 py-2 mb-[-2px] focus:outline-none focus:ring-2 text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-right max-w-screen-xl mx-auto px-2 py-3 border-b border-[#585858]">
        <div className="flex gap-5 justify-center md:justify-end">
          <Image
            className="max-w-[16px]"
            src="/facebook.png "
            width={30}
            height={30}
            alt=""
          />
          <Image
            className="max-w-[16px]"
            src="/youtube.png "
            width={30}
            height={30}
            alt=""
          />
          <Image
            className="max-w-[16px]"
            src="/pinterest.png "
            width={30}
            height={30}
            alt=""
          />
          <Image
            className="max-w-[16px]"
            src="/instagram.png "
            width={30}
            height={30}
            alt=""
          />
        </div>
      </div>
      <div className="flex text-center flex-col md:flex-row justify-between max-w-screen-xl mx-auto text-sm pt-4 md:py-3">
        <p>
          Copyright ©{" "}
          <span className="text-[#DC143C]">Crobstacle Ventures LLP</span> 2024
        </p>
        <div className="underline flex justify-around mt-4 md:mt-[5px] text-[#ACACAC] underline-offset-4">
          <div className="px-3 md:border-r"><Link href="/privacypolicy" className="mt-[-5px]">Privacy Policy</Link></div>
          <div className="px-3 md:border-r"><Link href="/termsofservice" className="mt-[-5px]">Terms of Service</Link></div>
          <div className="pl-3 "><Link href="/contactus" className="mt-[-5px]">Contact Us</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
