import { lazy, Suspense } from 'react';
import Contents from "@/constants/data.js";

const HeroSection = lazy(() => import("@/sections/heroSection/heroPage.js"));
const AboutSection = lazy(() => import("@/sections/aboutSection/aboutPage.js"));
const ProjectsSection = lazy(() => import("@/sections/projectsSection/projectsPage.js"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Good Things take time...<br/>
      Loading...</div>}>
        <section id="Home">
          <HeroSection heroData={Contents.hero} />
        </section>
        <section id="About">
          <AboutSection aboutData={Contents.about} />
        </section>
        <section id="Projects">
          <ProjectsSection projects={Contents.projects} />
        </section>
      </Suspense>
    </>
  );
}
