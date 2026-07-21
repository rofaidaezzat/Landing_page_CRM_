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
  const scrollToGetStarted = () => {
    const el = document.getElementById("get-started");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f5f6fa] content-stretch flex items-center justify-between overflow-clip px-[16px] sm:px-[24px] py-[12px] sm:py-[16px] relative rounded-[12px] shrink-0 w-full max-w-[1248px] mx-auto">
      <Frame1 />
      <button
        type="button"
        onClick={scrollToGetStarted}
        className="content-stretch flex gap-[8px] h-[40px] sm:h-[48px] items-center justify-center px-[16px] sm:px-[24px] py-[8px] relative rounded-[12px] shrink-0 cursor-pointer bg-transparent hover:bg-[#00236f]/5 active:scale-95 transition-all duration-200"
        data-name="btns"
      >
        <div aria-hidden className="absolute border border-[#00236f] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#00236f] text-[14px] sm:text-[16px] text-center whitespace-nowrap">
          Book A Free Meeting
        </p>
      </button>
    </div>
  );
}
