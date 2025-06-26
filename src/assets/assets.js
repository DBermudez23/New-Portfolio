//Inicio y header
import headerLogo from './headerLogo.svg';
import inicioDev from './inicioDev.svg';
import Menu from './Menu.svg';

//Acerca de mi descripción
import acercaDeMiAvatar from './acercaDeMiAvatar.svg';
import AcercaDeMiCode from './AcercaDeMiCode.svg';

//STACK TECNOLÓGICO
//Lenguajes
import JavaScript from './JavaScript.svg';
import Python from './Python.svg';
import CPPicon from './CPPicon.svg';
import Java from './Java.svg';
//frontend
import HTMLicon from './HTMLicon.svg';
import CSSicon from './CSSicon.svg';
import React from './React.svg';
import Svelte from './Svelte.svg';
import Tailwind from './Tailwind.svg';
//backend
import Django from './Django.svg';
import ExpressJs from './ExpressJs.svg';
import NodeJs from './NodeJs.svg';
//testing
import Jest from './Jest.svg';
import superTest from './superTest.svg';
//bases de datos
import Mongo from './Mongo.svg';
import MySQL from './MySQL.svg';
import PostgreSQL from './PostgreSQL.svg';
import SQLicon from './SQLicon.svg';
//machine learning
import Matplotlib from './Matplotlib.svg';
import Numpy from './Numpy.svg';
import Jupyter from './Jupyter.svg';
import Pandas from './Pandas.svg';
import Scikit from './Scikit.svg';
import Seaborn from './Seaborn.svg';
import TensorFlow from './Tensorflow.svg';
//ingenieria
import Diagram from './Diagram.svg';
import Patrones from './Patrones.svg';
import Fisica from './Fisica.svg';
import Algebra from './Algebra.svg';
import Calculo from './Calculo.svg';
import Electronica from './Electronica.svg';
import Computador from './Computador.svg';
//otros 
import comunicacion from './Comunicacion.svg';
import Actitud from './Actitud.svg';
import Ingles from './Ingles.svg';

//proyectos
import GitHubMini from './GitHubMini.svg';
import Chrome from './Chrome.svg';

//contacto
import contactUs from './contactUs.svg';
import GitHub from './GitHub.svg';
import Gmail from './Gmail.svg';
import LinkedIn from './LinkedIn.svg';
import WhatsApp from './WhatsApp.svg';
import CV from './CV.svg';


export const assetsInicio = {
    headerLogo,
    inicioDev,
    Menu
}

export const assetsAcercaDeMi = {
    acercaDeMiAvatar,
    AcercaDeMiCode
}

/*export const assetsStack = {
    lenguajes: [JavaScript, Python, CPPicon, Java],
    frontend: [HTMLicon, CSSicon, React, Svelte, Tailwind],
    backend: [Django, ExpressJs, NodeJs],
    testing: [Jest, superTest],
    basesDeDatos: [Mongo, MySQL, PostgreSQL, SQLicon],
    machineLearning: [Matplotlib, Numpy, Jupyter, Pandas, Scikit, Seaborn, TensorFlow],
    ingenieria: [Diagram, Patrones, Fisica, Algebra, Calculo, Electronica, Computador],
    otros: [comunicacion, Actitud, Ingles]
}; */

