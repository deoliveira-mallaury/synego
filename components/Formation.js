// src/components/HomePage.jsx
import Link from "next/link";
import React from "react";

const Formation = () => {
  return (
    <div className="">
      <div className="flex font-sans  bg-[#FDF7EF] text-gray-800">
        <div className="bg-[#D0E7F5] md:bg-[url(/images/imagebanner.svg)] md:text-[#FDF7EF] bg-cover p-3 w-[50%] md:w-[70%] lg:w-[50%]  md:h-85 lg:h-[50vh]">
          <h2 className="m-4 w-[75%] font-bold text-lg">FORMATIONS EN LIGNE</h2>
          <p className="hidden md:flex m-2 w-60">
            Développez vos compétences pour avancer dans votre carrière
          </p>
          <button className="m-2 md:m-0 md:mt-16 p-2 text-sm rounded-xl bg-[#0A1D35] md:bg-[#6CAED6] text-[#FDF7EF] ">
            Libère ton potentiel
          </button>
          <blockquote className="hidden md:flex m-2 mt-4 text-sm text-[#FDF7EF] w-50 font-medium">
            "Une séance avec Youcef m’a permis de débloquer ce qui me freinait
            depuis des mois."
          </blockquote>
        </div>
        <div className="flex w-[50%] items-center justify-center p-8 md:p-0 bg-[#D0E7F5]">
          <img
            className="rounded-full "
            src="/images/formation.svg"
            alt="Synégo logo"
          />
        </div>
      </div>
      <div className="flex flex-col  md:flex-row flex-wrap py-4 md:py-0 lg:h-[40vh] ">
        {/* MON APPROCHE — affiché en premier sur mobile, second sur desktop */}
        <section className="flex flex-row flex-wrap items-center order-1 md:order-2 py-5 md:w-[50%]  justify-evenly">
          <h4 className="text-center font-bold text-lg w-full">MON APPROCHE</h4>
          <div className="flex justify-between gap-6 px-6 py-8 w-full">
            <div className="flex-1 text-center space-y-4">
              <img
                className="rounded-full mx-auto"
                src="/images/Clarte.svg"
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
                src="/images/Equilibre.svg"
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
                src="/images/Croissance.svg"
                alt="Synégo logo"
              />
              <h4 className="text-lg mt-[-14] font-semibold">Croissance</h4>
              <p className="text-sm">
                Évoluez et développez votre plein potentiel.
              </p>
            </div>
          </div>
        </section>

        {/* CARTES FORMATIONS — affichées en second sur mobile, premier sur desktop */}
        <div className="flex flex-row items-start justify-evenly order-2 md:order-1 md:w-[50%] flex-wrap">
          <div className="flex flex-row md:flex-row justify-center items-stretch gap-6 px-6 my-10  w-full">
            {/* Formation 1 */}
            <div className="bg-[#D9C9B4] rounded-xl shadow-md w-full md:w-[45%] p-6 flex flex-col justify-between">
              <h3 className="text-[#0A1D35] font-bold text-lg mb-2">
                FORMATIONS 1
              </h3>
              <p className="mb-2">
                Investissez dans votre avenir avec notre formation exclusive.
              </p>
              <p className="font-semibold mb-4">À partir de 250 € par module</p>
              <button className="px-4 py-2 rounded-3xl bg-[#6CAED6] text-[#FDF7EF] w-fit self-center">
                Explorer
              </button>
            </div>

            {/* Formation 2 */}
            <div className="bg-[#D9C9B4] rounded-xl shadow-md w-full md:w-[45%] p-6 flex flex-col justify-between">
              <h3 className="text-[#0A1D35] font-bold text-lg mb-2">
                FORMATIONS 2
              </h3>
              <p className="mb-2">
                Apprenez auprès de formateurs expérimentés.
              </p>
              <p className="font-semibold mb-4">À partir de 250 € par module</p>
              <button className="px-4 py-2 rounded-3xl bg-[#6CAED6] text-[#FDF7EF] w-fit self-center">
                Explorer
              </button>
            </div>
          </div>
        </div>
      </div>
        <section className="bg-[#D0E7F5] order-3 w-[90%] md:w-[70%] lg:w-[60%] mb-40 mx-auto rounded-[10px] border-3 border-[#0A1D35] py-5 px-6 mx-auto text-center">
          <div className="flex justify-evenly">
            <img
              className="w-10 md:w-10 md:h-10 my-auto"
              src="/images/download.svg"
              alt="Synégo logo"
            />
            <h2 className="text-xl text-center font-semibold px-8">
              ACCÈS AU CONTENUS TÉLÉCHARGEABLE
            </h2>
            <img
              className="w-10 md:w-10 md:h-10 my-auto"
              src="/images/fav.svg"
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

export default Formation;
// src/components/HomePage.jsx
