"use client";

import { useEffect, useState } from "react";
import { Progress } from "~/registry/ui/progress";

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root aria-label="Progress" className="w-[60%]" value={progress}>
      <Progress.Indicator />
    </Progress.Root>
  );
}
