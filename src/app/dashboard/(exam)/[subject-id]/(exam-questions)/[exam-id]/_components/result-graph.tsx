import { DonutChart } from "@/components/ui/donut-chart";
import React from "react";

type ResultGraphPropsType = {
  graphData: {
    name: string;
    count: number | undefined;
  }[];
};

export default function ResultGraph({ graphData }: ResultGraphPropsType) {
  return (
    <div className="result-graph col-span-1 flex flex-col items-center gap-6">

      {/* Donut Chart */}
      <DonutChart
        className="mx-auto"
        data={graphData}
        colors={["green", "red"]}
        category="name"
        value="count"
        showTooltip={false}
      />

      {/* Correct And Incorrect Questions Number */}
      <div className="summary-info flex flex-col gap-2.5">

        {/* Correct Questions Number */}
        <div className="correct flex items-center gap-2.5 text-sm font-medium">
          <span className="block size-4 bg-green-500"></span>
          <span>Correct: {graphData[0].count}</span>
        </div>

        {/* Incorrect Questions Number */}
        <div className="incorrect flex items-center gap-2.5 text-sm font-medium">
          <span className="block size-4 bg-red-500"></span>
          <span>Incorrect: {graphData[1].count}</span>
        </div>
      </div>
    </div>
  );
}
