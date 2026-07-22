import { useState } from "react";
import svgAgencies from "../ChatGPT Image Jun 7, 2026, 11_41_54 AM 1.svg";
import svgEducation from "../ChatGPT Image Jun 7, 2026, 11_44_51 AM 1.svg";
import svgDistributors from "../ChatGPT Image Jun 7, 2026, 11_50_41 AM 1.svg";
import svgGrowing from "../ChatGPT Image Jun 7, 2026, 11_55_35 AM 1.svg";
import svgPaths from "../svg-mb1h8xnyqh";
import imgChatGptImageJun72026115919Am1 from "../0d8c0e154d23ce80f046ce75ffcb46aff0df8e0a.png";
import imgFrame1321318804 from "../ece298d0ec2c16f10310d45724b276a6035cb503.png";

function RealEstate() {
  return (
    <div className="h-[343px] relative shrink-0 w-[458px] sector-image-fade pointer-events-none" data-name="real estate">
      <div className="-translate-y-1/2 absolute aspect-[1089/816] left-0 right-0 top-[calc(50%+0.5px)] pointer-events-none" data-name="ChatGPT Image Jun 7, 2026, 11_59_19 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Real Estate" className="absolute h-[125.49%] left-[-20.75%] max-w-none top-[-18.63%] w-[141.05%] pointer-events-none" src={imgChatGptImageJun72026115919Am1} />
        </div>
      </div>
    </div>
  );
}

function Distributors() {
  return (
    <div className="h-[343px] relative shrink-0 w-[483px] sector-image-fade pointer-events-none" data-name="distributors">
      <div className="-translate-y-1/2 absolute aspect-[1215/818] left-[4.65%] right-[4.65%] top-[calc(50%+0.5px)] pointer-events-none" data-name="ChatGPT Image Jun 7, 2026, 11_50_41 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Distributors" className="absolute inset-0 size-full object-contain pointer-events-none" src={svgDistributors} />
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="h-[343px] relative shrink-0 w-[418px] sector-image-fade pointer-events-none" data-name="education">
      <div className="-translate-y-1/2 absolute aspect-[1240/689] left-0 right-0 top-1/2 pointer-events-none" data-name="ChatGPT Image Jun 7, 2026, 11_44_51 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Education" className="absolute inset-0 size-full object-contain pointer-events-none" src={svgEducation} />
        </div>
      </div>
    </div>
  );
}

function Agencies() {
  return (
    <div className="h-[343px] relative shrink-0 w-[438px] sector-image-fade pointer-events-none" data-name="agencies">
      <div className="-translate-x-1/2 absolute aspect-[1038/895] bottom-0 left-1/2 top-0 pointer-events-none" data-name="ChatGPT Image Jun 7, 2026, 11_41_54 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Agencies" className="absolute inset-0 size-full object-contain pointer-events-none" src={svgAgencies} />
        </div>
      </div>
    </div>
  );
}
function GrowingBusinesses() {
  return (
    <div className="h-[343px] relative shrink-0 w-[481px] sector-image-fade pointer-events-none" data-name="growing businesses">
      <div className="-translate-y-1/2 absolute aspect-[1085/807] left-0 right-0 top-1/2 pointer-events-none" data-name="ChatGPT Image Jun 7, 2026, 11_55_35 AM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Growing Businesses" className="absolute inset-0 size-full object-contain pointer-events-none" src={svgGrowing} />
        </div>
      </div>
    </div>
  );
}
function BuiltForImages({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      key={activeIndex}
      className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+31px)] top-[76px] w-[581px] sector-image-fade pointer-events-none"
      data-name="built for images"
    >
      {activeIndex === 0 && <RealEstate />}
      {activeIndex === 1 && <Agencies />}
      {activeIndex === 2 && <Education />}
      {activeIndex === 3 && <Distributors />}
      {activeIndex === 4 && <GrowingBusinesses />}
    </div>
  );
}

export function Frame292({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute h-[475px] left-[496px] top-[96px] w-[703px] pointer-events-none">
      <div className="absolute flex items-center justify-center left-[-151px] size-[1016.288px] top-[-152px] pointer-events-none">
        <div className="flex-none rotate-45 pointer-events-none">
          <div className="h-[773.033px] relative w-[664.215px] pointer-events-none">
            <svg className="absolute block inset-0 size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 664.215 773.033">
              <ellipse cx="332.107" cy="386.517" fill="var(--fill-0, #00236F)" id="Ellipse 5" rx="332.107" ry="386.517" />
            </svg>
          </div>
        </div>
      </div>
      <BuiltForImages activeIndex={activeIndex} />
    </div>
  );
}

