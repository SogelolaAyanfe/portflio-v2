import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import type { Application } from "@splinetool/runtime";
import { motion } from "motion/react";

// Lazy-load Spline so its JS, the Draco wasm decoder, and the
// .splinecode scene file are split into a separate chunk and fetched
// only when we actually decide to mount it — not as part of the
// initial critical request chain.
const Spline = lazy(() => import("@splinetool/react-spline"));

const HERO_INFO = [
  { text: "technical functionality " },
  { text: "aesthetic design " },
  { text: "innovation and reality" },
];

// Named alias instead of an inline union — keeping this as a single
// token avoids TS misparsing `useState<"xs" | "sm" | ...>(...)` as a
// chain of comparison operators when the generic spans multiple lines
// in a .tsx file (that misparse is what caused breakpoint to widen to
// `string` and cascade into the Record<> indexing errors).
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

// Helper function to figure out the active Tailwind breakpoint instantly
const getBreakpoint = (): Breakpoint => {
  if (typeof window === "undefined") return "xs";
  if (window.matchMedia("(min-width: 1280px)").matches) return "xl";
  if (window.matchMedia("(min-width: 1024px)").matches) return "lg";
  if (window.matchMedia("(min-width: 768px)").matches) return "md";
  if (window.matchMedia("(min-width: 640px)").matches) return "sm";
  return "xs";
};

const ZOOM_MAP: Record<Breakpoint, number> = {
  xl: 4,
  lg: 2.5,
  md: 2.5,
  sm: 2.5,
  xs: 1.5,
};

const HEIGHT_MAP: Record<Breakpoint, string> = {
  xl: "42rem",
  lg: "36rem",
  md: "28rem",
  sm: "22rem",
  xs: "15rem",
};

