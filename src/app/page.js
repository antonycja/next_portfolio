import HeroSection from "@/sections/heroSection/heroPage.js";
import AboutSection from "@/sections/aboutSection/aboutPage.js";
import ProjectsSection from "@/sections/projectsSection/projectsPage.js";
import Contents from "@/constants/data.js";


export default function Home() {
  return (
    <>
      <section id="Home">
        <HeroSection heroData={Contents.hero} />
      </section>


      <section id="About">
        <AboutSection aboutData={Contents.about} />
      </section>
      <section id="Projects">
        <ProjectsSection />
      </section>
    </>
  );
}
