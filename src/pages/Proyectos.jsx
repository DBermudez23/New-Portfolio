import React from 'react';
import { infoProjects } from '../assets/InfoProjects'; // Asegúrate de que la ruta sea correcta
import ProjectCard from '../components/ProjectCard';

function Proyectos() {
  return (
    <div className="min-h-screen w-full pt-40 sm:pt-32 md:pt-40 px-6 sm:px-12 md:px-24 lg:px-32 text-white flex flex-col items-center gap-10 mb-10">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-neon-green text-center">
        MIS PROYECTOS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {infoProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
