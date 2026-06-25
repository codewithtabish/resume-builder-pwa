"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface Props {
  image: string; // now .lottie path
  title: string;
}

export function OnboardingIllustration({ image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="flex justify-center"
    >
      <div className="relative">
        {/* Glow effect (kept from your design) */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />

        {/* Lottie Animation */}
        <div className="relative mx-auto w-full max-w-xs">
          <DotLottieReact src={image} loop autoplay />
        </div>
      </div>
    </motion.div>
  );
}