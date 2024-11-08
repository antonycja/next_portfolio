
export const metadata = {
  title: 'Antony M | Web Dev',
  description: 'Antony M\'s personal portfolio website for software development projects.',
  openGraph: {
    title: 'Antony M | Web Dev',
    description: 'Personal website showcasing web development skills.',
    url: 'https://antonymapdev.netlify.app/',
  }
}


import { lazy, Suspense } from 'react';
import Contents from "@/constants/data.js";
import Footer from '@/components/footer/footer';
import LottieAnimation from '@/components/envelope/envelope';
const HeroSection = lazy(() => import("@/sections/heroSection/heroPage.js"));
const AboutSection = lazy(() => import("@/sections/aboutSection/aboutPage.js"));
const ProjectsSection = lazy(() => import("@/sections/projectsSection/projectsPage.js"));
const ContactSection = lazy(() => import("@/sections/contactSection/contactPage.js"));



export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Good Things take time...<br />
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
        <section id='Contact'>
          {/* <ContactSection /> */}
        </section>
      </Suspense>
      <Footer />
      <section>
        <LottieAnimation />
      </section>
    </>
  );
}
