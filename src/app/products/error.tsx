"use client";

import ErrorButton from "@/components/common/error-reset";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="w-full bg-slate-50 py-40 text-center">
        <h3 className="font-thin text-red-600">Error Product</h3>
        <p>
          <small>Could not find requested resource</small>
        </p>
        <ErrorButton reset={reset} />
      </div>
    </>
  );
}
