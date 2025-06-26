import React from 'react';
import { assetsInicio } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full text-white pt-24 px-6 md:px-20 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        {/* PARTE IZQUIERDA - TEXTO */}
        <div className="text-center md:text-left w-full">
          {/* TÍTULO Y NOMBRE */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-[90px] text-neon-green leading-tight">MI PORTAFOLIO</h1>
            <p className="text-xl sm:text-2xl mt-4">DANIEL</p>
            <p className="text-xl sm:text-2xl">BERMUDEZ</p>
          </div>
          {/* BOTÓN */}
          <div className="mt-10 lg:ml-50 md:mt-20 flex justify-center md:justify-start">
            <button
              onClick={() => {navigate('/acerca-de-mi'); scrollTo(0, 0)}}
              className="px-6 py-2 bg-transparent border-2 border-main-blue text-main-blue rounded-md hover:bg-main-blue hover:text-white transition duration-300"
            >
              BIENVENIDO
            </button>
          </div>
        </div>

        {/* PARTE DERECHA - IMAGEN */} 
        <div className="w-full flex justify-center md:justify-end">
          <img
            src={assetsInicio.inicioDev}
            alt="Portfolio Visual"
            className="w-72 sm:w-80 md:w-96 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
