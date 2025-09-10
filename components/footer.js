import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#0a1d35] p-4 border-t mt-5 text-[#FDF7EF] relative h-24">
        <p className="absolute bottom-4 left-1/2 w-100 text-center text-xs transform -translate-x-1/2">
          © 2025 Synégo. Tous droits réservés.
        </p>
      </footer>
    </>
  );
};

export default Footer;
