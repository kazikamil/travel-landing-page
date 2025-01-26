import Image from "next/image";
import Navbar from "./navbar";
import Header from "./header";
import Services from "./Services";
import Destinations from "./Destinations";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="bg-white relative overflow-hidden flex flex-col space-y-2">
    
      <Navbar></Navbar>
      <div className="absolute right-[-45px] top-[-20px] z-0">
      <img src="Decore.png" className="h-1/4"></img>
      </div>
      <Header></Header>
      <Services></Services>
      <Destinations/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