const Hero = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(),
  );

  // Holds the live Spline app instance so we can call setZoom() on it
  // whenever the breakpoint changes, instead of CSS-scaling the canvas.
  const splineAppRef = useRef<Application | null>(null);

  // Tracks whether we've applied the correct zoom yet. The canvas stays
  // hidden until this is true, which prevents the flash-of-full-size-
  // model on load (Spline briefly renders at the scene's baked-in
  // default zoom before our onLoad handler gets a chance to correct it).
  const [isSplineReady, setIsSplineReady] = useState(false);

  // Controls whether we've even started loading the Spline chunk yet.
  // Deferred until the browser is idle (or a short timeout on Safari,
  // which lacks requestIdleCallback) so the 3D scene never competes
  // with the initial critical request chain / LCP.
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const heroModelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const queries = {
      sm: window.matchMedia("(min-width: 640px)"),
      md: window.matchMedia("(min-width: 768px)"),
      lg: window.matchMedia("(min-width: 1024px)"),
      xl: window.matchMedia("(min-width: 1280px)"),
    };

    const updateBreakpoint = () => {
      setBreakpoint(getBreakpoint());
    };

    Object.values(queries).forEach((q) =>
      q.addEventListener("change", updateBreakpoint),
    );

    return () => {
      Object.values(queries).forEach((q) =>
        q.removeEventListener("change", updateBreakpoint),
      );
    };
  }, []);

 
  useEffect(() => {
    let idleId: number | ReturnType<typeof setTimeout> | undefined;
    let usedIdleCallback = false;
    let observer: IntersectionObserver | undefined;

    const load = () => setShouldLoadSpline(true);

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(load, { timeout: 2000 });
      usedIdleCallback = true;
    } else {
      idleId = setTimeout(load, 300);
    }

    if (heroModelRef.current && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) load();
        },
        { rootMargin: "200px" },
      );
      observer.observe(heroModelRef.current);
    }

    return () => {
      if (idleId !== undefined) {
        if (
          usedIdleCallback &&
          typeof window.cancelIdleCallback === "function"
        ) {
          window.cancelIdleCallback(idleId as number);
        } else {
          clearTimeout(idleId as ReturnType<typeof setTimeout>);
        }
      }
      observer?.disconnect();
    };
  }, []);

  // Whenever breakpoint changes, zoom the actual 3D camera rather than
  // CSS-scaling the rendered canvas. Requires the Spline app instance,
  // captured in onLoad below.
  useEffect(() => {
    if (splineAppRef.current) {
      splineAppRef.current.setZoom(ZOOM_MAP[breakpoint]);
    }
  }, [breakpoint]);

  const handleSplineLoad = (splineApp: Application) => {
    splineAppRef.current = splineApp;
    splineApp.setZoom(ZOOM_MAP[breakpoint]);

    // setZoom() updates the camera, but the canvas needs at least one
    // paint cycle to actually render that change. If we flip opacity to
    // 1 in the same tick, the browser can still paint the OLD (default,
    // unzoomed) frame at full visibility before the new one lands —
    // that's the flash you were seeing. Waiting two animation frames
    // guarantees the zoomed frame has been painted before we reveal it.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => setIsSplineReady(true), 100);
      });
    });
  };

  return (
    <main className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between w-full h-screen lg:h-screen bg-[url('/future-hero-bg.jpg')] bg-cover bg-center bg-no-repeat max-sm:p-2 p-6 md:p-10 lg:p-15 gap-10 lg:gap-0">
      {/* INTRODUCTORY WRITING */}
      <motion.div
        className="flex flex-col lg:w-[50%] justify-center items-center lg:items-start text-center lg:text-left break-normal relative z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide xl:text-7xl leading-snug">
          Bridging the gap between
        </h1>
        <div className="flex justify-center lg:justify-start min-h-8 sm:min-h-10 lg:min-h-12 mt-1 lg:mt-2">
          <span className="text-[#C0DC6E] text-3xl sm:text-4xl lg:text-5xl xl:text-7xl  tracking-wide">
            <TypeAnimation
              sequence={[
                HERO_INFO[0].text,
                3000,
                HERO_INFO[1].text,
                3000,
                HERO_INFO[2].text,
                3000,
              ]}
              repeat={Infinity}
              cursor={false}
            />
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl xl:wrap-break-word xl:leading-20 tracking-wide leading-8 lg:leading-12 mt-2 lg:mt-3">
          to create meaningful digital experiences.
        </h1>

        <h2 className="pt-4 lg:pt-6 text-base sm:text-lg lg:text-xl xl:text-3xl xl:pt-6 text-white/80 tracking-wide max-w-md lg:max-w-none">
          Hi, I'm Ayanfeoluwa, a developer, Civil engineer, and gamer.
        </h2>
      </motion.div>

      {/* 3D MODEL CONTAINER */}
      <div
        ref={heroModelRef}
        className="flex w-full lg:w-[50%] justify-center items-center relative z-0"
      >
        <motion.div
          className="flex items-center justify-center w-full"
          style={{
            pointerEvents: "none",
            height: HEIGHT_MAP[breakpoint],
            transition: "height 0.4s ease-out",
          }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 6, ease: "easeOut" }}
        >
          {/* Lightweight placeholder — keeps layout stable and gives
              Lighthouse a real paint target that isn't blocked on the
              Spline/Draco/scene download chain. Swap in for a subtle
              gradient or low-res screenshot of the model if you have one. */}
          {!isSplineReady && (
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(192,220,110,0.08), transparent 70%)",
              }}
              aria-hidden="true"
            />
          )}

          {shouldLoadSpline && (
            <Suspense fallback={null}>
              <Spline
                scene="/scene (4).splinecode"
                onLoad={handleSplineLoad}
                style={{
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                  background: "transparent",
                  opacity: isSplineReady ? 1 : 0,
                  position: isSplineReady ? "static" : "absolute",
                  transition: "opacity 0.3s ease-out",
                }}
              />
            </Suspense>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
