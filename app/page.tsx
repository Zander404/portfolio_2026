import { HeroSection } from "./sections/hero";
import { ExperienceSection } from "./sections/experience";
import { ServicesSection } from "./sections/services";
import { AboutMeSection } from "./sections/about_me";
import { ProjectSection } from "./sections/projects";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">

      <main className="flex flex-col items-center justify-center w-full max-w-[95%] min-h-screen bg-background m-4">

        {/* APRESENTAÇÂO */}
        <section id="home" className="w-full h-[80vh]  text-center" >
          <HeroSection />
        </section>


        <section id="services" className="w-full min-h-[55vh]">
          <ServicesSection />
        </section>


        <section id="about_me" className=" w-full min-h-[80%]">
          <AboutMeSection />
        </section>


        <section id="profissional_experience" className="w-full min-h-[80%]">
          <ExperienceSection />
        </section>


        <section id="projects" className="w-full min-h[80%]">
          <ProjectSection />
        </section>


        <section id="contact_us">
        </section>


      </main>

    </div>
  );
}
