"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingProductCard from "@/app/products/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

async function deleteToken(
  pathname: string,
  setError: (msg: string) => void,
  setLoading: (loading: boolean) => void,
) {
  setLoading(true);
  try {
    const res = await fetch("/api/delete-token", {
      method: "GET",
    });
    if (res.ok) {
      window.location.href = pathname;
    } else {
      setError("Failed to refresh token");
    }
  } finally {
    setLoading(false);
  }
}

export default function RefreshToken() {
  const pathname = usePathname();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    deleteToken(pathname, setError, setLoading);
  }, [pathname]);

  const handleResetClick = () => {
    deleteToken(pathname, setError, setLoading);
  };
  return (
    <>
      {!error ? (
        <LoadingProductCard />
      ) : (
        <>
          <div className="w-full bg-slate-50 py-40 text-center">
            <h3 className="font-thin text-red-600">Sorry, No Access token.</h3>
            <p>
              <small>{error}</small>
            </p>
              <button
                className="btn-primary group m-3"
                onClick={handleResetClick}
                disabled={loading}
              >
                {loading ? "Loading..." : "Try again"}
                <FontAwesomeIcon
                  icon={faRefresh}
                  className="my-auto ml-2 group-hover:rotate-90"
                />
              </button>
            </div>
        </>
      )}
    </>
  );
}
