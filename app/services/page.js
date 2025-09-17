"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectServices = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services/coaching");
  }, [router]);

  return null;
};

export default RedirectServices;
