import React from "react";
import { Spinner } from "../ui/spinner";

export default function LoadingComponent() {
  return (
    <h4 className="font-semibold text-main text-xl md:text-2xl animate-pulse flex gap-2.5 items-center my-4">
      <Spinner className="size-6" />
      <span>Loading...</span>
    </h4>
  );
}
