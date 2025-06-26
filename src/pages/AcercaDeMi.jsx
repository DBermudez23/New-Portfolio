import { assetsAcercaDeMi, assetsStack } from "../assets/assets";
import SkillBar from "../components/SkillBar";
import { TypeAnimation } from "react-type-animation";
import StackSection from "../components/StackSection";

function AcercaDeMi() {
  return (
    <div className="min-h-screen w-full pt-24 sm:pt-32 md:pt-40 px-6 sm:px-12 md:px-24 lg:px-32 text-white flex flex-col gap-10">
      {/* ANIMACIÓN DE TÍTULO */}
      <h2>
        <TypeAnimation
          sequence={[
            'MI NOMBRE ES DANIEL BERMUDEZ...',
            2000,
            'DESARROLLADOR FULL STACK...',
            2000,
            'BIENVENIDO A MI PORTAFOLIO...',
            2000,
            'INGENIERIA DE SISTEMAS...',
            2000
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="text-3xl sm:text-4xl md:text-6xl text-center text-neon-green my-10"
        />
      </h2>

      {/* DESCRIPCIÓN 1 */}
      <div className="text-start text-base sm:text-lg md:text-xl">
        <p>
          TENGO 21 AÑOS, ACTUALMENTE RESIDÓ EN LA CIUDAD DE PEREIRA EN COLOMBIA DONDE ME ENCUENTRO ESTUDIANDO LA INGENIERIA DE SISTEMAS Y COMPUTACIÓN EN LA UNIVERSIDAD 
        </p>
        <p>
          TECNOLÓGICA DE PEREIRA EN LA JORNADA NOCTURNA.
        </p>
      </div>

      {/* DESCRIPCIÓN 2 */}
      <div className="text-start text-base sm:text-lg md:text-xl">
        <p>
          DESDE HACE DOS AÑOS VENGO ESTUDIANDO DE MANERA AUTODIDACTA DIVERSOS TEMAS QUE ME HAN LLAMADO LA ATENCIÓN,
        </p>
        <p>
          DESDE DESARROLLO WEB HASTA MACHINE LEARNING CON PYTHON, PASANDO TAMBIÉN POR CIBERSEGURIDAD, REDES Y ARQUITECTURA DE COMPUTADORES.
        </p>
      </div>

      {/* TEXTO CON IMAGEN */}
      <div className="relative flex flex-col md:flex-row items-center gap-10 text-start text-base sm:text-lg md:text-xl">
        <div className="md:w-2/3 self-start">
          <p>
            ESAS GANAS DE APRENDIZAJE CONTINUO Y AUTÓNOMO, SUMADO AL APRENDIZAJE TÉCNICO
            Y MATEMÁTICO QUE ME BRINDA LA UNIVERSIDAD ME HAN LLEVADO A TENER UNAS EXCELENTES BASES PARA APRENDER FÁCILMENTE CUALQUIER TECNOLOGÍA.
          </p>
          <p>
            Y RESOLVER PROBLEMAS DE MANERA EFICIENTE.
          </p>
        </div>
        <div className="relative md:w-1/3 md:-translate-x-6 -mt-6 md:mt-0">
          <img
            src={assetsAcercaDeMi.acercaDeMiAvatar}
            alt="Avatar"
            className="w-52 sm:w-64 md:w-72 h-auto"
          />
        </div>
      </div>

      {/* DESCRIPCIÓN FINAL */}
      <div className="text-end text-base sm:text-lg md:text-xl mb-10">
        <p>
          LUEGO DE HABER EXPLORADO ESTAS RAMAS TAN INTERESANTES DE LAS TI, DECIDÍ ENFOCARME EN DESARROLLO WEB
          YA QUE LO QUE MÁS DISFRUTO ES PROGRAMAR, DISEÑAR Y PENSAR SOLUCIONES ESTRATÉGICAS PARA QUE MIS APLICACIONES
          SEAN SIEMPRE MEJOR DE LO QUE FUERON LAS ANTERIORES. O MEJORAR LOS PROYECTOS YA CREADOS,
        </p>
        <p>
          BUSCANDO SIEMPRE ESTAR EN CONSTANTE EVOLUCIÓN
          Y APRENDER ALGO NUEVO CADA DÍA.
        </p>
      </div>
      <div className="text-end text-base sm:text-lg md:text-xl">
        <p>
          DESDE QUE COMENCÉ  EN ESTE PROCESO DE APRENDIZAJE AUTÓNOMO SOLIA USAR JAVASCRIPT MÁS ALLÁ DE CUALQUIER OTRO LENGUAJE 
          DE PROGRAMACIÓN
        </p>
        <p>
          ASÍ QUE ESO ME HIZO DECIDIRME POR PROFUNDIZAR EN DICHO LENGUAJE.
        </p>
      </div>
      {/* TEXTO CON IMAGEN */}
      <div className="relative flex flex-col md:flex-row items-center gap-10 text-end text-base sm:text-lg md:text-xl">
        <div className="relative md:w-1/3 md:-translate-x-2 -mt-6 md:mt-0">
          <img
            src={assetsAcercaDeMi.AcercaDeMiCode}
            alt="Avatar"
            className="w-52 sm:w-64 md:w-72 h-auto"
          />
        </div>
        <div className="md:w-2/3 self-start">
          <p>
            ACTUALMENTE ESTOY USANDO EN TODOS MIS PROYECTOS EL STACK MERN (MONGO DB, EXPRESS, REACT, NODE JS)
          </p>
          <p>
            BUSCANDO LA ESPECIALIZACIÓN DE DICHO STACK CÓMO FACTOR PRINCIPAL PARA
            DESTACAR ENTRE OTROS DEV’S
          </p>
        </div>
      </div>

      {/*SECCIÓN DE STACK */}
      <StackSection />
    </div>

  )
}

export default AcercaDeMi;
