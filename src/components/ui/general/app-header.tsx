"use client";

import { Sparkles } from "lucide-react";
import { ModeToggle } from "./theme/mode-toggle";

export function AppHeader() {
  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b
        bg-background/80
        backdrop-blur-xl
        supports-backdrop-filter:bg-background/60
      "
    >
      <div className="flex items-center justify-between px-5 py-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="size-5" />
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-semibold">
              ResumePilot
            </h1>
            <p className="text-[11px] text-muted-foreground">
              AI-powered builder
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}