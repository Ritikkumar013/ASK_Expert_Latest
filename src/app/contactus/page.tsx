import ContactForm from "@/Components/ContactUs/ContactForm";
import React from "react";
import Image from "next/image";

const contactus = () => { 
  return (
    <>
      <div className='w-full h-[55vh] md:h-[70vh] flex items-center bg-[url("/contact-banner.jpg")] bg-cover bg-center lg:h-[80vh]'>
        <div className="container flex flex-col items-start max-w-[1280px] mx-auto gap-[10px] text-white px-5 md:px-10 lg:mb-[-80px]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-[#F7F7F7] px-5 py-14 md:px-14">
        <div className="max-w-screen-xl container mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Get in Touch with <span className="text-[#DC143C]"> Our Experts </span>
          </h1>
          <p className="max-w-3xl mx-auto">
          We’re here to assist you with all your tech support needs. Fill out the form below, and our dedicated team will get back to you promptly with personalized solutions for your issue.
          </p>
        </div>
        <ContactForm></ContactForm>
      </div>

      {/* Section 3 */}
      <div className="">
        <div className="text-sm">
          <div className="flex flex-col md:flex-row text-white ">
            <div className=" basis-1/3">
              <iframe
              className="min-h-60"
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ border: "none", width: "100%", height: "100%" }}
                allowFullScreen
                title="map"
              ></iframe>
            </div>
            <div className="basis-1/3 bg-[#282828] px-5 py-10 md:p-12 lg:p-16 ">
              <h1 className="text-3xl underline underline-offset-8 mb-8">
                Reach Us:
              </h1>
              <div className="flex gap-2 mb-3 items-center">
                <Image 
                width={650}
                height={650}
                alt="Contact Image"
                src="/phone.png" className="w-[18px]" />
                <p className="">+40724343949</p>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image 
                width={650}
                height={650}
                alt="Contact Image"
                src="/mail.png" className="w-[18px]" />
                <p className="">contact@brandaffair.ro</p>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image 
                width={650}
                height={650}
                alt="Contact Image"
                src="/location.png" className="w-[18px]" 
                />
                <p className="">Amman St, no 35, 4th floor, ap 10, Bucharest</p>
              </div>
            </div>
            <div className="basis-1/3 bg-[#DC143C] px-5 py-10 md:p-12 lg:p-16">
              <h1 className="text-3xl underline underline-offset-8 mb-6">
                Contact Us
              </h1>
              <p className=" mb-3">
                <span className="text-lg leading-9 font-bold">Hello,</span>
                <br />
                Ready to get started? Click the button below to fill out our
                quick form and let us know how we can assist you!
              </p>
              <button
                type="button"
                className=" bg-black text-white rounded-md px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Click Here !
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
