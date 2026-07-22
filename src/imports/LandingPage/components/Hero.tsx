import svgPaths from "../svg-mb1h8xnyqh";
import imgBunch from "../c6818fb41a501f98bfbaaa356be1ce1e457bf4f7.png";
import imgIMockupIPhone15ProMax from "../7b10de9d84a0e430ec5d9499b80d76ed4cc2c2a4.png";
import imgFrame1321318651 from "../54e88d865d1432c9b390f7c0674bdbbd7f5d3c7c.png";
import imgFrame1321318649 from "../f66643a7e26066cb12c3c0d87fb3e5d863aa3929.png";
import imgFrame1321318650 from "../94adbfd3f0ba01e1f67b07640c8a619b78a50bbf.png";
import { imgTitle } from "../svg-dakay";
import imgBody from "../6afca4764cbbca8d2e3e0b7021acf8ed58bdb1d1.png";
import imgFaviconReplaceMe from "../32b05d681406eb01e74cbd8b1e594012f005feee.png";
import imgFrame1321318762 from "../b6764f22bca8a554248382ae906386805259a659.png";

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] sm:gap-[24px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full whitespace-pre-wrap">
      <div className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#141414] text-[0px] w-full">
        <p className="mb-0 text-[32px] sm:text-[48px] md:text-[64px]">
          <span className="leading-[normal]">{`Grow Your `}</span>
          <span className="leading-[normal] text-[#00236f]">Business</span>
        </p>
        <p className="leading-[normal] text-[32px] sm:text-[48px] md:text-[64px]">{` With Smarter Sales CRM`}</p>
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#464646] text-[14px] sm:text-[16px] w-full px-2">
        <p className="leading-[1.4] mb-0">{`Everything your sales team needs to organize leads, track performance, `}</p>
        <p className="leading-[1.4]">and drive consistent revenue growth from a single platform.</p>
      </div>
    </div>
  );
}