export const assetsStack = {
    js : {
        category : 'Lenguajes',
        name : 'JavaScript',
        icon: JavaScript,
        level : 90
    },
    python : {
        category : 'Lenguajes',
        name : 'Python',
        icon: Python,
        level : 90
    },
    cpp : {
        category : 'Lenguajes',
        name : 'C++',
        icon: CPPicon,
        level : 60
    },
    java : {
        category : 'Lenguajes',
        name : 'Java',
        icon: Java,
        level : 80
    },
    html : {
        category : 'Frontend',
        name : 'HTML',
        icon: HTMLicon,
        level : 90
    },
    css :{
        category : 'Frontend',
        name : 'CSS',
        icon: CSSicon,
        level : 100
    },
    react : {
        category : 'Frontend',
        name : 'React',
        icon: React,
        level : 90
    },
    svelte : {
        category : 'Frontend',
        name : 'Svelte',
        icon: Svelte,
        level : 80
    },
    tailwind : {
        category : 'Frontend',
        name : 'Tailwind',
        icon: Tailwind,
        level : 100
    },
    django : {
        category : 'Backend',
        name : 'Django',
        icon: Django,
        level : 80
    },
    expressJs : {
        category : 'Backend',
        name : 'ExpressJs',
        icon: ExpressJs,
        level : 90
    },
    nodeJs : {
        category : 'Backend',
        name : 'NodeJs',
        icon: NodeJs,
        level : 90
    },
    jest : {
        category : 'Testing',
        name : 'Jest',
        icon: Jest,
        level : 80
    },
    superTest : {
        category : 'Testing',
        name : 'SuperTest',
        icon: superTest,
        level : 80
    },
    mongo : {
        category : 'Bases de Datos',
        name : 'MongoDB',
        icon: Mongo,
        level : 80
    },
    mySQL : {
        category : 'Bases de Datos',
        name : 'MySQL',
        icon: MySQL,
        level : 80
    },
    postgreSQL : {
        category : 'Bases de Datos',
        name : 'PostgreSQL',
        icon: PostgreSQL,
        level : 80
    },
    sql : {
        category : 'Bases de Datos',
        name : 'SQL',
        icon: SQLicon,
        level : 80
    },
    matplotlib : {
        category : 'Machine Learning',
        name : 'Matplotlib',
        icon: Matplotlib,
        level : 80
    },
    numpy : {
        category : 'Machine Learning',
        name : 'Numpy',
        icon: Numpy,
        level : 80
    },
    jupyter : {
        category : 'Machine Learning',
        name : 'Jupyter',
        icon: Jupyter,
        level : 100
    },
    pandas : {
        category : 'Machine Learning',
        name : 'Pandas',
        icon: Pandas,
        level : 80
    },
    scikit : {
        category : 'Machine Learning',
        name : 'Scikit-learn',
        icon: Scikit,
        level : 80
    },
    seaborn : {
        category : 'Machine Learning',
        name : 'Seaborn',
        icon: Seaborn,
        level : 80
    },
    tensorflow : {
        category : 'Machine Learning',
        name : 'TensorFlow',
        icon: TensorFlow,
        level : 80
    },
    diagram : {
        category : 'Ingeniería',
        name : 'Diagramas',
        icon: Diagram,
        level : 80
    },
    patrones : {
        category : 'Ingeniería',
        name : 'Patrones de Diseño',
        icon: Patrones,
        level : 80
    },
    fisica : {
        category : 'Ingeniería',
        name : 'Física',
        icon: Fisica,
        level : 90
    },
    algebra : {
        category : 'Ingeniería',
        name : 'Álgebra lineal',
        icon: Algebra,
        level : 90
    },
    calculo : {
        category : 'Ingeniería',
        name : 'Cálculo',
        icon: Calculo,
        level : 90
    },
    electronica : {
        category : 'Ingeniería',
        name : 'Electrónica',
        icon: Electronica,
        level : 70
    },
    computador : {
        category : 'Ingeniería',
        name : 'Arquitectura PC',
        icon: Computador,
        level : 80
    },
    comunicacion : {
        category : 'Otros',
        name : 'Comunicación',
        icon: comunicacion,
        level : 100
    },
    actitud : {
        category : 'Otros',
        name : 'Actitud',
        icon: Actitud,
        level : 100
    },
    ingles : {
        category : 'Otros',
        name : 'Inglés',
        icon: Ingles,
        level : 80
    }
}

export const assetsProyectos = {
    GitHubMini,
    Chrome
};

export const assetsContacto = {
    contactUs,
    GitHub,
    Gmail,
    LinkedIn,
    WhatsApp,
    CV
};
