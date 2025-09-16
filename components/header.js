"use client";
import { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Accueil", href: "/" },
  { name: "A propos de nous", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Boîte à outils", href: "/boite-outils" },
  { name: "Nous contacter", href: "/contact" },
  { name: "Connexion", href: "/login" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const handleToggleMenu = () => {
    if (open) {
      setAnimateOut(true);
      setTimeout(() => {
        setOpen(false);
        setAnimateOut(false);
      }, 900);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center bg-[#FDF7EF] justify-between px-5 py-3 border-b rounded-b-lg shadow">
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row items-center w-[15%] ">
            <img
              className="w-15 my-auto"
              src="/images/logo.svg"
              alt="Synégo logo"
            />
            <Link href={"/"} className="text-[#0A1D35] text-xl font-semibold tracking-wide ml-2">
            SYNÉGO
            </Link>
            {/* <span className="">
              
            </span> */}
          </div>
          <div className="flex lg:w-[85%] justify-between my-auto">
            <div className="hidden lg:flex space-x-8 mt-3 md:mt-0">
              {pages.slice(0, 5).map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="text-[#0A1D35] hover:text-[#6CAED6] transition"
                >
                  {page.name}
                </Link>
              ))}
            </div>
            <div className="flex w-full lg:hidden">
              <button
                onClick={handleToggleMenu}
                className="ml-auto w-10 h-10 flex items-center justify-center border-2 border-[#0A1D35] rounded-full"
                aria-label={
                  open ? "Fermer le menu mobile" : "Ouvrir le menu mobile"
                }
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
            <div className="hidden md:flex lg:m-0 md:ml-2 items-center h-[2rem] sm:m-auto">
              <Link
                href={pages[pages.length - 1].href}
                className="text-[#0A1D35] transition border rounded-lg border-[#0A1D35] px-5 "
              >
                {pages[pages.length - 1].name}
              </Link>
            </div>
          </div>
        </div>
        {open && (
          <div
            className="fixed top-21 left-0 flex flex-col w-full h-[85vh] bg-[#6CAED6] z-40 overflow-y-auto"
            style={{
              animationName: !animateOut ? "menu-anim" : "menu-anim-reverse",
              animationDuration: "900ms",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
            }}
          >
            <ul className="flex flex-col w-full items-center gap-6 font-bold text-lg text-center mt-[100px] text-[#FDF7EF]">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    onClick={handleToggleMenu}
                    className="relative inline-block px-4 py-2 no-underline hover:underline"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {(open || animateOut) && (
        <div
          className={`fixed top-25 z-20 left-0 flex flex-col w-full h-3/4 bg-[#6CAED6] overflow-hidden`}
          style={{
            animationName:
              open && !animateOut
                ? "menu-anim"
                : animateOut
                ? "menu-anim-reverse"
                : "none",
            animationDuration: "900ms",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          }}
        >
          <ul className="flex flex-col w-full items-center gap-6 font-bold text-lg text-center mt-[100px] p-0 list-none text-[#FDF7EF]">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.href}
                  onClick={handleToggleMenu}
                  className="relative inline-block px-4 py-2 no-underline hover:underline"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style jsx global>{`
        @keyframes menu-anim {
          0% {
            left: 0;
            bottom: -99%;
            width: 0;
          }
          33% {
            left: -99.5%;
            bottom: -99%;
            width: 80%;
          }
          66% {
            left: -99.5%;
            bottom: 0;
            width: 60%;
          }
          100% {
            bottom: 0;
            left: 0;
            width: 100%;
          }
        }
        @keyframes menu-anim-reverse {
          0% {
            bottom: 0;
            left: 0;
            width: 100%;
          }
          33% {
            left: -99.5%;
            bottom: 0;
            width: 80%;
          }
          66% {
            left: -99.5%;
            bottom: -99%;
            width: 60%;
          }
          100% {
            left: 0;
            bottom: -99%;
            width: 0;
          }
        }
      `}</style>
    </>
  );
}