function FluentCursorClick24Regular() {
  return (
    <div className="absolute right-4 sm:left-[713.5px] size-[40px] sm:size-[63px] top-[140px] sm:top-[169px] hidden sm:block" data-name="fluent:cursor-click-24-regular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 63">
        <g id="fluent:cursor-click-24-regular">
          <path d={svgPaths.p1e6e5180} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  const scrollToGetStarted = () => {
    const el = document.getElementById("get-started");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-center justify-center relative shrink-0 w-full max-w-[787px] px-4">
      <Frame2 />
      <button
        type="button"
        onClick={scrollToGetStarted}
        className="bg-[#00236f] hover:bg-[#001c59] active:scale-95 transition-all duration-200 cursor-pointer content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex h-[48px] sm:h-[56px] items-center justify-center px-[24px] py-[8px] relative rounded-[12px] shrink-0"
        data-name="btns"
      >
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#f5f6fa] text-[15px] sm:text-[16px] text-center whitespace-nowrap">
          Book A Free Meeting
        </p>
      </button>
      <FluentCursorClick24Regular />
    </div>
  );
}

function TabTitle() {
  return (
    <div className="absolute contents left-[114px] top-[15px]" data-name="tab-title">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[114px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[177px_20px] not-italic text-[#3d4043] text-[12px] top-[25px] w-[239px]" style={{ maskImage: `url("${imgTitle}")` }}>
        <p className="leading-[normal]">Sales CRM</p>
      </div>
    </div>
  );
}

function FaviconReplaceMe() {
  return (
    <div className="absolute h-[16px] left-[89px] top-[17px] w-[18px]" data-name="favicon [Replace Me]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgFaviconReplaceMe} />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute contents left-[70px] top-[8px]" data-name="tab">
      <div className="absolute h-[34px] left-[70px] top-[8px] w-[256px]" data-name="tab">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 34">
          <path d={svgPaths.p1b01fa00} fill="var(--fill-0, white)" id="tab" />
        </svg>
      </div>
      <TabTitle />
      <div className="absolute left-[298.07px] size-[7.93px] top-[21.09px]" data-name="tab-close-icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.92984 7.92984">
          <path d={svgPaths.p8c69300} fill="var(--fill-0, #5E6063)" id="tab-close-icon" />
        </svg>
      </div>
      <FaviconReplaceMe />
    </div>
  );
}

function TabsBar() {
  return (
    <div className="absolute contents inset-[0_0_46.84%_0]" data-name="tabs-bar">
      <div className="absolute bg-[#dfe1e5] inset-[0_0_46.84%_0]" data-name="background" />
      <div className="absolute left-[334px] size-[12px] top-[19px]" data-name="new-tab-icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p24acef00} fill="var(--fill-0, #606367)" id="new-tab-icon" />
        </svg>
      </div>
      <div className="absolute h-[12px] left-[13px] top-[16px] w-[52px]" data-name="Core / Traffic Lights (Catalina)">
        <div className="absolute inset-[0_76.92%_0_0]" data-name="close">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="close">
              <g filter="url(#filter0_i_1_4120)">
                <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #ED6A5E)" fillRule="evenodd" />
              </g>
              <path d={svgPaths.p107e4900} stroke="var(--stroke-0, #CE5347)" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1_4120" width="12" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_4120" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_38.46%]" data-name="minimize">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="minimize">
              <g filter="url(#filter0_i_1_4118)">
                <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #F6BE4F)" fillRule="evenodd" />
              </g>
              <path d={svgPaths.p107e4900} stroke="var(--stroke-0, #D6A243)" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1_4118" width="12" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_4118" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-[0_0_0_76.92%]" data-name="fullscreen">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="fullscreen">
              <g filter="url(#filter0_i_1_4166)">
                <path clipRule="evenodd" d={svgPaths.p2ca50880} fill="var(--fill-0, #62C554)" fillRule="evenodd" />
              </g>
              <path d={svgPaths.p107e4900} stroke="var(--stroke-0, #58A942)" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1_4166" width="12" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_4166" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tab />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents inset-[53.16%_0_0_0]" data-name="background">
      <div className="absolute bg-white inset-[53.16%_0_0_0]" data-name="background" />
      <div className="absolute bg-[#b6b6b6] inset-[99.37%_0_0_0]" data-name="separator" />
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute contents left-[15.5px] top-[53.5px]" data-name="actions">
      <div className="absolute h-[12.281px] left-[15.5px] top-[53.59px] w-[13px]" data-name="back-arrow-icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12.2813">
          <path clipRule="evenodd" d={svgPaths.p27108900} fill="var(--fill-0, #606367)" fillRule="evenodd" id="back-arrow-icon" />
        </svg>
      </div>
      <div className="absolute flex h-[12.281px] items-center justify-center left-[47.5px] top-[53.59px] w-[13px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[12.281px] relative w-[13px]" data-name="forward-arrow-icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12.2813">
              <path clipRule="evenodd" d={svgPaths.p27108900} fill="var(--fill-0, #BABCBE)" fillRule="evenodd" id="forward-arrow-icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[13px] left-[79.5px] top-[53.5px] w-[13.5px]" data-name="refresh-icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13">
          <path d={svgPaths.p2444ab00} fill="var(--fill-0, #606367)" id="refresh-icon" />
        </svg>
      </div>
    </div>
  );
}

function AddressBar() {
  return (
    <div className="absolute contents left-[11.45%] right-[4.67%] top-[46px]" data-name="address-bar">
      <div className="absolute bg-[#f1f3f4] h-[28px] left-[108px] right-[44px] rounded-[14px] top-[46px]" data-name="address-bar-background" />
      <div className="absolute h-[10.5px] left-[122px] top-[55px] w-[8px]" data-name="secure-icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10.5">
          <path clipRule="evenodd" d={svgPaths.pfa93c60} fill="var(--fill-0, #606367)" fillRule="evenodd" id="secure-icon" />
        </svg>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] h-[28px] justify-center leading-[0] left-[142px] not-italic right-[110px] text-[#202124] text-[0px] top-[60px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px]">
          <span className="leading-[normal] text-[#767676]">{`https://`}</span>
          <span className="leading-[normal]">www.salescrm.com</span>
        </p>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute contents inset-[53.16%_0_0_0]" data-name="toolbar">
      <Background />
      <Actions />
      <AddressBar />
      <div className="absolute h-[13px] right-[20.5px] top-[53.6px] w-[3px]" data-name="menu-icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 13">
          <g id="menu-icon">
            <path d={svgPaths.p3d92b780} fill="var(--fill-0, #606367)" />
            <path d={svgPaths.p8c7fc40} fill="var(--fill-0, #606367)" />
            <path d={svgPaths.p8e21a00} fill="var(--fill-0, #606367)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CoreGoogleChromeToolbarLight() {
  return (
    <div className="absolute h-[79px] left-0 right-0 top-0" data-name="Core / Google Chrome / Toolbar / Light">
      <TabsBar />
      <Toolbar />
      <div className="absolute h-[52px] left-[74px] top-[2px] w-[68px]" data-name="CleanShot 2020-02-25 at 15.02 1" />
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex gap-[7.885px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex gap-[5.257px] h-[26.284px] items-center px-[7.885px] relative rounded-[12px] shrink-0" data-name="drop down btn">
        <div aria-hidden className="absolute border-[#d4d5d8] border-[0.657px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464646] text-[10.51px] whitespace-nowrap">
          <p className="leading-[normal]">All Sales (50)</p>
        </div>
        <div className="relative shrink-0 size-[13.142px]" data-name="chevron-down">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.01px] left-1/2 top-[calc(50%+0.19px)] w-[6.571px]" data-name="Vector">
            <div className="absolute inset-[-21.83%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.8852 4.32372">
                <path d={svgPaths.p29bceac0} id="Vector" stroke="var(--stroke-0, #464646)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3142" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[5.257px] h-[26.284px] items-center px-[7.885px] relative rounded-[12px] shrink-0" data-name="drop down btn">
        <div aria-hidden className="absolute border-[#d4d5d8] border-[0.657px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464646] text-[10.51px] whitespace-nowrap">
          <p className="leading-[normal]">This month</p>
        </div>
        <div className="relative shrink-0 size-[13.142px]" data-name="chevron-down">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.01px] left-1/2 top-[calc(50%+0.19px)] w-[6.571px]" data-name="Vector">
            <div className="absolute inset-[-21.83%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.8852 4.32372">
                <path d={svgPaths.p29bceac0} id="Vector" stroke="var(--stroke-0, #464646)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3142" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[12.485px] whitespace-nowrap">Sales Funnel Performance</p>
      <Frame195 />
    </div>
  );
}

function BasicNode() {
  return (
    <div className="absolute left-[5.26px] size-[0.657px] top-[5.26px]" data-name="basicNode">
      <div className="absolute inset-[-400.01%_-300.02%_-299.99%_-399.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <g id="basicNode">
            <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LegendNode() {
  return (
    <div className="relative shrink-0 size-[10.514px]" data-name="LegendNode">
      <div className="absolute bg-[#00236f] h-[1.314px] left-0 top-[4.6px] w-[10.514px]" data-name="Line" />
      <BasicNode />
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[2.628px] items-center overflow-clip p-[2.628px] relative shrink-0" data-name="Legend">
      <LegendNode />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] whitespace-nowrap">Leads</p>
    </div>
  );
}

function BasicNode1() {
  return (
    <div className="absolute left-[5.26px] size-[0.657px] top-[5.26px]" data-name="basicNode">
      <div className="absolute inset-[-400.01%_-299.99%_-299.99%_-400.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <g id="basicNode">
            <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LegendNode1() {
  return (
    <div className="relative shrink-0 size-[10.514px]" data-name="LegendNode">
      <div className="absolute bg-[#4ba832] h-[1.314px] left-0 top-[4.6px] w-[10.514px]" data-name="Line" />
      <BasicNode1 />
    </div>
  );
}

function Legend1() {
  return (
    <div className="content-stretch flex gap-[2.628px] items-center overflow-clip p-[2.628px] relative shrink-0" data-name="Legend">
      <LegendNode1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] whitespace-nowrap">Deals</p>
    </div>
  );
}

function LineLegends() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_5.257px] items-center justify-center overflow-clip px-[5.257px] relative shrink-0" data-name="LineLegends">
      <Legend />
      <Legend1 />
    </div>
  );
}

function Legends() {
  return (
    <div className="content-center flex flex-wrap items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Legends">
      <LineLegends />
    </div>
  );
}

function YAxisLeft() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-full items-end justify-between leading-[normal] not-italic px-[2.628px] relative shrink-0 text-[#464646] text-[7.885px] w-[22.998px] whitespace-nowrap" data-name="yAxisLeft">
      <p className="relative shrink-0">800</p>
      <p className="relative shrink-0">640</p>
      <p className="relative shrink-0">480</p>
      <p className="relative shrink-0">320</p>
      <p className="relative shrink-0">160</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function XLines() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_-0.52px_-0.14px_0] items-start justify-between px-[0.657px] py-[3.943px]" data-name="xLines">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.66px_0.18%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.262 0.6571">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="371.918" y1="0.32855" y2="0.32855" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.66px_0.18%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.262 0.6571">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="371.918" y1="0.32855" y2="0.32855" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.66px_0.18%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.262 0.6571">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="371.918" y1="0.32855" y2="0.32855" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.66px_0.18%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.262 0.6571">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="371.918" y1="0.32855" y2="0.32855" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.66px_0.18%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.262 0.6571">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="371.918" y1="0.32855" y2="0.32855" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.66px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.918 0.6571">
            <line id="Line" stroke="var(--stroke-0, #00001A)" strokeOpacity="0.3" strokeWidth="0.6571" x2="371.918" y1="0.32855" y2="0.32855" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function YLines() {
  return (
    <div className="absolute content-stretch flex inset-[0_-0.52px_-0.14px_0] items-start justify-between px-[0.657px] py-[3.943px]" data-name="yLines">
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none w-[100cqh]">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-0.66px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.076 0.6571">
                <line id="Line" stroke="var(--stroke-0, #00001A)" strokeDasharray="1.31" strokeOpacity="0.15" strokeWidth="0.6571" x2="155.076" y1="0.32855" y2="0.32855" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BasicNode2() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid inset-[87.5%_94.26%_12.16%_5.56%]" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode3() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid bottom-[49.66%] left-[16.67%] right-[83.15%] top-1/2" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode4() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid inset-[93.75%_72.04%_5.91%_27.78%]" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode5() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid inset-[87.5%_60.92%_12.16%_38.89%]" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode6() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid bottom-[24.66%] left-1/2 right-[49.81%] top-3/4" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode7() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid inset-[93.75%_38.7%_5.91%_61.11%]" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode8() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid bottom-[49.66%] left-[72.22%] right-[27.59%] top-1/2" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode9() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid inset-[87.5%_16.48%_12.16%_83.33%]" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode10() {
  return (
    <div className="absolute border-[#4ba832] border-[0.657px] border-solid inset-[87.5%_5.37%_12.16%_94.44%]" data-name="basicNode">
      <div className="absolute left-[-3.29px] size-[5.257px] top-[-3.29px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function LineNodes1() {
  return (
    <div className="absolute bottom-[5.91%] contents left-[5.56%] right-[5.37%] top-1/2" data-name="LineNodes1">
      <BasicNode2 />
      <BasicNode3 />
      <BasicNode4 />
      <BasicNode5 />
      <BasicNode6 />
      <BasicNode7 />
      <BasicNode8 />
      <BasicNode9 />
      <BasicNode10 />
    </div>
  );
}

function LineGroup1() {
  return (
    <div className="absolute bottom-[5.91%] contents left-[5.56%] right-[5.37%] top-1/2" data-name="LineGroup1">
      <div className="absolute bottom-[6.25%] left-[5.56%] right-[5.56%] top-1/2" data-name="singleLine1">
        <div className="absolute inset-[-0.88%_0_-0.7%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.029 68.3305">
            <path d={svgPaths.p1c8da300} id="singleLine1" stroke="var(--stroke-0, #4BA832)" strokeWidth="0.6571" />
          </svg>
        </div>
      </div>
      <LineNodes1 />
    </div>
  );
}

function BasicNode11() {
  return (
    <div className="absolute inset-[37.5%_94.26%_62.16%_5.56%]" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode12() {
  return (
    <div className="absolute inset-[0_83.15%_99.66%_16.67%]" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode13() {
  return (
    <div className="absolute bottom-[49.66%] left-[27.78%] right-[72.04%] top-1/2" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode14() {
  return (
    <div className="absolute inset-[37.5%_60.92%_62.16%_38.89%]" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode15() {
  return (
    <div className="absolute bottom-[99.66%] left-1/2 right-[49.81%] top-0" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode16() {
  return (
    <div className="absolute bottom-[49.66%] left-[61.11%] right-[38.7%] top-1/2" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode17() {
  return (
    <div className="absolute inset-[0_27.59%_99.66%_72.22%]" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode18() {
  return (
    <div className="absolute bottom-[74.66%] left-[83.33%] right-[16.48%] top-1/4" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function BasicNode19() {
  return (
    <div className="absolute inset-[37.5%_5.37%_62.16%_94.44%]" data-name="basicNode">
      <div className="absolute left-[-2.63px] size-[5.257px] top-[-2.63px]" data-name="EllipseLine">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2568 5.2568">
          <circle cx="2.6284" cy="2.6284" fill="var(--fill-0, white)" id="EllipseLine" r="2.29985" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
        </svg>
      </div>
    </div>
  );
}

function LineNodes() {
  return (
    <div className="absolute contents inset-[0_5.37%_49.66%_5.56%]" data-name="LineNodes0">
      <BasicNode11 />
      <BasicNode12 />
      <BasicNode13 />
      <BasicNode14 />
      <BasicNode15 />
      <BasicNode16 />
      <BasicNode17 />
      <BasicNode18 />
      <BasicNode19 />
    </div>
  );
}

function LineGroup() {
  return (
    <div className="absolute contents inset-[0_5.37%_49.66%_5.56%]" data-name="LineGroup0">
      <div className="absolute bottom-1/2 left-[5.56%] right-[5.56%] top-0" data-name="singleLine0">
        <div className="absolute inset-[-0.8%_0_-0.9%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.167 78.1909">
            <path d={svgPaths.p3b453a00} id="singleLine0" stroke="var(--stroke-0, #00236F)" strokeWidth="0.6571" />
          </svg>
        </div>
      </div>
      <LineNodes />
    </div>
  );
}

function LineArea() {
  return (
    <div className="absolute inset-[4.6px_-0.52px_4.46px_0]" data-name="LineArea">
      <LineGroup1 />
      <LineGroup />
    </div>
  );
}

function GraphiGrid() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Graphi&Grid">
      <XLines />
      <YLines />
      <LineArea />
    </div>
  );
}

function MainChart() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.628px] items-center mb-[-1.314px] min-h-px relative w-full" data-name="MainChart">
      <div className="flex h-[31px] items-center justify-center relative shrink-0 w-[13px]">
        <div className="-rotate-90 flex-none">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#464646] text-[10.514px] whitespace-nowrap">Count</p>
        </div>
      </div>
      <YAxisLeft />
      <GraphiGrid />
    </div>
  );
}

function XLabelBox() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">Jan</p>
    </div>
  );
}

function XLabelBox1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">Feb</p>
    </div>
  );
}

function XLabelBox2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">Mar</p>
    </div>
  );
}

function XLabelBox3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">Apr</p>
    </div>
  );
}

function XLabelBox4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">May</p>
    </div>
  );
}

function XLabelBox5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">June</p>
    </div>
  );
}

function XLabelBox6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">July</p>
    </div>
  );
}

function XLabelBox7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">Aug</p>
    </div>
  );
}

