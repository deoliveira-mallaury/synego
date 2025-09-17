"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import Coaching from './../../../components/Coaching';
import Formation from './../../../components/Formation';

const ServicesPage = () => {
  const { tab } = useParams();
  const router = useRouter();

  const handleTabChange = (newTab) => {
    router.push(`/services/${newTab}`);
  };

  return (
    <div className="font-sans mt-20 bg-[#FDF7EF] text-gray-800">
      <div className="flex justify-center flex-row flex-wrap">
        <h1 className="text-lg font-bold text-center w-full mt-4">SERVICES</h1>

        <button
          onClick={() => handleTabChange("coaching")}
          className={`px-3 w-[25%] md:w-[15%] py-2 md:py-1 my-4 md:my-5 rounded-l-lg ${
            tab === "coaching" ? "bg-[#6CAED6] text-[#FDF7EF]" : "bg-[#D0E7F5]"
          }`}
        >
          COACHING
        </button>

        <button
          onClick={() => handleTabChange("formation")}
          className={`px-3 w-[25%] md:w-[15%] py-2 md:py-1 my-4 md:my-5 rounded-r-lg ${
            tab === "formation" ? "bg-[#6CAED6] text-[#FDF7EF]" : "bg-[#D0E7F5]"
          }`}
        >
          FORMATION
        </button>
      </div>

      <div className="pt-6">
        {tab === "coaching" && <Coaching />}
        {tab === "formation" && <Formation />}
        {!["coaching", "formation"].includes(tab) && <Coaching />}
      </div>
    </div>
  );
};

export default ServicesPage;
