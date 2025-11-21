"use client";
import { useOverlay } from '../app/overlayContext'



export default function Overlay() {
  const { visible, setVisible } = useOverlay();

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={() => setVisible(false)}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Ici ta fenêtre modale personnalisée */}
        <div className="bg-white rounded-xl p-10 max-w-md w-full shadow-lg relative z-50">
          <h2 className="text-2xl font-bold mb-4">Connexion / Inscription</h2>
          {/* Contenu du formulaire ou composant */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
      </div>
    </>
  );
}
