import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/icons/logo.svg";
import { Menu } from "lucide-react";

const Separator: React.FC = () => <span className="mx-5">•</span>;

const navLinkClass =
  "hover:text-primary text-gray-300 transition-colors duration-200 text-lg py-2";
export default function Navbar() {
  interface Page {
    endpoint: string;
    linkName: string;
  }
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuthPage = ["/cadastro", "/login"].includes(location.pathname);
  const pages: Page[] = [
    {
      endpoint: "/",
      linkName: "início",
    },
    {
      endpoint: "/sessoes",
      linkName: "sessões",
    },
    {
      endpoint: "/eventos",
      linkName: "eventos",
    },
  ];

  if (isAuthPage) {
    return (
      <nav
        className="flex justify-between items-center px-6 py-4 mb-6 bg-black border-b-2 border-transparent bg-clip-border"
        style={{
          borderImage: "linear-gradient(to right, #2E1F7A, #1C1C2A, #11C0B8) 1",
        }}
      >
        <Button variant="ghost" size="icon">
          {" "}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </Button>
      </nav>
    );
  }

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 mb-6 bg-black border-b-2 border-transparent bg-clip-border relative"
      style={{
        borderImage: "linear-gradient(to right, #2E1F7A, #1C1C2A, #11C0B8) 1",
      }}
    >
      <div className="flex items-center">
        <Button variant="ghost" size="icon">
          {" "}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </Button>
      </div>

      <div className="hidden md:flex items-center text-white absolute left-1/2 transform -translate-x-1/2">
        {pages.map((page, index) => (
          <div key={`${page.linkName}-${index}`} className="flex items-center">
            <Link to={page.endpoint} className={navLinkClass}>
              {page.linkName}
            </Link>
            {index < pages.length - 1 && <Separator />}
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        className="md:hidden"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Menu className="w-2.5" />
      </Button>

      <span className="md:flex flex-row gap-2 hidden">
        <Button
          variant="outline"
          className="hidden md:flex items-center justify-center px-4 py-1"
        >
          <Link to="/login" className="">
            entrar
          </Link>
        </Button>

        <Button className="hidden md:flex items-center justify-center px-4 py-1">
          <Link to="/cadastro" className="">
            criar conta
          </Link>
        </Button>
      </span>

      {menuOpen && !isAuthPage && (
        <div className="md:hidden absolute top-15 right-0 mt-2 bg-black border border-primary border-t-black rounded-t-none shadow-lg flex flex-col items-center p-4 z-50 min-w-[160px]">
          {pages.map((page, index) => (
            <div key={`${page.linkName}-${index}`} className="flex my-2">
              <Link
                to={page.endpoint}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {page.linkName}
              </Link>
            </div>
          ))}

          <span className="flex flex-col justify-center items-center gap-2 mt-2">
            <Button
              variant="outline"
              className="flex w-full px-4 py-1"
            >
              <Link to="/login" className="">
                entrar
              </Link>
            </Button>

            <span className="text-white mb-2">ou</span>

            <Button className="px-4 py-1">
              <Link to="/cadastro" className="">
                criar conta
              </Link>
            </Button>
          </span>
        </div>
      )}
    </nav>
  );
}
