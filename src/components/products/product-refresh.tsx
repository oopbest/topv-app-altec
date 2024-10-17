"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function ButtonRefreshToken() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const handleDeleteToken = async () => {
    setLoading(true);
    try {
      // ส่งคำขอ GET เพื่อเรียก route ลบ token
      const res = await fetch("/api/delete-token", {
        method: "GET",
      });

      if (res.ok) {
        window.location.href = pathname;
      } else {
        console.error("Failed to delete token");
      }
    } catch (error) {
      console.error("Error deleting token:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="btn-primary group border-none bg-primary text-white"
        onClick={handleDeleteToken}
        disabled={loading}
      >
        <Link href="/products" className="flex">
          {loading ? "Loading..." : "Refresh"}
          <FontAwesomeIcon
            icon={faRefresh}
            className="my-auto ml-2 group-hover:rotate-90"
          />
        </Link>
      </button>
    </>
  );
}
