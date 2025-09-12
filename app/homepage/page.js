// src/components/HomePage.jsx
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const HomePage = () => {
  return (
    <div className="font-sans mt-20 bg-[#FDF7EF] text-gray-800">
      <div className="bg-[#0A1D35] py-7 px-4 lg:h-[60vh]">
        <h1 className="text-3xl text-[#FDF7EF] font-bold text-center mb-8">
          SYNÉGO
        </h1>
        <section className="bg-[#D0E7F5] md:bg-[#0A1D35] rounded-[10px] w-full max-w-8xl mx-auto flex flex-col md:flex-row items-stretch px-6 md:px-8 py-8 gap-6">
          <div className="flex-1 flex flex-col justify-between text-center ">
            <div>
              <div className="w-full h-48 lg:h-80 bg-gray-100 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">Résumé vidéo</span>
              </div>
              <p className="text-base mb-4 px-2 md:px-0 text-[#0A1D35] md:hidden">
                Lorem ipsum, dolor sit amet, consectetur adipiscing elit. Sed
                laudantium nihil sit culpa cumque excepturi quasi est nobis
                exercitationem dolorum!
              </p>
            </div>
            <button className="bg-[#6CAED6] text-[#FDF7EF] py-2 px-6 rounded-[15px] hover:bg-blue-700 transition w-fit mx-auto md:mb-20">
              En savoir plus
            </button>
          </div>
          <div className="flex-1 flex-col justify-between items-center hidden md:flex">
            <div className="w-full h-48 flex items-center justify-center">
              <img
                src="./images/cercle.webp"
                alt="Synégo coaching"
                className="w-32 lg:w-50"
              />
            </div>
            <p className="text-base px-2 md:px-0 lg:px-[10%] text-[#0A1D35] mb-14 md:text-[#FDF7EF] text-center ">
              Lorem ipsum, dolor sit amet, consectetur adipiscing elit. Sed
              laudantium nihil sit culpa cumque excepturi quasi est nobis
              exercitationem dolorum!
            </p>
          </div>
        </section>
      </div>
      <img className="wave" src="./images/wave.svg" alt="Synégo logo" />
      <div className="md:flex hidden">
        <KeyboardArrowDownIcon
          className="mx-auto mt-[-50] "
          sx={{ fontSize: "4rem", color: "#0A1D35", cursor: "pointer" }}
        />
      </div>
      <section className="py-10 px-6 lg:mt-20 bg-[#FDF7EF] ">
        <div className="flex justify-center gap-[2%] flex-wrap">
          {/* COACHING */}
          <div className="bg-[url(/images/coachingMobile.svg)] h-100 w-[49%] lg:w-[24%] md:bg-[url(/images/coachingMd.svg)] md:h-65 rounded-2xl bg-cover flex flex-col items-center justify-center pt-40 md:pt-0 md:pl-50">
            <h2 className="text-[1rem] md:my-2 font-semibold text-[#0A1D35] leading-[1.25rem] mb-2">
              COACHING
            </h2>
            <p className="text-[1rem] my-6 text-[#0A1D35] text-center mb-4 w-[7.5rem] leading-[1.25rem]">
              Réservez votre appel coaching
            </p>
            <button className="bg-[#6CAED6] my-5 flex items-center justify-center gap-2 px-4 py-2 rounded-[0.9375rem] text-[#FDF7EF] hover:bg-blue-700 transition w-[9rem] h-[2.5625rem]">
              <img
                src="./images/Calendar.svg"
                alt="Calendar icon"
                className="w-[2.1875rem] h-[2.125rem]"
              />
              <span className="text-[1rem] font-semibold leading-[1.25rem]">
                Réserver
              </span>
            </button>
          </div>
          <div className="bg-[url(/images/formationMobile.svg)] h-100 w-[49%] lg:w-[24%] md:bg-[url(/images/formationmd.svg)] md:h-65 rounded-2xl bg-cover flex flex-col items-center justify-center pt-40 md:pt-0 md:pl-50">
            <h2 className="text-[1rem] md:my-2 font-semibold text-[#0A1D35] leading-[1.25rem] mb-2">
              FORMATION
            </h2>
            <p className="text-[1rem] my-4 text-[#0A1D35] text-center mb-4 w-[7.5rem] leading-[1.25rem]">
              Découvrez notre programme
            </p>
            <button className="bg-[#6CAED6] my-4 flex items-center justify-center gap-2 px-4 py-2 rounded-[0.9375rem] text-[#FDF7EF] hover:bg-blue-700 transition w-[9rem] h-[2.5625rem]">
              <img
                src="./images/diploma.svg"
                alt="Calendar icon"
                className="w-[2.1875rem] h-[2.125rem]"
              />
              <span className="text-[1rem] font-semibold leading-[1.25rem]">
                Parcourir
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Section Accès Téléchargement */}
      <section className="bg-[#D0E7F5] w-[90%] md:w-[70%] lg:w-[30%] mx-auto rounded-[10px] border-3 border-[#0A1D35] py-5 px-6 md:px-20 text-center">
        <div className="flex">
          <img
            className="w-6 md:w-10 md:h-10 h-6 my-auto"
            src="./images/download.svg"
            alt="Synégo logo"
          />
          <h2 className="text-xl text-center font-semibold px-8">
            ACCÈS AU CONTENUS TÉLÉCHARGEABLE
          </h2>
          <img
            className="w-6 md:w-10 md:h-10 h-6 my-auto"
            src="./images/fav.svg"
            alt="Synégo logo"
          />
        </div>
        <p className="mb-2">Réservé aux membres inscrits</p>
        <p className="mb-6">
          Profitez de ressources exclusives, conçues spécifiquement pour
          répondre à votre besoin.
        </p>
        <button className="bg-[#0A1D35] font-bold text-[#FDF7EF] px-6 py-2 rounded-[10px] hover:bg-[#6CAED6] hover:border-2 hover:border-[#0A1D35] transition">
          Se connecter pour accéder
        </button>
      </section>
    </div>
  );
};

export default HomePage;
