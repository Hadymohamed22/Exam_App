"use client";

import { ProgressCircle } from "@/components/ui/progress-circle";

type ChartRadialTextPropsType = {
  timer: number;
  duration: number;
};

export default function ChartRadialText({
  timer,
  duration,
}: ChartRadialTextPropsType) {
  
  return (
    <ProgressCircle
      variant="default"
      max={duration}
      value={timer}
      radius={40}
      showAnimation
    >
      <span>{timer}</span>
    </ProgressCircle>
  );
}
