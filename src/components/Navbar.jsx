import { assetsInicio } from "../assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveStyle = (path) => {
      return currentPath === path ? "text-main-blue" : "text-white";
  };

  const isActive = (path) => currentPath === path;

  return (
    <header className="text-white w-full bg-gradient-to-br from-[#091131] via-[#000000] to-[#091131] h-30 flex justify-between items-center fixed top-0 z-50 border-b-2 lg:px-28 sm:px-10 px-5 shadow-md">
      <img src={assetsInicio.headerLogo} alt="Logo" className="w-18 h-auto" />

      {/* Menú grande (pantallas md y superiores) */}
      <ul className="hidden md:flex items-start gap-5 text-sm space-x-10">
        <NavLink to="/acerca-de-mi" onClick={() => window.scrollTo(0, 0)}>
          <li className={`py-1 text-center hover:text-main-blue ${getActiveStyle("/acerca-de-mi")}`}>
            <p>A CERCA</p>
            <p>DE MI</p>
            {isActive("/acerca-de-mi") && (
              <hr className="border-none outline-none h-0.5 bg-main-blue w-3/5 m-auto" />
            )}
          </li>
        </NavLink>
        <NavLink to="/proyectos" onClick={() => window.scrollTo(0, 0)}>
          <li className={`py-1 text-center hover:text-main-blue ${getActiveStyle("/proyectos")}`}>
            <p>MIS</p>
            <p>PROYECTOS</p>
            {isActive("/proyectos") && (
              <hr className="border-none outline-none h-0.5 bg-main-blue w-3/5 m-auto" />
            )}
          </li>
        </NavLink>
        <NavLink to="/contacto" onClick={() => window.scrollTo(0, 0)}>
          <li className={`py-1 text-center hover:text-main-blue ${getActiveStyle("/contacto")}`}>
            <p>COMO</p>
            <p>CONTACTARME</p>
            {isActive("/contacto") && (
              <hr className="border-none outline-none h-0.5 bg-main-blue w-3/5 m-auto" />
            )}
          </li>
        </NavLink>
      </ul>

      {/* Ícono de menú hamburguesa (visible solo en móviles) */}
      <div className="md:hidden">
        <img
          src={assetsInicio.Menu}
          alt="Menu"
          className="w-10 h-10 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#091131] text-white text-center border-b shadow-md animate-fade-in z-40">
          <ul className="flex flex-col gap-4 py-4">
            <li className="border-b pb-3" onClick={() => { navigate('/acerca-de-mi'); setIsMenuOpen(false); }}>A CERCA DE MI</li>
            <li className="border-b pb-3" onClick={() => { navigate('/proyectos'); setIsMenuOpen(false); }}>MIS PROYECTOS</li>
            <li onClick={() => { navigate('/contacto'); setIsMenuOpen(false); }}>COMO CONTACTARME</li>
          </ul>
        </div>
      )}
    </header>

  );
}

export default Navbar;