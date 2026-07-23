import { useState } from "react";
import svgPaths from "./svg-bo0ewtomo6";

function MinusIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-minus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:round-minus">
          <path d={svgPaths.p1123e800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:round-plus">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#141414" />
      </svg>
    </div>
  );
}
const faqList = [
  {
    id: 1,
    question: "1. Who is this CRM designed for?",
    answer: "Our CRM is built for SMBs and growing businesses that want to manage leads, track deals, and improve sales team productivity.",
  },
  {
    id: 2,
    question: "2. Which industries can use the platform?",
    answer: "The platform is suitable for real estate companies, agencies, distributors, educational institutions, SaaS businesses, and other growing organizations.",
  },
  {
    id: 3,
    question: "3. Can I assign leads and tasks to my sales team?",
    answer: "Yes. Team leaders can assign leads and tasks, monitor progress, and ensure every opportunity is followed up effectively.",
  },
  {
    id: 4,
    question: "4. Does the CRM support mobile devices?",
    answer: "Yes. Access your leads, deals, tasks, and reports from anywhere through our mobile application.",
  },
  {
    id: 5,
    question: "5. Does the platform offer AI-powered features?",
    answer: "Yes. Built-in AI capabilities help automate repetitive work and provide smart assistance to improve team productivity.",
  },
  {
    id: 6,
    question: "6. Can different users have different permissions?",
    answer: "Absolutely. Admins, managers, and sales representatives each have dedicated workspaces and role-based access.",
  },
  {
    id: 7,
    question: "7. Is my data secure?",
    answer: "Yes. We use industry standard security practices to protect your business and customer information.",
  },
  {
    id: 8,
    question: "8. How do I get started?",
    answer: "Simply submit the contact form, speak with one of our representatives, choose the plan that fits your business, and start using the platform.",
  },
];

export default function BuiltFor() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faqs" className="bg-white relative rounded-[28px] shrink-0 w-full max-w-[1248px] p-[16px] sm:p-[32px] z-10 border border-[#d4d5d8] shadow-sm scroll-mt-28" data-name="built for">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full self-stretch">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#141414] text-[32px] sm:text-[40px] self-stretch w-full" dir="auto">
          FAQs
        </p>

        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full divide-y divide-[#D4D5D8]">
          {faqList.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="w-full self-stretch transition-all duration-200" data-name="faq item">
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full self-stretch min-h-[56px] h-auto p-[16px] cursor-pointer flex flex-row items-center justify-between gap-[16px] text-left focus:outline-none group"
                >
                  <p className="[word-break:break-word] flex-1 font-['Inter:Medium',sans-serif] font-medium leading-[1.4] text-[#141414] text-[16px] sm:text-[19px] group-hover:text-[#00236f] transition-colors whitespace-normal">
                    {item.question}
                  </p>
                  <div className="p-1 rounded-full hover:bg-slate-100 transition-colors shrink-0">
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-[16px] pb-[16px] sector-image-fade">
                    <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] text-[#464646] text-[14px] sm:text-[16px] text-left w-full">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}