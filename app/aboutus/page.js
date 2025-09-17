// src/components/HomePage.jsx
import React from "react";
const Aboutus = () => {
  const items = [
    {
      title: "IDENTITÉ",
      description: "Se connaître pour mieux apprendre",
      icon: "coachIcon.svg",
    },
    {
      title: "CONNAISSANCE",
      description: "Comprendre pour réussir",
      icon: "knowledge.svg",
    },
    {
      title: "CLARTÉ",
      description: "Exprimer avec justesse",
      icon: "Comments.svg",
    },
    {
      title: "ÉPANOUISSEMENT",
      description: "Grandir avec confiance",
      icon: "Star.svg",
    },
  ];

  return (
    <div className="font-sans mt-20 md:flex flex-row bg-[#FDF7EF] mb-40 md:mb-0 text-gray-800">
      <div className="flex flex-col md:w-[49%] items-center ">
        <h1 className="text-3xl text-[#0A1D35] w-[80%] p-4 md:m-0 font-bold text-center sm:mx-auto my-auto ">
          Comprendre, grandir, réussir
        </h1>

        <div className="bg-[#D0E7F5] lg:mx-15 mx-auto lg:rounded-2xl">
          {/* Section Youcef */}
          <div className="flex w-[90%] mx-auto p-5 justify-evenly m-6 items-center gap-6 mb-12">
            {/* Placeholder image */}
            <div className="w-32 h-32 bg-gray-300 rounded-2xl mx-auto" />

            {/* Texte */}
            <div className="text-center w-[49%] ">
              <h2 className="text-2xl font-bold text-[#1A1A1A]">Youcef</h2>
              <p className="text-sm text-gray-700 italic mt-1">
                Coach pédagogique & fondateur
              </p>
              <blockquote className="mt-4 text-md text-[#1A1A1A] font-medium">
                “Chaque élève mérite un accompagnement qui révèle son
                potentiel.”
              </blockquote>
            </div>
          </div>

          {/* Section Mission */}
          <div className="bg-[#eff2f1] flex mx-auto p-5 justify-evenly items-center rounded-xl shadow-md">
            {/* placeholder youtube video */}
            <div className="w-50 h-32 bg-gray-300 rounded-2xl mr-5" />
            <div className="text-center w-[45%] mx-auto">
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">
                Notre mission en quelques mots
              </h3>
              <p className="text-gray-700 leading-relaxed">
                présentation de notre mission présentation de notre mission
                présentation de notre mission présentation de notre mission
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:items-center md:w-[49%] lg:w-[40%] lg:m-6 gap-4 p-2 my-4 md:my-0 md:pt-20 pt-4 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[40%] mx-auto text-center rounded-xl shadow-md p-6"
          >
            <img
              src={`/images/${item.icon}`}
              alt="Synégo coaching"
              className="w-14 lg:w-20 mb-4 shadow-md rounded-2xl"
            />
            <h3 className="text-md font-semibold text-[#1A1A1A] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
