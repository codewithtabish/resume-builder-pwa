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
      <div className="relative mx-auto w-full">
  <div className="mx-auto aspect-square w-55 sm:w-65 md:w-[320px]">
    <DotLottieReact
      src={image}
      loop
      autoplay
    />
  </div>
</div>
    </motion.div>
  );
}