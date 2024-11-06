"use client"
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/navbar"
import Contents from "@/constants/data.js";
import "../styles/global.css"
const poppins = Poppins({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"]
});
import { useState, useEffect, useRef } from 'react';

export default function RootLayout({ children }) {
  const [active, setActive] = useState("Home");
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.screenY;

      sectionsRef.current.forEach((section) => {
        const { top, height, id } = section.getBoundingClientReact();

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(id);
        }
      })
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);



  return (
    <html lang="en">
      <head>
        
      </head>

      <body className={poppins.className}>
        <Navbar Contents={Contents} active={active} sections={Contents.nav.sections} />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
