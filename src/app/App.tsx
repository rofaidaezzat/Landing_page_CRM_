import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import LandingPage from "@/imports/LandingPage/index";
import BuiltFor from "@/imports/BuiltFor/index";
import Ellipse from "@/imports/Ellipse1/index";

/* ─── Animation helpers ────────────────────────────────────────────────── */

type SA = "fade-top" | "slide-left" | "slide-right" | "scale-in" | "fade-up";

function mark(el: Element | null | undefined, type: SA, delay = 0, dur = 500) {
  if (!el) return;
  const h = el as HTMLElement;
  h.dataset.sa = type;
  h.style.setProperty("--sa-delay", `${delay}ms`);
  h.style.setProperty("--sa-dur", `${dur}ms`);
}

function kid(el: Element | null | undefined, i: number): Element | undefined {
  return el ? (el.children[i] ?? undefined) : undefined;
}

/* ─── Scroll animation setup ───────────────────────────────────────────── */

function setupScrollAnimations(faqPortal: HTMLElement): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  /* Hero */
  const hero = document.querySelector("[data-name='hero']");
  mark(kid(hero, 0), "fade-up",  200, 600);
  mark(kid(hero, 1), "scale-in", 400, 700);

  /* Problem section
     DOM: problem > [inner-flex] > [blur(abs), Frame306, Frame307] */
  const problem   = document.querySelector("[data-name='problem section']");
  const probInner = kid(problem, 0);
  const frame306  = kid(probInner, 1);
  mark(kid(frame306, 0), "fade-top",    0,   500);
  const cardsRow  = kid(frame306, 1);
  mark(kid(cardsRow, 0), "slide-left",  80,  500);
  mark(kid(cardsRow, 1), "scale-in",   160,  500);
  mark(kid(cardsRow, 2), "slide-right", 240,  500);
  mark(kid(probInner, 2), "fade-up",   80,  500);

  /* Features section
     DOM: features > [Frame263, Ai, MobileApp] */
  const feat    = document.querySelector("[data-name='features section']");
  const frame263 = kid(feat, 0);

  /* Frame263 → overflow-clip div → [blur(abs), Frame321(abs)]
     Frame321 → [title, Frame310 → [row0..row3]] */
  const frame321 = kid(kid(frame263, 0), 1);
  mark(kid(frame321, 0), "fade-top", 0, 500);
  const frame310 = kid(frame321, 1);
  if (frame310) {
    Array.from(frame310.children).forEach((row, i) => {
      mark(row, i % 2 === 0 ? "slide-left" : "slide-right", i * 70, 450);
    });
  }

  mark(document.querySelector("[data-name='AI']"),         "fade-up",  0, 500);
  mark(document.querySelector("[data-name='mobile app']"), "scale-in", 0, 600);

  /* Sectors section (first [data-name="built for"]) */
  const allBuiltFor = document.querySelectorAll("[data-name='built for']");
  mark(allBuiltFor[0], "fade-up", 0, 500);

  /* FAQ section — new BuiltFor rendered inside faqPortal
     DOM: faqPortal > div[data-name="built for"] > [inner-flex] > [title, Frame(items)] */
  const newFaqRoot = faqPortal.querySelector("[data-name='built for']");
  if (newFaqRoot) {
    const faqInner = kid(newFaqRoot, 0);
    mark(kid(faqInner, 0), "fade-top", 0, 400); // "FAQs" title
    faqPortal.querySelectorAll("[data-name='faq item']").forEach((item, i) => {
      mark(item, "fade-up", i * 60, 400);
    });
  }

  /* Contact / Form section
     DOM: form > [inner-flex(Frame282, Frame73), border] */
  const form      = document.querySelector("[data-name='form']");
  const formInner = kid(form, 0);
  mark(kid(formInner, 0), "slide-left",  0, 500);
  mark(kid(formInner, 1), "slide-right", 0, 500);

  /* Footer columns
     DOM: Footer > div > div.flex-col > [Frame341(cols), Paragraph] */
  const footer     = document.querySelector("[data-name='Footer']");
  const footerFlex = kid(kid(footer, 0), 0);
  const frame341   = kid(footerFlex, 0);
  if (frame341) {
    Array.from(frame341.children).forEach((col, i) => {
      mark(col, "fade-up", i * 60, 400);
    });
  }

  /* Intersection Observer */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sa-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("[data-sa]").forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/* ─── App ──────────────────────────────────────────────────────────────── */

export default function App() {
  const [portalTarget,  setPortalTarget]  = useState<HTMLElement | null>(null);
  const [ellipseTarget, setEllipseTarget] = useState<HTMLElement | null>(null);

  /* Phase 1: (a) hide old FAQ, insert portal wrapper; (b) fix navbar layout.
     React processes state updates inside useLayoutEffect synchronously,
     so the re-render (which mounts the portal) happens before the first paint. */
  useLayoutEffect(() => {
    // (a) FAQ replacement
    const allBuiltFor = document.querySelectorAll("[data-name='built for']");
    const oldFaq = allBuiltFor[1] as HTMLElement | null;
    if (oldFaq?.parentElement) {
      const wrapper = document.createElement("div");
      wrapper.className = "shrink-0 w-full max-w-[1248px]";
      wrapper.setAttribute("data-faq-portal", "true");
      oldFaq.parentElement.insertBefore(wrapper, oldFaq);
      oldFaq.style.display = "none";
      setPortalTarget(wrapper);
    }

    // (b) Ellipse orbit wrapper inside Frame3 (hero text container)
    //     Frame3 = [data-name="hero"] > div:first-child (already has `relative`)
    const frame3 = document.querySelector("[data-name='hero'] > div:first-child") as HTMLElement | null;
    if (frame3) {
      const orbitEl = document.createElement("div");
      orbitEl.setAttribute("data-ellipse-orbit", "true");
      // Fills Frame3, sits behind all flex children (first in DOM order), no pointer events
      orbitEl.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:0;";
      frame3.insertBefore(orbitEl, frame3.firstChild);
      setEllipseTarget(orbitEl);
    }

    // (c) Navbar spacer — the navbar is now position:fixed (removed from flow).
    //     Insert a same-height spacer after it so the hero content isn't hidden behind it.
    const root   = document.querySelector("[data-name='Landing page']") as HTMLElement | null;
    const navbar = root?.children[0] as HTMLElement | undefined;
    if (root && navbar) {
      const navH   = navbar.getBoundingClientRect().height;
      const spacer = document.createElement("div");
      spacer.style.height     = `${navH}px`;
      spacer.style.flexShrink = "0";
      spacer.setAttribute("data-navbar-spacer", "true");
      // Insert immediately after the navbar (before Frame296)
      root.insertBefore(spacer, navbar.nextSibling);
    }
  }, []);

  /* Phase 2: animation setup. Runs after the portal has rendered the new
     BuiltFor into the DOM, so all FAQ items are queryable. */
  useLayoutEffect(() => {
    if (!portalTarget) return;
    return setupScrollAnimations(portalTarget);
  }, [portalTarget]);

  return (
    <div className="w-full overflow-x-hidden relative">
      <LandingPage />
      {portalTarget  && createPortal(<BuiltFor />, portalTarget)}
      {ellipseTarget && createPortal(<Ellipse />, ellipseTarget)}
    </div>
  );
}
