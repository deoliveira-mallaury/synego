// src/components/HomePage.jsx
import React from "react";
const toolbox = () => {
  return (
    <div className="font-sans mt-20 flex flex-col  text-gray-800 my-35">
      <div className="flex flex-wrap bg-gradient-to-b from-[#f3e8d9] via-[#f3e8d9] via-[60%] to-[#FDF7EF]">
        <div className=" hidden md:flex md:w-[30%] lg:w-[18%] mx-auto  p-20 flex-col items-center space-y-2">
          <img
            className="w-full "
            src="/images/synegoToolpage.svg"
            alt="Synégo logo"
          />
          <p className="text-[#0A1D35] text-xl font-semibold tracking-wide">
            SYNÉGO
          </p>
        </div>
        <div className=" md:w-[70%] lg:w-[80%] ">
          <section className="flex flex-col p-4  h-[15rem] bg-[#0A1D35] text-[#FDF7EF] justify-center items-center">
            <h1 className="font-bold text-lg m-2">Ressources à télécharger</h1>
            <p className="text-center m-2">
              Explorez nos guides pratiques pour enrichir vos connaissances
            </p>
            <button className="flex justify-around md:justify-evenly shadow-sm shadow-[#FDF7EF] outline-1 outline-[#FDF7EF] m-2 rounded-md px-4 py-1.5 md:py-1">
              <img
                className="w-6 my-auto"
                src="/images/download.svg"
                alt="Synégo logo"
              />
              Télécharger
            </button>
          </section>
          <img className="wave" src="/images/wave.svg" alt="Synégo logo" />
          <section className="flex items-center justify-evenly lg:justify-center lg:gap-10 mt-[-15%] lg:mt-[-10%]">
            <div className="flex flex-col items-center rounded-lg h-[15rem] bg-[#FAF0E6] justify-evenly w-[40%] md:w-[35%] lg:w-[20%] text-center ">
              <img
                className="w-14 my-auto"
                src="/images/pdfcommunication.svg"
                alt="Synégo logo"
              />
              <div className="flex flex-col w-full space-y-2">
                <h2 className="font-semibold text-md">
                  Améliorer sa communication
                </h2>
                <p className="text-sm">textextextext</p>
                <p className="font-semibold text-md">gratuit</p>
                <button className="flex justify-center  items-center gap-2 bg-[#D9C9B4] shadow-sm shadow-[#FDF7EF] outline-1 outline-[#FDF7EF] rounded-md px-4 py-2">
                  <img
                    className="w-6"
                    src="./images/decouvrir.svg"
                    alt="Synégo logo"
                  />
                  <span>Découvrir</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg h-[15rem] bg-[#FAF0E6] justify-evenly w-[40%] md:w-[35%] lg:w-[20%] text-center ">
              <img
                className="w-14 my-auto"
                src="/images/pdfmotivation.svg"
                alt="Synégo logo"
              />
              <div className="flex flex-col w-full  space-y-2">
                <h2 className="font-semibold text-md mx-2">
                  Motivation profonde
                </h2>
                <p className="text-sm">textextextext</p>
                <p className="font-semibold text-md">gratuit</p>
                <button className="flex justify-center  items-center gap-2 bg-[#D9C9B4] shadow-sm shadow-[#FDF7EF] outline outline-1 outline-[#FDF7EF] rounded-md px-4 py-2">
                  <img
                    className="w-6"
                    src="./images/decouvrir.svg"
                    alt="Synégo logo"
                  />
                  <span>Découvrir</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="flex flex-wrap flex-row justify-evenly mt-4">
        <aside className="w-[25%] lg:w-[15%] space-y-4 hidden md:block">
          <div className="flex flex-col items-center bg-[#D0E7F5] rounded-lg text-center space-y-2 p-4">
            <h3 className="">FORMATION</h3>
            <p className="">Découvrez notre programme</p>
            <p className="">Accès immédiat aux ressources</p>
            <button className="bg-[#6CAED6] flex items-center justify-center gap-2 px-4 py-2 rounded-[0.9375rem] text-[#FDF7EF] hover:bg-blue-700 transition w-[9rem] h-[2.5625rem]">
              <img
                src="./images/diploma.svg"
                alt="Calendar icon"
                className="w-15"
              />
              <span className="text-[1rem] font-semibold leading-[1.25rem]">
                Parcourir
              </span>
            </button>
          </div>
          <div className="flex flex-col items-center bg-[#D0E7F5] rounded-lg text-center space-y-2 p-4">
            <h3 className="">COACHING</h3>
            <p className="">Réserver votre appel coaching </p>
            <p className="">Accès immédiat aux ressources</p>
            <button className="bg-[#6CAED6] flex items-center justify-center gap-2 px-4 py-2 rounded-[0.9375rem] text-[#FDF7EF] hover:bg-blue-700 transition w-[9rem] h-[2.5625rem]">
              <img
                src="/images/Calendar.svg"
                alt="Calendar icon"
                className="w-15 "
              />
              <span className="text-[1rem] font-semibold leading-[1.25rem]">
                Réserver
              </span>
            </button>
          </div>
        </aside>
        
        <aside className="flex flex-row flex-wrap justify-between lg:justify-normal gap-6 w-[70%] lg:w-[80%] space-y-4">
          <div className="flex justify-evenly text-center w-full  md:w-[48%] h-50 shadow-[0_4px_4px_#D0E7F5,0_-4px_4px_#D0E7F5,4px_0_4px_#D0E7F5,-4px_0_4px_#D0E7F5]">
            <img
              className="w-[20%]"
              src="/images/form1img.svg"
              alt="Synégo logo"
            />
            <div className="flex flex-col items-center justify-around w-[40%] py-2 space-y-2">
              <h3 className="font-bold font-md">Améliorer sa communication</h3>
              <p className="">Texte descriptif du pdf téléchargeable</p>
              <button className="flex justify-evenly bg-[#6CAED6] text-[#FDF7EF] lg:w-35 m-2 md:mx-auto  rounded-md py-1.5">
                <img
                  className="w-6 "
                  src="/images/download.svg"
                  alt="Synégo logo"
                />
               <span>Télécharger</span> 
              </button>
            </div>
          </div>
          <div className="flex justify-evenly text-center w-full md:w-[48%] h-50 shadow-[0_4px_4px_#D9C9B4,0_-4px_4px_#D9C9B4,4px_0_4px_#D9C9B4,-4px_0_4px_#D9C9B4]">
            <div className="flex flex-col items-center justify-around w-[40%] py-2 space-y-2">
              <h3 className="font-bold font-md">Améliorer sa communication</h3>
              <p className="">Texte descriptif du pdf téléchargeable</p>
              <button className="flex justify-evenly bg-[#6CAED6] text-[#FDF7EF] lg:w-35 m-2 md:mx-auto  rounded-md py-1.5">
                <img
                  className="w-6"
                  src="/images/download.svg"
                  alt="Synégo logo"
                />
               <span>Télécharger</span> 
              </button>
            </div>
            <img
              className="w-[20%]"
              src="/images/form2img.svg"
              alt="Synégo logo"
            />
          </div>
        </aside>
      </section>
      
    </div>
  );
};

export default toolbox;
