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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Antony M | Web Dev</title>
        <meta name="description" content="My portfolio website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>


        {/* JS Deliver */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
        {/* Iconify */}
        <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
      </head>

      <body className={poppins.className}>
        <Navbar Contents={Contents} active={active} sections={Contents.nav.sections} />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
