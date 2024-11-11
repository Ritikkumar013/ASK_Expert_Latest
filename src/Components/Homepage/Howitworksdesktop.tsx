"use client";
import React, { useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

// Define the Step type
type Step = {
  step: number;
  title: string;
  description: string;
  lottiePath: string;
};

// Define the steps array with the Step type
const steps: Step[] = [
  {
    step: 1,
    title: "Step 1",
    description:
      "Submit Your Issue: Easily share the details of your tech issue through our seamless chat interface.",
    lottiePath: "/LottieAnimation3.lottie",
  },
  {
    step: 2,
    title: "Step 2",
    description:
      "Connect with an Expert: In seconds, you’re paired with a qualified professional who understands your problem.",
    lottiePath: "/LottieAnimation4.lottie",
  },
  {
    step: 3,
    title: "Step 3",
    description:
      "Receive Real-Time Solutions: Follow step-by-step instructions provided by our expert.",
    lottiePath: "/LottieAnimation3.lottie",
  },
  {
    step: 4,
    title: "Step 4",
    description:
      "Save Time and Money: Fast resolutions without high costs, expert advice just a chat away.",
    lottiePath: "/LottieAnimation4.lottie",
  },
];

const Howitworks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);

  // Type the parameter in handleStepChange as Step
  const handleStepChange = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <div className="flex flex-col md:flex-row py-10 items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Side (Steps 1 and 3) */}
      <div className="w-full md:basis-1/3 flex flex-col justify-between px-4 md:px-10 space-y-6">
        {steps
          .filter((step) => step.step % 2 !== 0) // Filter for steps 1 and 3
          .map((step) => (
            <div key={step.step} className="p-2">
              <button
                onClick={() => handleStepChange(step)}
                className={`w-full bg-white rounded-xl p-4 border-2 shadow-md transition-colors ${
                  currentStep.step === step.step ? " border-red-600" : ""
                }`}
              >
                <div className="text-2xl text-red-600 font-bold">
                  {step.step}
                </div>
                <h2 className="text-xl font-semibold">{step.title}</h2>
                <p className="text-sm">{step.description}</p>
              </button>
            </div>
          ))}
      </div>

      {/* Lottie Animation in Center */}
      <div className="w-full md:basis-1/3 flex justify-center items-center">
        <DotLottiePlayer
            src={currentStep.lottiePath}
            autoplay
            loop
            className="w-full"
          />
      </div>

      {/* Right Side (Steps 2 and 4) */}
      <div className="w-full md:basis-1/3 flex flex-col justify-between px-4 md:px-10 space-y-6">
        {steps
          .filter((step) => step.step % 2 === 0) // Filter for steps 2 and 4
          .map((step) => (
            <div key={step.step} className="p-2">
              <button
                onClick={() => handleStepChange(step)}
                className={`w-full bg-white rounded-xl p-4 shadow-md transition-colors border-2 ${
                  currentStep.step === step.step ? " border-red-600" : ""
                }`}
              >
                <div className="text-2xl text-red-600 font-bold">
                  {step.step}
                </div>
                <h2 className="text-xl font-semibold">{step.title}</h2>
                <p className="text-sm">{step.description}</p>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Howitworks;
