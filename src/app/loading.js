import React from "react";
import NextTopLoader from "nextjs-toploader";

export default function Loading() {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <NextTopLoader />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
