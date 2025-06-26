import { assetsProyectos } from "../assets/assets";

function ProjectCard({ project }) {
  return (
    <div className="bg-dark-blue border-2 border-main-blue rounded-lg overflow-hidden shadow-md w-full max-w-md text-white flex flex-col">
      {/* Imagen */}
      <div className="bg-black flex items-center justify-center h-52">
        <img
          src={project.image}
          alt="Proyecto"
          className="object-contain h-full max-w-full"
        />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col gap-3 flex-grow">
        {/* Título */}
        <h4 className="text-lg sm:text-xl text-center text-neon-green uppercase">
          {project.name}
        </h4>

        {/* Descripción */}
        <p className="text-sm sm:text-base leading-relaxed text-justify text-white">
          {project.description}
        </p>

        {/* Iconos */}
        <div className="flex justify-center gap-4 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-blue text-white hover:bg-white hover:text-main-blue border border-main-blue py-1 px-3 rounded transition-all duration-300 text-sm flex items-center gap-2"
              title="Ver proyecto"
            >
              <img src={assetsProyectos.Chrome} alt="Demo" className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-blue hover:bg-white hover:text-main-blue border border-main-blue py-1 px-3 rounded transition-all duration-300 text-sm flex items-center gap-2"
              title="Ver código"
            >
              <img src={assetsProyectos.GitHubMini} alt="GitHub" className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
