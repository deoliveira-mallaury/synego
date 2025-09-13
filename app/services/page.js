// src/components/HomePage.jsx
import Link from "next/link";
import React from "react";
const Services = () => {
  const pages = [{ name: "Coaching" }, { name: "Formations" }];
  return (
    <div className="font-sans mt-20 bg-[#FDF7EF] text-gray-800">
      <div className="flex justify-center flex-row flex-wrap ">
        <h1 className="text-lg font-bold text-center w-full mt-4">SERVICES</h1>
        <button className="px-3 w-[25%] md:w-[15%] py-2 md:py-1 my-4 md:my-5 rounded-l-lg text-[#FDF7EF] bg-[#6CAED6]">
          <a href="/formation">COACHING</a>
        </button>
        <button className="px-3 w-[25%] md:w-[15%] py-2 md:py-1 my-4 md:my-5 rounded-r-lg  bg-[#D0E7F5]">
          <a href="/formation">FORMATION</a>
        </button>
      </div>
      <div className="flex ">
        <div className="bg-[#D0E7F5] md:bg-[url(/images/imagebanner.svg)] md:text-[#FDF7EF] bg-cover p-3 w-[50%] md:w-[70%] lg:w-[50%]  md:h-85 lg:h-[50vh]">
          <h2 className="m-4 w-[75%] font-bold text-lg">
            VOTRE RENDEZ-VOUS COACHING
          </h2>
          <p className="hidden md:flex m-2 w-60">
            Clarifiez vos objectifs. Transformer votre quotidien
          </p>
          <button className="m-2 md:m-0 md:mt-16 p-2 text-sm rounded-xl bg-[#0A1D35] md:bg-[#6CAED6] text-[#FDF7EF] ">
            Commence ton changement aujourd’hui
          </button>
          <blockquote className="hidden md:flex m-2 mt-4 text-sm text-[#FDF7EF] w-50 font-medium">
            "Une séance avec Youcef m’a permis de débloquer ce qui me freinait
            depuis des mois."
          </blockquote>
        </div>
        <div className="flex w-[50%] items-center justify-center p-8 md:p-0 bg-[#D0E7F5]">
          <img
            className="rounded-full "
            src="./images/coaching.svg"
            alt="Synégo logo"
          />
        </div>
      </div>
      <div className=" md:flex py-4 md:py-0 lg:h-[40vh] mb-20">
        <div className="flex flex-row items-start lg:my-10 justify-evenly md:w-[50%] flex-wrap">
          <div className="w-[40%] lg:w-[50%] px-3 py-6">
            <img
              className="rounded-full mx-auto"
              src="./images/working.svg"
              alt="Synégo logo"
            />
          </div>
          <div className="w-[50%] p-3 ">
            <h3 className=" text-[#D9C9B4] font-bold">
              Réserver une séance de coaching
            </h3>
            <p className="font-bold my-4">1ère séance gratuite</p>
            <p className="">
              présentation séance Exemple: Je vous aide à aligner vos
              aspirations professionnelles et personnelles pour atteindre plus
              de clarté et de bien-être.
            </p>
            <button className="my-4 px-4 py-2 rounded-3xl bg-[#6CAED6] text-[#FDF7EF]">
              En savoir plus
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center py-5 mb-25 md:w-[50%] bg-[#D9C9B4] md:bg-[#FDF7EF] justify-evenly">
          <h4 className="text-center font-bold text-lg w-full">MON APPROCHE</h4>
          <div className="flex justify-between gap-6 px-6 py-8 w-full">
            <div className="flex-1 text-center space-y-4">
              <img
                className="rounded-full mx-auto"
                src="./images/Clarte.svg"
                alt="Synégo logo"
              />
              <h4 className="text-lg font-semibold">Clarté</h4>
              <p className="text-sm">
                Éclairez votre esprit pour mieux comprendre vos objectifs et
                priorités.
              </p>
            </div>

            <div className="flex-1 text-center space-y-4">
              <img
                className="rounded-full mx-auto"
                src="./images/Equilibre.svg"
                alt="Synégo logo"
              />
              <h4 className="text-lg font-semibold">Équilibre</h4>
              <p className="text-sm">
                Harmonisez votre vie professionnelle et personnelle.
              </p>
            </div>

            <div className="flex-1 text-center  space-y-4">
              <img
                className="rounded-full mx-auto"
                src="./images/Croissance.svg"
                alt="Synégo logo"
              />
              <h4 className="text-lg mt-[-14] font-semibold">Croissance</h4>
              <p className="text-sm">
                Évoluez et développez votre plein potentiel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
// src/components/HomePage.jsx
