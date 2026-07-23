import { useState } from "react";
import svgPaths from "../svg-mb1h8xnyqh";

function Logo() {
  return (
    <div className="h-[20px] overflow-clip relative w-[88px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.0001 20">
        <g id="logotype">
          <path clipRule="evenodd" d={svgPaths.p1eb5dd00} fill="var(--fill-0, #00236F)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p3c499580} fill="var(--fill-0, #00236F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-[85px]">
      <div className="-translate-y-1/2 absolute flex h-[20px] items-center justify-center left-0 top-1/2 w-[88px]">
        <div className="-scale-y-100 flex-none">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToGetStarted = () => {
    setIsOpen(false);
    const el = document.getElementById("get-started");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Mobile App", id: "mobile-app" },
    { name: "Businesses", id: "businesses" },
    { name: "FAQs", id: "faqs" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = id.toLowerCase();
    let el = document.getElementById(targetId);

    if (!el && (targetId === "faqs" || targetId === "faq")) {
      el =
        document.getElementById("faqs") ||
        document.getElementById("faq-section") ||
        (document.querySelector("[data-faq-portal='true']") as HTMLElement | null);
    }

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1248px] mx-auto relative px-4 sm:px-0">
      {/* Desktop & Collapsed Mobile Header */}
      <div
        className="content-stretch flex items-center justify-between overflow-clip px-[16px] sm:px-[24px] py-[12px] sm:py-[16px] relative rounded-[12px] shrink-0 w-full"
        style={{ background: "var(--Foundation-neutral-neutral-25, #F5F6FA)" }}
      >
        <Frame1 />

        {/* Desktop Links */}
        <div className="hidden md:inline-flex justify-center items-center gap-[32px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-[#141414] text-center font-['Inter',sans-serif] text-[16px] not-italic font-medium leading-normal hover:text-[#00236f] transition-colors duration-200 cursor-pointer"
              style={{ color: "var(--Foundation-neutral-neutral-950, #141414)" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <button
          type="button"
          onClick={scrollToGetStarted}
          className="hidden md:flex content-stretch gap-[8px] h-[40px] sm:h-[48px] items-center justify-center px-[16px] sm:px-[24px] py-[8px] relative rounded-[12px] shrink-0 cursor-pointer bg-transparent hover:bg-[#00236f]/5 active:scale-95 transition-all duration-200"
          data-name="btns"
        >
          <div aria-hidden className="absolute border border-[#00236f] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#00236f] text-[14px] sm:text-[16px] text-center whitespace-nowrap">
            Book A Free Meeting
          </p>
        </button>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center p-2 rounded-[8px] text-[#141414] hover:bg-[#e8ebf5] transition-colors cursor-pointer"
        >
          {isOpen ? (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Expanded Mobile Menu Card (matching Figma screenshot) */}
      {isOpen && (
        <div
          className="md:hidden absolute top-0 left-4 right-4 z-50 rounded-[16px] p-4 flex flex-col gap-4"
          style={{ background: "var(--Foundation-neutral-neutral-25, #F5F6FA)" }}
        >
          {/* Top Bar with Logo & Close Icon */}
          <div className="flex items-center justify-between pb-3">
            <Frame1 />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="bg-white rounded-[12px] p-2.5 text-[#141414] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
            >
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links Stack */}
          <div className="flex flex-col gap-5 py-2 px-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[#141414] text-left font-['Inter',sans-serif] text-[16px] font-medium leading-normal hover:text-[#00236f] transition-colors cursor-pointer"
                style={{ color: "var(--Foundation-neutral-neutral-950, #141414)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Full Width Mobile Action Button */}
          <button
            type="button"
            onClick={scrollToGetStarted}
            className="w-full h-[48px] border border-[#00236f] rounded-[12px] text-[#00236f] font-['Inter:Medium',sans-serif] font-medium text-[16px] flex items-center justify-center bg-transparent active:scale-95 transition-all cursor-pointer mt-1"
          >
            Book A Free Meeting
          </button>
        </div>
      )}
    </div>
  );
}
