"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

type ButtonData = {
  title: string;
  content: string;
  image: string;
  link: string;
};

type ArrowProps = {
  onClick?: () => void;
};

const TabCarousel: React.FC = () => {
  const buttonData: ButtonData[] = [
    {
      title: "Printer Troubleshooting",
      content:
        "Reliable Printer Troubleshooting: Facing issues with your printer? Whether it’s connection problems or recurring errors, our experts provide step-by-step guidance to get your printer back in action, hassle-free.",
      image: "/printer-2.jpg",
      link: "/services/printertroubleshooting",
    },
    { title: "Windows Issues", content: "Instant Solutions for Windows Errors: Struggling with Windows updates, crashes, or errors? Our technicians offer real-time support to troubleshoot and fix any Windows-related problem you’re experiencing.", image: "/window-1.jpg" , link:"/services/windowsissues" },
    { title: "Outlook PST File Support", content: "Effortless Outlook PST File Recovery: Lost access to your PST files or encountering corruption issues? We help you recover, repair, and manage your Outlook PST files so you can keep your inbox running smoothly.", image: "/window-issue-banner.jpg", link:"/services/outlookpstfilesupport" },
    { title: "Television Setup", content: "Seamless TV Setup & Installation : Need help setting up your new TV? Let us guide you through installation, configuration, and optimizing your television settings for the best viewing experience.", image: "/television-setup-banner.jpg", link:"/services/televisionsetup" },
    { title: "Email Support", content: "Resolve all your email-related challenges effortlessly. Whether it’s managing multiple accounts, setting up spam filters, or troubleshooting sending and receiving errors, our experts are here to ensure seamless communication. Get instant support and take control of your inbox today.", image: "/outlook-pst-banner.jpg", link:"/services/emailsupport" },
    // Add other button data here
  ];

  const [selectedData, setSelectedData] = useState<ButtonData>(buttonData[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="my-8 mx-auto max-w-screen-xl">
      <Slider {...settings}>
        {buttonData.map((button, index) => (
          <div key={index} className="px-2">
            <button
              onClick={() => setSelectedData(button)}
              className={`w-full p-4 border-2 rounded-md transition duration-300 truncate ${
                selectedData.title === button.title
                  ? 'bg-[#dc143c] text-white border-[#dc143c]'
                  : 'bg-[#e9e9e9] text-black border-[#dc143c] hover:text-white hover:bg-[#dc143c]'
              }`}
            >
              {button.title}
            </button>
          </div>
        ))}
      </Slider>

      <div className="mt-16">
        <div className="flex flex-col md:flex-row items-center gap-5 md:p-2 md:gap-10 lg:gap-12">
          <div className="md:basis-1/2 w-full">
            <Image
              src={selectedData.image}
              width={400}
              height={250}
              alt={selectedData.title}
              className="mx-auto rounded-lg w-full"
            />
          </div>
          <div className="md:basis-1/2 text-left md:text-left">
            <h2 className="text-2xl font-semibold mb-2">{selectedData.title}</h2>
            <p className="text-lg mb-3">{selectedData.content}</p>
            <a href={selectedData.link} className="font-semibold underline underline-offset-4 text-lg">
              Explore Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="absolute right-[35%] top-[-70%] md:right-4 md:top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-red-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <div
      className="absolute left-[35%] top-[-70%] md:left-4 md:top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-red-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

export default TabCarousel;
