import { HeroSection } from "./sections/hero";
import { ExperienceSection } from "./sections/experience";
import { ServicesSection } from "./sections/services";
import { AboutMeSection } from "./sections/about_me";
import { ProjectSection } from "./sections/projects";
import ContactSection from "./sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">

      <main className="flex flex-col items-center justify-center w-full max-w-[95%] min-h-screen bg-background m-4 gap-12">

        {/* APRESENTAÇÂO */}
        <section id="home" className="w-full h-[80vh] text-center scroll-mt-20" >
          <HeroSection />
        </section>


        <section id="services" className="w-full min-h-[55vh] scroll-mt-20">
          <ServicesSection />
        </section>


        <section id="about_me" className=" w-full min-h-[80%] scroll-mt-20">
          <AboutMeSection />
        </section>


        <section id="profissional_experience" className="w-full min-h-[80%] scroll-mt-20">
          <ExperienceSection />
        </section>


        <section id="projects" className="w-full min-h[80%] scroll-mt-20">
          <ProjectSection />
        </section>

      </main>
      <section id="contact_us" className="w-full min-h-[80vsh] scroll-mt-20">
        <ContactSection />
      </section>

    </div>
  );
}
