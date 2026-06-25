"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  step: number;
  total: number;
  onNext: () => void;
  onSkip?: () => void;
}

export function OnboardingActions({
  step,
  total,
  onNext,
}: Props) {
  const router = useRouter();

  const handleSkip = () => {
    router.push("/resume");
  };

  const handleContinue = () => {
    if (step === total - 1) {
      router.push("/resume");
      return;
    }

    onNext();
  };

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === step
                ? "w-8 bg-primary"
                : "w-2 bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Main Button */}
      <Button
        size="lg"
        onClick={handleContinue}
        className="h-14 w-full rounded-2xl text-base font-semibold shadow-sm"
      >
        {step === total - 1 ? "Get Started" : "Continue"}

        <ArrowRight className="ml-2 size-4" />
      </Button>

      {/* Skip */}
      {step !== total - 1 && (
        <button
          onClick={handleSkip}
          className="w-full py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Skip for now
        </button>
      )}
    </div>
  );
}