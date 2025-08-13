import { Github, Instagram, Mail } from "lucide-react";
import LogoUepb from "@/assets/icons/logo-uepb.svg";
import LogoCacc from "@/assets/icons/logo-cacc.svg";
import LogoCurso from "@/assets/icons/logo-curso.svg";
import Logo from "@/assets/icons/logo.svg";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full text-white h-auto bg-gradient-to-b from-black to-[#142927] to-95%  relative overflow-x-hidden rounded-tl-4xl">
      <div className="bg-[#2E1F7A] rounded-tl-4xl z-10 ml-15">
        <section className=" m-3 flex sm:flex-row flex-col justify-evenly px-3">
          <div className="flex flex-col gap-1 max-w-full sm:max-w-1/4">
            <h2 className="text-base font-medium text-[#11C0B8] drop-shadow-lg">
              Sobre Nós
            </h2>
            <p className="text-xs font-light my-1 mb-3 text-justify">
              Este projeto é um oferecimento da Ghost Pipe! Uma equipe de
              estudantes dedicados a produzir soluções de forma open source para
              nossa instituição. Para saber mais, acesse nossas redes sociais.
            </p>
          </div>

          <div className="flex flex-col max-w-full sm:max-w-1/4">
            <h2 className="text-base font-medium text-[#11C0B8]">Siga-nos</h2>
            <Button variant="link" className="block m-0 p-0">
              <a
                href="#"
                className="font-light flex items-center gap-2 text-xs my-0.5"
              >
                <Github size={16} /> Github
              </a>
            </Button>
            <Button variant="link" className="block m-0 p-0">
              <a
                href="#"
                className="font-light flex items-center gap-2 text-xs my-0.5"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
            </Button>

            <Button variant="link" className="block m-0 p-0">
              <a
                href="#"
                className="font-light flex items-center gap-2 text-xs my-0.5"
              >
                <Mail size={16} />
                <span>nosso@email.com</span>
              </a>
            </Button>
          </div>
        </section>
        <section
          className="flex md:flex-row flex-col itens-center sm:justify-evenly  justify-center gap-8 py-4 w-full border-t-2 border-transparent bg-clip-border"
          style={{
            borderImage: "linear-gradient(to right, #2E1F7A, #5439E0) 1",
          }}
        >
          <img src={LogoUepb} alt="Logo da UEPB" className="h-10" />
          <img src={LogoCacc} alt="Logo do CCAC" className="h-10" />
          <img src={Logo} alt="Logo do Projeto de Extensão" className="h-10" />
          <img src={LogoCurso} alt="Logo de Computação" className="h-10" />
        </section>
      </div>
    </footer>
  );
}
