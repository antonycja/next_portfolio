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

  const sections = [
    { id: 'Home', title: 'Home' },
    { id: 'About', title: 'About' },
    { id: 'Projects', title: 'Projects' },
    { id: 'Contact Me', title: 'Contact Me' }
    // Add more sections as needed
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Antony M | Web Dev</title>
        <meta name="description" content="My portfolio website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>
      </head>

      <body className={poppins.className}>
        <Navbar Contents={Contents} active={active} sections={sections} />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
