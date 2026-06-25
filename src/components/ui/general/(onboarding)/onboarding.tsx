"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { onboardingSlides } from "@/data/onboarding";
import { OnboardingIllustration } from "./onboarding-illustration";
import { OnboardingActions } from "./onboarding-actions";
import { ModeToggle } from "../theme/mode-toggle";

/* ✅ SAFE TYPEWRITER HOOK (no cascading renders) */
function useTypewriter(text: string, speed = 25) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let index = 0;
    setOutput("");

    const timer = setTimeout(function tick() {
      setOutput(text.slice(0, index));
      index++;

      if (index <= text.length) {
        setTimeout(tick, speed);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, speed]);

  return output;
}

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [dark, setDark] = useState(false);

  const slide = onboardingSlides[step];

  const typedTitle = useTypewriter(slide.title, 90);
  const typedDesc = useTypewriter(slide.description, 45);

  const handleNext = () => {
    if (step < onboardingSlides.length - 1) {
      setStep((p) => p + 1);
      return;
    }

    console.log("Go to auth");
  };

  const handleSkip = () => {
    console.log("Skip onboarding");
  };

  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-white dark:bg-black transition-colors ">

      {/* Top Right Mode Toggle */}
      <div className="absolute right-5 top-5 z-50">
       <ModeToggle/>
      </div>

      {/* Content */}
      <section className="relative z-10 flex flex-1 flex-col justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="mx-auto w-full max-w-md space-y-8"
          >
            <OnboardingIllustration
              image={slide.image}
              title={slide.title}
            />

            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                {typedTitle}
                <span className="animate-pulse">|</span>
              </h1>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {typedDesc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 pb-8">
        <div className="mx-auto max-w-md">
          <OnboardingActions
            step={step}
            total={onboardingSlides.length}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        </div>
      </footer>
    </main>
  );
}