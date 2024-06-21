import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar"
import "../styles/global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Antony M | Web Dev",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
