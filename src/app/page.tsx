 
import Image from "next/image";
 import About from "@/components/about";
 import Contact from "./contact/page";
 
import Footer from "@/components/footer";
 
 

export default function Home() {
  return (
   <div>
      <About />
    <Contact />
    
     <Footer />
      
   </div>
  );
}
