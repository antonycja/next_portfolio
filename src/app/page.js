import HeroSection from "@/sections/heroSection/heroPage.js";
import Contents from "@/constants/data.js";


export default function Home() {
  return (
    <>
      <section id="Home">
        <HeroSection heroData= {Contents.hero}/>
      </section>


      <section id="About">
        <h1>Hello from section 2</h1>
      </section>
    </>
  );
}
