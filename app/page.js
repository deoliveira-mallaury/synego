import HomePage from "@/app/homepage/page";
import Aboutus from "./aboutus/page";
import Coaching from "./coaching/page";
import Formation from "./formation/page";
import Toolbox from './toolbox/page';
import Register from './register/page';
import { Login } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HomePage />
        <Aboutus />
        <Coaching/>
        <Formation/>
        <Toolbox/>
        <Login/>
        <Register/>
      </main>
    </>
  );
}
