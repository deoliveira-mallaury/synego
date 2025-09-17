import HomePage from "@/app/homepage/page";
import Aboutus from "./aboutus/page";
import Coaching from "../components/Coaching";
import Formation from "../components/Formation";
import Toolbox from "./toolbox/page";
import Register from "./register/page";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
         <HomePage />

      </main>
    </>
  );
}
