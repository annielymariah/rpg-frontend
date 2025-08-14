import Navbar from "../Header";
import Footer from "../Footer";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children}: RootLayoutProps) {
  return (
    <div
      className="flex flex-col w-full min-h-screen max-w-screen bg-[url('/bg_art.png')]  bg-fixed bg-cover bg-center"
      style={{
    backgroundImage: "radial-gradient(var(--chart-3), var(--chart-4)), url('/bg_art.png')",
    backgroundBlendMode: "multiply",
      }}
    >
      <Toaster className="text-white"/>
      <Navbar />
      <main className="flex-1 flex-col w-full flex items-center justify-center my-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
