import ContactForm from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "./navbar/page";
import Projects from "@/components/projects";
import SkillsSection from "@/components/skill";
import Footer from "./footer/page";
 

 
export default function Home() {
  return (
     <div>
       <Navbar />
       <Hero />
      <Projects />
      <SkillsSection />
      <ContactForm />
      <Footer />
     </div>
  );
}
