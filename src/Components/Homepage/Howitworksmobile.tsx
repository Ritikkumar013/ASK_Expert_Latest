"use client";
import React, { useState, } from "react";
import Slider from "react-slick";
import { DotLottiePlayer } from "@dotlottie/react-player";

type ButtonData = {
  content: string;
  lottiePath: string;
};

type ArrowProps = {
  onClick?: () => void;
};

const Howitworksmobile: React.FC = () => {
  const buttonData: ButtonData[] = [
    {
      content: "Facing issues with your printer? Our experts can help!",
      lottiePath: "/LottieAnimation3.lottie",
    },
    {
      content: "Struggling with Windows errors? We've got you covered.",
      lottiePath: "/LottieAnimation4.lottie",
    },
    {
      content: "Effortlessly recover and repair your Outlook PST files.",
      lottiePath: "/LottieAnimation3.lottie",
    },
    {
      content: "Get expert help with your TV setup and configuration!",
      lottiePath: "/LottieAnimation4.lottie",
    },
  ];

  const [selectedData, setSelectedData] = useState<ButtonData>(buttonData[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
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
                selectedData.content === button.content
                  ? "bg-[#dc143c] text-white border-[#dc143c]"
                  : "bg-[#e9e9e9] text-black border-[#dc143c] hover:text-white hover:bg-[#dc143c]"
              }`}
            >
              Step {index + 1}
            </button>
          </div>
        ))}
      </Slider>

      <div className="mt-16 flex flex-col items-center md:flex-row gap-5">
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-lg">{selectedData.content}</p>
        </div>
        <div className="w-full md:w-1/2">
          <DotLottiePlayer
            src={selectedData.lottiePath}
            autoplay
            loop
            className="w-full"
          />
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="w-5 h-5"
      >
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default Howitworksmobile;
