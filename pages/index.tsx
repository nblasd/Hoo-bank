import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Firstpage from "@/components/Firstpage";
import Secondpage from "@/components/Secondpage";
import Thirdpage from "@/components/Thirdpage";
import Fourpage from "@/components/Fourpage";
import Fifthpage from "@/components/Fifthpage";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Firstpage/>
      <Secondpage/>
      <Thirdpage/>
      <Fourpage/>
      <Fifthpage/>
       <Footer/>
    </main>
  );
}