interface Frame285Props {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function Frame285({ activeIndex, setActiveIndex }: Frame285Props) {
  const tabs = [
    { name: "Real Estate", id: 0 },
    { name: "Agencies", id: 1 },
    { name: "Education", id: 2 },
    { name: "Distributors", id: 3 },
    { name: "Any Growing Business", id: 4 },
  ];

  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] rounded-[12px] top-[96px] w-[253px] bg-white overflow-hidden z-30 border border-[#d4d5d8] shadow-sm">
      {tabs.map((tab, idx) => {
        const isActive = activeIndex === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveIndex(tab.id)}
            className={`w-full shrink-0 text-left transition-colors duration-200 px-[16px] py-[22px] cursor-pointer relative z-30 flex items-center ${isActive ? "bg-[#e6e9f1] text-[#141414] font-medium" : "bg-white text-[#141414] hover:bg-[#f5f6fa]"
              } ${idx < tabs.length - 1 ? "border-b border-[#d4d5d8]" : ""}`}
          >
            <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] text-[23px] leading-[normal] pointer-events-none">
              {tab.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

interface Frame291Props {
  activeIndex: number;
}

export function Frame291({ activeIndex }: Frame291Props) {
  const content = [
    {
      title: "Real Estate",
      desc: "Manage property inquiries, track prospects, and close deals faster.",
    },
    {
      title: "Agencies",
      desc: "Organize clients, projects, and opportunities in one place.",
    },
    {
      title: "Education",
      desc: "Manage student inquiries and improve enrollment follow-ups.",
    },
    {
      title: "Distributors",
      desc: "Track customer relationships and streamline sales operations.",
    },
    {
      title: "Growing Business",
      desc: "Simplify sales workflows and grow customer relationships.",
    },
  ];

  const activeContent = content[activeIndex] || content[0];

  return (
    <div key={activeIndex} className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[24px] items-start left-[317px] not-italic top-[calc(50%-133px)] w-[221px] pointer-events-none sector-image-fade">
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[normal] relative shrink-0 text-[#141414] text-[28px] w-full">
        {activeContent.title}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#464646] text-[16px] w-full">
        {activeContent.desc}
      </p>
    </div>
  );
}

function MobileFrame285({ activeIndex, setActiveIndex }: Frame285Props) {
  const tabs = [
    { name: "Real Estate", id: 0 },
    { name: "Agencies", id: 1 },
    { name: "Education", id: 2 },
    { name: "Distributors", id: 3 },
    { name: "Any Growing Business", id: 4 },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 w-full shrink-0 z-30">
      {tabs.map((tab) => {
        const isActive = activeIndex === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveIndex(tab.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-[14px] sm:text-[16px] font-medium transition-all duration-200 shrink-0 cursor-pointer border ${isActive
                ? "bg-[#00236f] text-white border-[#00236f] shadow-sm"
                : "bg-white text-[#464646] border-[#d4d5d8] hover:bg-[#f5f6fa]"
              }`}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}

function MobileFrame291({ activeIndex }: Frame291Props) {
  const content = [
    {
      title: "Real Estate",
      desc: "Manage property inquiries, track prospects, and close deals faster.",
    },
    {
      title: "Agencies",
      desc: "Organize clients, projects, and opportunities in one place.",
    },
    {
      title: "Education",
      desc: "Manage student inquiries and improve enrollment follow-ups.",
    },
    {
      title: "Distributors",
      desc: "Track customer relationships and streamline sales operations.",
    },
    {
      title: "Growing Business",
      desc: "Simplify sales workflows and grow customer relationships.",
    },
  ];

  const activeContent = content[activeIndex] || content[0];

  return (
    <div key={activeIndex} className="flex flex-col gap-1 w-full py-1 sector-image-fade">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[#141414] text-[20px] sm:text-[24px]">
        {activeContent.title}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#464646] text-[14px] sm:text-[16px] leading-[1.4]">
        {activeContent.desc}
      </p>
    </div>
  );
}

function MobileBuiltForImages({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      key={activeIndex}
      className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 content-stretch flex items-center justify-center w-[340px] sm:w-[420px] h-[260px] sm:h-[300px] sector-image-fade pointer-events-none z-10 scale-[0.75] sm:scale-90"
      data-name="mobile built for images"
    >
      {activeIndex === 0 && <RealEstate />}
      {activeIndex === 1 && <Agencies />}
      {activeIndex === 2 && <Education />}
      {activeIndex === 3 && <Distributors />}
      {activeIndex === 4 && <GrowingBusinesses />}
    </div>
  );
}

function MobileFrame292({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden rounded-[24px] bg-white mt-1">
      {/* Background 45deg rotated dark blue ellipse matching desktop background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="scale-[0.45] sm:scale-[0.55] origin-center pointer-events-none flex items-center justify-center">
          <div className="rotate-45 pointer-events-none">
            <div className="h-[773.033px] relative w-[664.215px] pointer-events-none rounded-[773.033px] bg-[#00236F]">
              <svg className="absolute block inset-0 size-full pointer-events-none" fill="none" preserveAspectRatio="none" viewBox="0 0 664.215 773.033">
                <ellipse cx="332.107" cy="386.517" fill="var(--fill-0, #00236F)" id="Ellipse 5" rx="332.107" ry="386.517" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Centered Sector 3D Image */}
      <MobileBuiltForImages activeIndex={activeIndex} />
    </div>
  );
}

export default function SectorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="sectors-section" className="bg-white min-h-[572px] lg:h-[572px] relative rounded-[28px] shrink-0 w-full max-w-[1200px] z-10 overflow-hidden" data-name="built for">
      <div className="relative rounded-[inherit] size-full min-h-[572px] p-4 sm:p-6 lg:p-0">
        <p className="[word-break:break-word] relative lg:absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] lg:left-[24px] lg:top-[24px] not-italic text-[#141414] text-[28px] sm:text-[36px] lg:text-[40px] w-full lg:w-[458px] pointer-events-none mb-4 lg:mb-0" dir="auto">
          For different sectors
        </p>

        {/* Large screens (lg): 100% exact original desktop layout */}
        <div className="hidden lg:block">
          <Frame292 activeIndex={activeIndex} />
          <Frame285 activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <Frame291 activeIndex={activeIndex} />
        </div>

        {/* Mobile screens (< lg): Mobile-optimized responsive layout */}
        <div className="flex lg:hidden flex-col gap-3">
          <MobileFrame285 activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          <MobileFrame291 activeIndex={activeIndex} />
          <MobileFrame292 activeIndex={activeIndex} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d4d5d8] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}
