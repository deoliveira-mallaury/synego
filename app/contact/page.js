// src/components/HomePage.jsx
"use client";
import { useState } from "react";
import React from "react";
const Contact = () => {
  const [selected, setSelected] = useState("Coaching");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire, domaine choisi : selected
    // fetch("/api/contact", { method: "POST", body: JSON.stringify({ ...form, domaine: selected }) })
    alert(
      `Message envoyé !\nNom: ${form.name}\nMail: ${form.email}\nSujet: ${form.subject}\nDomaine: ${selected}\nMessage: ${form.message}`
    );
  };
  return (
    <div className="w-full flex flex-col md:flex-row overflow-hidden h-[100vh] md:h-[90vh] mb-40 md:mb-0">
      {/* Section info à gauche, occupe 40% largeur en desktop/tablette */}
      <div className="flex md:w-2/6 bg-[#0A1D35] text-[#FDF7EF] px-6 py-16 flex-col justify-center items-center space-y-4">
        <div className="flex flex-col items-center space-y-4 ">
          <div className="w-20 h-20 rounded-full bg-[#E5E5E5] " />
          <h2 className="font-bold font-lg">Tahri Youcef</h2>

          <p className="text-center text-white text-sm md:text-base leading-snug px-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Sed laudantium nihil est culpa cumque excepturi quasi esse nobis
            accusantium dolores!
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 ">
          <h3 className="font-bold font-lg">Coordonnées</h3>
          <p className="">Mail : </p>
          <p className="underline">youcef@synego.fr</p>
          <p className="">WhatsApp : </p>
          <p className="underline">07.82.26.425 </p>
        </div>
      </div>
      <img
        className="wave  md:hidden mt-[-5]  "
        src="/images/wave.svg"
        alt="Synégo logo"
      />

      <section className="bg-[#FDF7EF] flex flex-col items-center py-8 md:py-20 md:w-3/5 mx-auto md:justify-center h-full lg:flex-row lg:items-start">
        {/* Bloc icône en haut sur mobile, à gauche sur lg */}
        <div className="flex justify-center mb-6 lg:mb-0 lg:mr-8 lg:flex-shrink-0">
          <div
            className="rounded-lg p-2 shadow"
            style={{ width: 80, height: 80 }}
          >
            <img
              src="/images/contact.svg"
              alt="Synégo coaching"
              className="w-32 lg:w-50"
            />
          </div>
        </div>

        <form
          className="flex flex-col items-center gap-3 bg-[#FDF7EF] rounded-xl p-4 pb-8 w-full md:w-[90%] shadow-none h-full lg:w-[600px]"
          onSubmit={handleSubmit}
        >
          <h2 className="uppercase font-semibold text-[#0A1D35] text-[13px] tracking-wide mb-1 text-center md:text-left">
            NOUS CONTACTER
          </h2>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Nom utilisateur"
            className="w-full rounded-2xl bg-[#D8E4EF] py-1.5 px-4 text-[13px] font-medium focus:outline-[#6CAED6]"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Mail utilisateur"
            className="w-full rounded-2xl bg-[#D8E4EF] py-1.5 px-4 text-[13px] font-medium focus:outline-[#6CAED6]"
          />
          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="Sujet"
            className="w-full rounded-2xl bg-[#D8E4EF] py-1.5 px-4 text-[13px] font-medium focus:outline-[#6CAED6]"
          />
          {/* Sélecteur Coaching/Formation */}
          <div className="flex w-full bg-[#D8E4EF] rounded-2xl overflow-hidden mt-1">
            <button
              type="button"
              onClick={() => setSelected("Coaching")}
              className={`flex-1 py-1.5 text-[13px] font-semibold transition rounded-l-2xl ${
                selected === "Coaching"
                  ? "bg-[#6CAED6] text-white"
                  : "bg-[#D8E4EF] text-[#0A1D35]"
              }`}
            >
              Coaching
            </button>
            <button
              type="button"
              onClick={() => setSelected("Formation")}
              className={`flex-1 py-1.5 text-[13px] font-semibold transition rounded-r-2xl border-l border-[#B8D3E8] ${
                selected === "Formation"
                  ? "bg-[#6CAED6] text-white"
                  : "bg-[#D8E4EF] text-[#0A1D35]"
              }`}
            >
              Formation
            </button>
          </div>
          <textarea
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={3}
            className="rounded-xl bg-[#D8E4EF] py-1 px-3 text-[12px] font-medium resize-none mt-0"
          />
          <button
            type="submit"
            className="w-full bg-[#0A1D35] text-white rounded-2xl py-2 mt-4 text-[15px] font-semibold shadow hover:bg-[#18324E] transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
