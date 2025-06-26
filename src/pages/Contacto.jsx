import { assetsContacto } from "../assets/assets";

const buttonContent = {
  linkedin: {
    icon: assetsContacto.LinkedIn,
    texth4: "DANIEL BERMUDEZ",
    textp: "www.linkedin.com/in/DBermudez23",
    url: "https://www.linkedin.com/in/DBermudez23",
  },
  gmail: {
    icon: assetsContacto.Gmail,
    texth4: "D.BERMUDEZ1@UTP.EDU.CO",
    textp: "DANIELBERMUDEZWUW@GMAIL.COM",
    url: "mailto:D.BERMUDEZ1@UTP.EDU.CO",
  },
  github: {
    icon: assetsContacto.GitHub,
    texth4: "DBERMUDEZ23",
    textp: "VISITA MI PERFIL DE GITHUB",
    url: "https://github.com/DBermudez23",
  },
  whatsapp: {
    icon: assetsContacto.WhatsApp,
    texth4: "+57 301 695 1308",
    textp: "ENVÍAME UN MENSAJE POR WHATSAPP",
    url: "https://api.whatsapp.com/send?phone=573016951308&text=Hola%20Daniel,%20me%20gustaría%20contactarte%20para...",
  },
  descargarCV: {
    icon: assetsContacto.CV,
    texth4: "DESCARGAR CV",
    textp: "DESCARGA MI CURRÍCULUM VITAE",
    url: "https://drive.google.com/file/d/16q7_ynQHkTRPzEfsMmKZmHSzOKtU6tsZ/view?usp=sharing",
  },
};

function Contacto() {
  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 md:px-20 py-50 overflow-hidden text-white">
      
      {/* Imagen de fondo inferior derecha */}
      <img
        src={assetsContacto.contactUs}
        alt="Decoración"
        className="absolute right-0 bottom-0 w-[300px] sm:w-[400px] lg:w-[500px] opacity-90 pointer-events-none z-0"
      />

      {/* Contenido encima de la imagen */}
      <div className="relative z-10 flex flex-col gap-6 max-w-xl">
        {Object.entries(buttonContent).map(([key, value]) => (
          <a
            key={key}
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-main-blue rounded-md p-4 hover:bg-main-blue transition-all duration-300 backdrop-blur-md bg-opacity-70 bg-dark-blue"
          >
            <img src={value.icon} alt={key} className="w-8 h-8" />
            <div>
              <h4 className="text-sm sm:text-base ">
                {value.texth4}
              </h4>
              <p className="text-xs sm:text-sm text-white">{value.textp}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contacto;
