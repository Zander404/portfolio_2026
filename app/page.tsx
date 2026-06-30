import NavBar from "@/components/navbar";
import { HeroSection } from "./sections/hero";
import AboutMe from "./sections/about_me";
import { Text } from "@/components/retroui/Text";
import Services from "./sections/services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <NavBar />

      <main className="flex flex-col items-center justify-center w-full max-w-[95%] min-h-screen bg-background m-4">

        {/* APRESENTAÇÂO */}
        <section id="home" className="w-full h-[80vh]  text-center" >
          <HeroSection />
        </section>


        <section id="services" className="w-full min-h-[55vh]">
          <Services />
        </section>


        <section id="about_me" className=" w-full min-h-[80%]">
          <AboutMe />
        </section>

        <section id="projects">
        </section>


        <section id="contact_us">
        </section>




      </main>
    </div>
  );
}
