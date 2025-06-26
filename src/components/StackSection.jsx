import { assetsStack } from "../assets/assets";
import SkillBar from "./SkillBar";

// Agrupar tecnologías por categoría
const groupByCategory = (stack) => {
  const grouped = {};
  Object.values(stack).forEach((tech) => {
    if (!grouped[tech.category]) grouped[tech.category] = [];
    grouped[tech.category].push(tech);
  });
  return grouped;
};

const StackSection = () => {
  const groupedStack = groupByCategory(assetsStack);

  return (
    <div className="flex flex-col items-center gap-6 mb-10 px-4 md:px-10">
      <h2 className="text-neon-green text-xl text-center">STACK TECNOLÓGICO</h2>
      <hr className="border-none outline-none h-0.5 bg-main-blue w-1/5" />

      {/* Renderizado de cada categoría */}
      {Object.entries(groupedStack).map(([category, skills]) => (
        <div
          key={category}
          className="border-2 border-main-blue rounded-lg p-6 w-full max-w-4xl bg-dark-blue text-center"
        >
          <h3 className="text-lg text-white mb-4 uppercase">{category}</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackSection;
