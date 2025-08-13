import Navbar from "../Header";
import Footer from "../Footer";
import type { ReactNode } from "react";

interface LayoutComponentsProps {
  children: ReactNode;
}

export default function LayoutComponents({
  children}: LayoutComponentsProps) {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-[url('/bg_art.png')]  bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(28, 28, 42, 0.8), rgba(46, 41, 132, 0.8)), url('/bg_art.png')",
        backgroundBlendMode: "multiply",
      }}
    >
      <Navbar />
      <main className="flex-1 flex-col w-full flex items-center justify-center p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
