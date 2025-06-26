import React from 'react';

const SkillBar = ({ icon, name, level }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-y-0 mb-6 w-full">
      {/* Ícono + nombre */}
      <div className="flex items-center gap-3 w-full sm:w-1/3 justify-start">
        <img src={icon} alt={name} className="w-6 sm:w-7 md:w-8 h-auto" />
        <span className="text-main-blue font-semibold text-sm md:text-base lg:text-lg">
          {name}
        </span>
      </div>

      {/* Barra de progreso */}
      <div className="w-full sm:w-2/3 flex items-center gap-2">
        <div className="relative w-full h-3 bg-dark-blue rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-main-blue rounded-full transition-all duration-1000"
            style={{ width: `${level}%` }}
          />
        </div>
        <span className="text-main-blue text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
          {level}%
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
