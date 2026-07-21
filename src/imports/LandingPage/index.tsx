import { useState } from "react";
import svgPaths from "./svg-mb1h8xnyqh";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import SectorsSection from "./components/SectorsSection";
import BuiltFor from "./components/BuiltFor";
import Form from "./components/Form";
import Footer from "./components/Footer";

function Frame296() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center justify-center relative shrink-0 w-[1248px]">
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <SectorsSection />
      <BuiltFor />
      <Form />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#f5f6fa] content-stretch flex flex-col gap-[120px] items-center relative size-full" data-name="Landing page">
      <Navbar />
      <Frame296 />
      <Footer />
      <div className="absolute left-[calc(58.33%-21px)] size-[189px] top-[3955px]">
        <div className="absolute inset-[-158.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 789 789">
            <g filter="url(#filter0_f_1_3940)" id="Ellipse 2">
              <circle cx="394.5" cy="394.5" fill="var(--fill-0, #8A9ABD)" r="94.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="789" id="filter0_f_1_3940" width="789" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_3940" stdDeviation="150" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(8.33%+123px)] size-[189px] top-[4619px]">
        <div className="absolute inset-[-158.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 789 789">
            <g filter="url(#filter0_f_1_3940)" id="Ellipse 2">
              <circle cx="394.5" cy="394.5" fill="var(--fill-0, #8A9ABD)" r="94.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="789" id="filter0_f_1_3940" width="789" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_3940" stdDeviation="150" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[96px] size-[189px] top-[699px]">
        <div className="absolute inset-[-158.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 789 789">
            <g filter="url(#filter0_f_1_3940)" id="Ellipse 2">
              <circle cx="394.5" cy="394.5" fill="var(--fill-0, #8A9ABD)" r="94.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="789" id="filter0_f_1_3940" width="789" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_3940" stdDeviation="150" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="fixed bg-[#357724] bottom-[24px] right-[24px] overflow-clip rounded-[99px] size-[48px] z-[9999] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200" data-name="icon btn">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="ic:baseline-whatsapp">
          <div className="absolute inset-[8.33%_8.54%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9 20.0001">
              <path d={svgPaths.p30848300} fill="var(--fill-0, #F5F6FA)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}