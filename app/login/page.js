"use client";
import { useState, useRef } from "react";

// Palette centralisée
const theme = {
  primary: "#ED2553",
  background: "bg-white",
  input: "bg-transparent",
  border: "border-gray-200",
  label: "text-gray-800",
  overlay: "bg-gradient-to-br from-pink-400 via-fuchsia-400 to-blue-500",
  boxShadow: "shadow-xl",
};

export default function AuthPage() {
  const [showRegister, setShowRegister] = useState(false);
  const btnRipple = useRef(null);
  const handleSwitch = () => setShowRegister((v) => !v);
  const ripple = (e) => {
    const btn = e.currentTarget;
    const span = document.createElement("span");
    span.className =
      "absolute rounded-full bg-pink-500 opacity-30 pointer-events-none animate-scaleout";
    span.style.left = e.nativeEvent.offsetX + "px";
    span.style.top = e.nativeEvent.offsetY + "px";
    span.style.width = span.style.height = "300px";
    btn.appendChild(span);
    setTimeout(() => span.remove(), 500);
  };
  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center ${theme.overlay} relative`}
    >
      <div className="materialContainer w-full max-w-md relative">
        {/* Connexion */}
        <div
          className={`transition-all duration-500 ${
            theme.background
          } p-12 pt-10 rounded-xl relative z-20 ${
            showRegister ? "scale-95 -top-4 opacity-80" : ""
          } ${theme.boxShadow}`}
        >
          <div
            className="title text-4xl font-bold mb-6 relative tracking-wide"
            style={{ color: theme.primary }}
          >
            Connexion
            <span
              className="absolute left-[-30px] top-0 h-full w-1.5 rounded"
              style={{ background: theme.primary }}
            ></span>
                  <button
          onClick={handleSwitch}
          className={`material-button absolute right-[-4rem] top-[-10] z-40 ${
            showRegister ? "hidden" : ""
          } bg-pink-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition`}
        >
          <span
            className="shape w-8 h-1 bg-white absolute left-1/2 top-1/2"
            style={{ transform: "translate(-50%,-50%) rotate(0deg)" }}
          ></span>
          <span
            className="shape h-8 w-1 bg-white absolute left-1/2 top-1/2"
            style={{ transform: "translate(-50%,-50%) rotate(0deg)" }}
          ></span>
        </button>
          </div>
          <form>
            <div className="input mt-6 relative">
              <label
                htmlFor="login-user"
                className={`${theme.label} text-lg font-light absolute top-3 left-0 transition-all pointer-events-none`}
              >
                Pseudo
              </label>
              <input
                autoComplete="username"
                type="text"
                id="login-user"
                name="login-user"
                className={`block w-full pl-0 pt-7 pb-2 border-b-2 ${theme.border} focus:outline-none text-2xl font-light ${theme.input} focus:border-pink-500 transition`}
              />
              <span className="spin absolute left-0 bottom-0 h-0.5 w-0 bg-pink-500 transition-all duration-300 group-focus-within:w-full"></span>
            </div>
            <div className="input mt-8 relative">
              <label
                htmlFor="login-pass"
                className={`${theme.label} text-lg font-light absolute top-3 left-0 transition-all pointer-events-none`}
              >
                Mot de passe
              </label>
              <input
                autoComplete="current-password"
                type="password"
                id="login-pass"
                name="login-pass"
                className={`block w-full pl-0 pt-7 pb-2 border-b-2 ${theme.border} focus:outline-none text-2xl font-light ${theme.input} focus:border-pink-500 transition`}
              />
            </div>
            <div className="button login mt-10 w-2/3 mx-auto relative overflow-hidden">
              <button
                type="submit"
                className="relative group w-full border-2 border-gray-300 py-3 rounded font-bold text-xl text-gray-600 hover:text-pink-500 hover:border-pink-500 transition"
                onClick={ripple}
              >
                <span>Connexion</span>
                <i className="fa fa-check ml-2"></i>
              </button>
            </div>
          </form>
          <a
            href="#"
            className="pass-forgot block w-full text-center mt-6 text-gray-400 text-lg"
          >
            Mot de passe oublié?
          </a>
        </div>

        {/* Overlay register */}
        <div
          className={`overbox absolute top-0 left-0 w-full h-full p-12 pt-10 transition-all duration-500 ${
            showRegister
              ? "opacity-100 z-30"
              : "opacity-0 pointer-events-none z-0"
          } flex flex-col items-center bg-pink-600/90 rounded-xl`}
        >
          <div
            className={`material-button alt-2 absolute top-5 right-[-60px] w-36 h-36 bg-pink-500 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500`}
            onClick={handleSwitch}
            tabIndex={0}
          >
            <span
              className="shape w-12 h-1 bg-white absolute left-1/2 top-1/2"
              style={{ transform: "translate(-50%,-50%) rotate(0deg)" }}
            ></span>
            <span
              className="shape h-12 w-1 bg-white absolute left-1/2 top-1/2"
              style={{ transform: "translate(-50%,-50%) rotate(0deg)" }}
            ></span>
          </div>
          <div className="title text-4xl font-bold mb-6 relative tracking-wide text-white">
            Inscription
            <span className="absolute left-[-30px] top-0 h-full w-1.5 rounded bg-white"></span>
          </div>
          <form>
            <div className="input mt-6 relative">
              <label
                htmlFor="register-username"
                className="text-white text-lg font-light absolute top-3 left-0 transition-all pointer-events-none"
              >
                Pseudo
              </label>
              <input
                type="text"
                autoComplete="username"
                id="register-username"
                name="register-username"
                className="block w-full pt-7 pb-2 border-b-2 border-white focus:outline-none text-2xl font-light bg-transparent text-white focus:border-pink-200 transition"
              />
            </div>
            <div className="input mt-8 relative">
              <label
                htmlFor="register-pass"
                className="text-white text-lg font-light absolute top-3 left-0 transition-all pointer-events-none"
              >
                Mot de passe
              </label>
              <input
                type="password"
                autoComplete="new-password"
                id="register-pass"
                name="register-pass"
                className="block w-full pt-7 pb-2 border-b-2 border-white focus:outline-none text-2xl font-light bg-transparent text-white focus:border-pink-200 transition"
              />
            </div>
            <div className="input mt-8 relative">
              <label
                htmlFor="register-pass-repeat"
                className="text-white text-lg font-light absolute top-3 left-0 transition-all pointer-events-none"
              >
                Confirmer mot de passe
              </label>
              <input
                type="password"
                autoComplete="new-password"
                id="register-pass-repeat"
                name="register-pass-repeat"
                className="block w-full pt-7 pb-2 border-b-2 border-white focus:outline-none text-2xl font-light bg-transparent text-white focus:border-pink-200 transition"
              />
            </div>
            <div className="button mt-10 w-full relative overflow-hidden">
              <button
                type="submit"
                className="relative w-full border-2 border-white py-3 rounded font-bold text-xl text-white bg-pink-700 hover:bg-white hover:text-pink-700 transition"
                onClick={ripple}
              >
                <span>Valider</span>
              </button>
            </div>
          </form>
        </div>
  
      </div>
      <style jsx global>{`
        @keyframes scaleout {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
        .animate-scaleout {
          animation: scaleout 0.5s linear forwards;
        }
      `}</style>
    </div>
  );
}
