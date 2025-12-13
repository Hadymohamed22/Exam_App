"use client";

import React, { SetStateAction, useEffect, useRef, useState } from "react";
import ChartRadialText from "./chart-radial-text";

type ExamTimerPropType = {
  duration: number | undefined;
  setExamTimeEnd: React.Dispatch<SetStateAction<boolean>>;
};

export default function ExamTimer({
  duration = 25,
  setExamTimeEnd,
}: ExamTimerPropType) {
  // State
  const [timer, setTimer] = useState(duration);

  // Refs
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Effects
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          setExamTimeEnd(true);

          if (intervalRef.current) clearInterval(intervalRef.current);

          return 0;
        }

        return prev - 1;
      });
    }, 1000 * 60);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [setExamTimeEnd]);

  return (
    <div className="timer">
      <ChartRadialText timer={timer} duration={duration} />
    </div>
  );
}
