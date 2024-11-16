import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import logoFoto from "../assets/logo-removebg-preview.png";

const NavBarMovil = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <section className="fixed flex w-full justify-between p-4 lg:hidden z-[60] bg-white shadow-md">
        <div className="h-10 w-10">
          <img src={logoFoto} alt="Logo" className="w-full h-full" />
        </div>

        <IconButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon sx={{ color: "black" }} />
          ) : (
            <MenuIcon sx={{ color: "black" }} />
          )}
        </IconButton>
      </section>

      {/* Sliding Menu */}
      <section
        className={`fixed top-[64px] left-0 w-full 
        h-[calc(100vh-64px)] bg-gray-200 z-[50] transition-transform duration-300 
        ease-in-out flex flex-col p-4 ${
          isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="space-y-4 p-4">
          <li>
            <a href="#contacto" className="text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Contáctanos
            </a>
          </li>
          <li>
            <a href="#equipo" className="text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Qué hacemos
            </a>
          </li>
          <li>
            <a href="#link3" className="text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Trabaja con nosotros
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default NavBarMovil;
