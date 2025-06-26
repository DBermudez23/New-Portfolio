import newsApp from "./newsApp.png";
import memoryGame from "./memoryGame.jpeg";
import taskList from "./taskList.jpeg";
import mLearning from "./mLearning.jpeg";
import RickMorty from "./RickMorty.png";
import javaAirplane from "./javaAirplane.jpeg";
import Datastructure from "./DataStructure.jpeg";
import organizadorPartidos from "./organizadorPartidos.jpeg";
import visorImagenes from "./visorImagenes.png";
import Zoologico from "./Zoologico.png";
import whispersBackend from "./whispersBackend.png";

export const infoProjects = [
  {
    name: 'APP NOTICIAS',
    description:
      'Aplicación web desarrollada con React y Redux Toolkit Query que permite a los usuarios buscar noticias actualizadas de cualquier categoría usando la API de NewsAPI. Implementa diseño responsivo y búsqueda dinámica para mejorar la experiencia de usuario.',
    image: newsApp,
    url: 'https://newsdbevenntreg.netlify.app/',
    github: 'https://github.com/DBermudez23/News-App',
  },
  {
    name: 'WHISPERS BACKEND',
    description:
      'API REST robusta desarrollada con Node.js y Express, conectada a MongoDB Atlas. Implementa autenticación JWT, gestión de usuarios, operaciones CRUD protegidas, y middleware personalizado. Incluye pruebas automatizadas con Jest y Supertest. Desplegada en Railway.',
    image: whispersBackend,
    url: 'https://github.com/DBermudez23/Whispers_Backend',
    github: 'https://github.com/DBermudez23/Whispers_Backend',
  },
  {
    name: 'ORGANIZADOR DE PARTIDOS',
    description:
      'Aplicación de escritorio desarrollada en Java con Swing y MySQL. Permite gestionar usuarios, equipos y partidos. Arquitectura basada en MVC, patrones Repository y Strategy para mantener escalabilidad y separación de responsabilidades.',
    image: organizadorPartidos,
    url: '',
    github: 'https://github.com/DBermudez23/Organizador_Partidos',
  },
  {
    name: 'APP DE TAREAS (CRUD)',
    description:
      'Aplicación web simple y funcional que permite registrar y eliminar tareas. Construida con Django y estilizada con Bootstrap. Implementa autenticación, manejo de usuarios y vistas protegidas. Desplegada en Render.',
    image: taskList,
    url: 'https://tasks-app-crud.onrender.com/signup/',
    github: 'https://github.com/DBermudez23/Tasks-app-CRUD',
  },
  {
    name: 'APP DE RICK Y MORTY',
    description:
      'Aplicación web responsiva construida con SvelteKit y Tailwind CSS. Consume la API pública de Rick and Morty para mostrar personajes, ubicaciones y episodios. Permite búsqueda, paginación y navegación dinámica mediante rutas dinámicas.',
    image: RickMorty,
    url: 'https://rickmortydbermu.netlify.app/',
    github: 'https://github.com/DBermudez23/Rick-and-Morty/',
  },
  {
    name: 'APP DESKTOP ZOOLÓGICO',
    description:
      'Aplicación de escritorio en Java Swing con Maven. Permite registrar usuarios, vender entradas, mostrar información de animales y aplicar promociones dinámicas según la fecha. Uso de patrones Strategy y MVC para organización y mantenibilidad.',
    image: Zoologico,
    github: 'https://github.com/DBermudez23/Zoologico-Java',
  },
  {
    name: 'VISOR Y EDITOR DE IMÁGENES CON PyQt & NumPy',
    description:
      'Aplicación de escritorio en Python con PyQt6 que permite visualizar y editar imágenes: ajustar brillo, contraste, rotar, hacer zoom, binarizar, extraer canales RGB, ver histograma y fusionar imágenes. Backend científico implementado con NumPy y Matplotlib.',
    image: visorImagenes,
    github: 'https://github.com/DBermudez23/Visor_imagenes',
  },
  {
    name: 'JAVA APLICACIÓN SISTEMA DE RESERVAS AEROPUERTO',
    description:
      'Software de escritorio en Java que gestiona la reserva de vuelos para una aerolínea. Incluye registro de usuarios, vuelos, asientos y reservas. Desarrollado con arquitectura modular usando Maven y GUI en Swing.',
    image: javaAirplane,
    github: 'https://github.com/DBermudez23/Aeropuerto',
  },
  {
    name: 'CLASIFICACIÓN DE PAÍSES POR RIESGO ENERGÉTICO (MACHINE LEARNING)',
    description:
      'Proyecto de Machine Learning en Python usando Scikit-learn. Clasifica países según su nivel de riesgo energético. Incluye análisis exploratorio de datos, preprocesamiento, entrenamiento de modelos y evaluación con métricas de clasificación.',
    image: mLearning,
    github: 'https://github.com/DBermudez23/Machine-learning-project/tree/main',
  },
  {
    name: 'ESTRUCTURAS DE DATOS (C++)',
    description:
      'Proyecto académico en C++ que implementa estructuras de datos fundamentales como pilas, colas, listas y árboles binarios. Incluye operaciones básicas, ejemplos de uso, menús interactivos en consola y principios de eficiencia algorítmica.',
    image: Datastructure,
    github: 'https://github.com/DBermudez23/Data-Structure-Project',
  },
  {
    name: 'MEMORY GAME (SOLO HTML Y CSS)',
    description:
      'Juego de cartas de memoria hecho únicamente con HTML y CSS, sin JavaScript. Demuestra habilidades en animaciones, transiciones y lógica basada en estado CSS. Ideal para reforzar prácticas de diseño y estilos avanzados.',
    image: memoryGame,
    url: 'https://memoty-game-db.netlify.app/',
    github: 'https://github.com/DBermudez23/memory-game',
  },
];