function XLabelBox8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="xLabelBox">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#464646] text-[7.885px] text-center w-full">Sep</p>
    </div>
  );
}

function XAxis() {
  return (
    <div className="relative shrink-0 w-full" data-name="xAxis">
      <div className="content-stretch flex items-start pb-[5.257px] pl-[20.37px] relative size-full">
        <XLabelBox />
        <XLabelBox1 />
        <XLabelBox2 />
        <XLabelBox3 />
        <XLabelBox4 />
        <XLabelBox5 />
        <XLabelBox6 />
        <XLabelBox7 />
        <XLabelBox8 />
      </div>
    </div>
  );
}

function ChartAxis() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Chart&Axis">
      <MainChart />
      <XAxis />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5.257px] items-start min-h-px relative w-full">
      <Legends />
      <ChartAxis />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10.514px] items-start min-h-px relative w-full">
      <Frame147 />
      <Frame144 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[255.612px] items-start overflow-clip p-[10.514px] relative rounded-[7.885px] shadow-[0px_1px_2px_3px_rgba(0,0,0,0.11)] w-[435px]">
      <Frame142 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[12.605px] whitespace-nowrap">Company Revenue Target</p>
      <div className="content-stretch flex gap-[5.307px] h-[26.536px] items-center px-[7.961px] relative rounded-[12px] shrink-0" data-name="drop down btn">
        <div aria-hidden className="absolute border-[#d4d5d8] border-[0.663px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464646] text-[10.61px] whitespace-nowrap">
          <p className="leading-[normal]">This Month</p>
        </div>
        <div className="relative shrink-0 size-[13.268px]" data-name="chevron-down">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.038px] left-1/2 top-[calc(50%+0.19px)] w-[6.634px]" data-name="Vector">
            <div className="absolute inset-[-21.83%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.96079 4.36517">
                <path d={svgPaths.p26db7a00} id="Vector" stroke="var(--stroke-0, #464646)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3268" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[7.961px] items-start justify-center not-italic relative shrink-0 whitespace-nowrap">
      <p className="leading-[0] relative shrink-0 text-[#141414] text-[0px]">
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] text-[12.605px]">25,000 EGP</span>
        <span className="leading-[normal] text-[12.605px]">{` `}</span>
        <span className="leading-[normal] text-[10.614px]">/40,000 EGP</span>
      </p>
      <p className="leading-[normal] relative shrink-0 text-[#464646] text-[10.614px]">Only 15,000 left !</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[9.04%_9.41%_6.21%_9.41%]" data-name="Group">
      <div className="absolute inset-[-6.54%_-6.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141.95 142.401">
          <g id="Group">
            <path d={svgPaths.p1c12b480} id="Vector" stroke="var(--stroke-0, #B0BBD2)" strokeWidth="16.4739" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[9.04%_9.41%_6.21%_9.41%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-[84.4%] left-1/2 right-[28.32%] top-[9.04%]" data-name="Group">
      <div className="absolute inset-[-119.81%_-18.68%_-101.1%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7751 31.2547">
          <g id="Group">
            <path d={svgPaths.p50ea700} id="Vector" stroke="var(--stroke-0, #00236F)" strokeWidth="23.338" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[84.4%] contents left-1/2 right-[28.32%] top-[9.04%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[9.04%_9.41%_6.21%_9.41%]" data-name="Group">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:Bold',sans-serif] font-bold gap-[7.961px] items-center leading-[normal] relative shrink-0 text-white w-full">
      <p className="relative shrink-0 text-[39.537px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        60
      </p>
      <p className="relative shrink-0 text-[25.626px] w-[27.782px]" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
        %
      </p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col items-center left-[calc(50%-0.04px)] top-[calc(50%+6.81px)] w-[81.518px]">
      <Frame145 />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[14.288px] leading-[1.4] not-italic relative shrink-0 text-[#00236f] text-[8.624px] text-center w-full">Completed</p>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+2.1px)]" data-name="Group">
      <Group1 />
      <Frame146 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-[148.601px] overflow-clip relative shrink-0 w-[154.572px]">
      <Group />
    </div>
  );
}

function Filled() {
  return <div className="-translate-y-1/2 absolute bg-[#00236f] h-[6.634px] left-[-0.28px] rounded-[2.654px] top-1/2 w-[23.219px]" data-name="Filled" />;
}

function Track() {
  return (
    <div className="bg-[#d4d5d8] h-[6.634px] relative rounded-[2.654px] shrink-0 w-[63.686px]" data-name="Track">
      <Filled />
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex gap-[5.307px] items-center relative shrink-0 w-[92.876px]">
      <Track />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap" dir="auto">
        12%
      </p>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap">6000 EGP</p>
      <Frame170 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex flex-col gap-[5.307px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[8.624px] whitespace-nowrap">Mohammed Gammal</p>
      <Frame204 />
    </div>
  );
}

function Filled1() {
  return <div className="-translate-y-1/2 absolute bg-[#00236f] h-[6.634px] left-[-0.28px] rounded-[2.654px] top-1/2 w-[23.219px]" data-name="Filled" />;
}

function Track1() {
  return (
    <div className="bg-[#d4d5d8] h-[6.634px] relative rounded-[2.654px] shrink-0 w-[63.686px]" data-name="Track">
      <Filled1 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex gap-[5.307px] items-center relative shrink-0 w-[92.876px]">
      <Track1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap" dir="auto">
        20%
      </p>
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap">6000 EGP</p>
      <Frame171 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex flex-col gap-[5.307px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[8.624px] whitespace-nowrap">Moataz Gammal</p>
      <Frame207 />
    </div>
  );
}

function Filled2() {
  return <div className="-translate-y-1/2 absolute bg-[#00236f] h-[6.634px] left-[-0.28px] rounded-[2.654px] top-1/2 w-[23.219px]" data-name="Filled" />;
}

function Track2() {
  return (
    <div className="bg-[#d4d5d8] h-[6.634px] relative rounded-[2.654px] shrink-0 w-[63.686px]" data-name="Track">
      <Filled2 />
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex gap-[5.307px] items-center relative shrink-0 w-[92.876px]">
      <Track2 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap" dir="auto">
        18%
      </p>
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap">6000 EGP</p>
      <Frame172 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex flex-col gap-[5.307px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[8.624px] whitespace-nowrap">Rewan Gammal</p>
      <Frame210 />
    </div>
  );
}

function Filled3() {
  return <div className="-translate-y-1/2 absolute bg-[#00236f] h-[6.634px] left-[-0.28px] rounded-[2.654px] top-1/2 w-[23.219px]" data-name="Filled" />;
}

function Track3() {
  return (
    <div className="bg-[#d4d5d8] h-[6.634px] relative rounded-[2.654px] shrink-0 w-[63.686px]" data-name="Track">
      <Filled3 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex gap-[5.307px] items-center relative shrink-0 w-[92.876px]">
      <Track3 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap" dir="auto">
        18%
      </p>
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#464646] text-[8.624px] whitespace-nowrap">6000 EGP</p>
      <Frame173 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex flex-col gap-[5.307px] items-start justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#141414] text-[8.624px] whitespace-nowrap">Rewan Gammal</p>
      <Frame214 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10.614px] items-start justify-center min-w-px relative">
      <Frame205 />
      <Frame206 />
      <Frame208 />
      <Frame213 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#00236f] text-[8.624px] whitespace-nowrap">View All</p>
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex gap-[10.614px] items-center relative shrink-0 w-full">
      <Frame106 />
      <Frame209 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame108 />
      <Frame211 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-col gap-[13.268px] items-start relative shrink-0 w-[379.464px]">
      <Frame105 />
      <Frame212 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-white content-stretch flex h-[258.062px] items-center justify-center overflow-clip p-[10.614px] relative rounded-[7.961px] shadow-[0px_1px_2px_3px_rgba(0,0,0,0.11)] w-[406px]">
      <Frame203 />
    </div>
  );
}

function Frame248() {
  return (
    <div className="w-full relative shrink-0">
      {/* Desktop view (lg) - UNTOUCHED WEB SCREEN */}
      <div className="hidden lg:block h-[689px] relative shrink-0 w-full">
        <div className="absolute left-[1061px] size-[239px] top-[48px]">
          <div className="absolute inset-[-125.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 839 839">
              <g filter="url(#filter0_f_1_4030)" id="Ellipse 1">
                <circle cx="419.5" cy="419.5" fill="var(--fill-0, #8A9ABD)" r="119.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="839" id="filter0_f_1_4030" width="839" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_4030" stdDeviation="150" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[58px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3228880cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 1" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[171px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[283px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[395px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[508px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[620px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[732px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[844px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[957px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[1069px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-center left-[1181px] top-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none h-[3192660cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 689 1">
                  <line id="Line 9" stroke="var(--stroke-0, #D4D5D8)" x2="689" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[48px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[122px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[196px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[270px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[344px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[418px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[492px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[566px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-0 top-[640px] w-[1248px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1248 1">
              <line id="Line 22" stroke="var(--stroke-0, #D4D5D8)" x2="1248" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-white h-[619px] left-[calc(50%+0.5px)] overflow-clip rounded-[24px] shadow-[2px_1px_8.8px_7px_rgba(0,35,111,0.11)] top-[30px] w-[943px]" data-name="Desktop / Chrome / Light">
          <div className="absolute inset-[79px_0_0_0]" data-name="Body">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBody} />
          </div>
          <CoreGoogleChromeToolbarLight />
          <div className="absolute flex h-[319.958px] items-center justify-center left-[53px] top-[319px] w-[469.367px]">
            <div className="flex-none rotate-[-8.92deg]">
              <Frame102 />
            </div>
          </div>
          <div className="absolute flex h-[277.078px] items-center justify-center left-[572px] top-[163px] w-[417.813px]">
            <div className="flex-none rotate-[2.73deg]">
              <Frame103 />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view (< lg) - RESPONSIVE MOBILE HERO IMAGE (Height: 224.704px, Width: card width) */}
      <div className="block lg:hidden w-full h-[224.704px] relative rounded-[24px] overflow-hidden bg-white shadow-[2px_1px_8.8px_7px_rgba(0,35,111,0.11)] border border-[#d4d5d8] flex items-center justify-center" style={{ height: "224.704px" }}>
        <div className="scale-[0.38] sm:scale-[0.5] origin-center relative w-[943px] h-[619px] shrink-0 pointer-events-none">
          <div className="absolute inset-[79px_0_0_0]" data-name="Body">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBody} />
          </div>
          <CoreGoogleChromeToolbarLight />
          <div className="absolute flex h-[319.958px] items-center justify-center left-[53px] top-[319px] w-[469.367px]">
            <div className="flex-none rotate-[-8.92deg]">
              <Frame102 />
            </div>
          </div>
          <div className="absolute flex h-[277.078px] items-center justify-center left-[572px] top-[163px] w-[417.813px]">
            <div className="flex-none rotate-[2.73deg]">
              <Frame103 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full" data-name="hero">
      <Frame3 />
      <Frame248 />
    </div>
  );
}


function Frame261() {
  return (
    <div className="h-[239px] relative rounded-[12px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame1321318762} />
    </div>
  );
}

function Frame262() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#141414] text-[23px] w-full">Performance Stays Hidden</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#464646] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">Managers lack a clear view of team activity, conversion rates, and sales performance, making it harder to identify issues</p>
        <p className="leading-[1.4]">{` and improve results.`}</p>
      </div>
    </div>
  );
}

export function Frame260() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.11)] flex-[1_0_0] min-w-px relative rounded-[28px]">
      <div aria-hidden className="absolute border border-[#d4d5d8] border-solid inset-0 pointer-events-none rounded-[28px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[16px] relative size-full">
        <Frame261 />
        <Frame262 />
      </div>
    </div>
  );
}
