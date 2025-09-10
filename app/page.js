import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/components/homepage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header className="z-40" />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HomePage/>
      </main>
      <Footer />
    </div>
  );
}
