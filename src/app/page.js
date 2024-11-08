
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
          <div className='temp'>
            <h1>This Page is under Construction... <span style={{ fontSize: 2 + 'rem' }}>&#129379;</span></h1>
            <div>
              <LottieAnimation />
            </div>
            {/* <span style={{ fontSize: 100 + 'px' }}>&#129379; &#127859;</span> */}
            <h3>In the meantime, email me at: <a href="mailto:cjamaposa@gmail.com">cjamaposa@gmail.com</a></h3>
          </div>

          {/* <ContactSection /> */}
        </section>
      </Suspense>
      <Footer />
    </>
  );
}
