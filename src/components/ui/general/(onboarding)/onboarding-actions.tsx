"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  step: number;
  total: number;
  onNext: () => void;
  onSkip: () => void;
}

export function OnboardingActions({
  step,
  total,
  onNext,
  onSkip,
}: Props) {
  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === step ? "w-8 bg-primary" : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>

      <Button
        size="lg"
        className="h-12 w-full rounded-xl text-base font-semibold"
        onClick={onNext}
      >
        {step === total - 1 ? "Get Started" : "Continue"}
        <ArrowRight className="ml-2 size-4" />
      </Button>

      <button
        onClick={onSkip}
        className="w-full text-sm text-muted-foreground"
      >
        Skip for now
      </button>
    </div>
  );
}