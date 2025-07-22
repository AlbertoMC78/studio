export interface CourseClass {
  id: string;
  title: string;
  content: string;
  duration: number; // in minutes
}

export interface CourseModule {
  id: string;
  title: string;
  objective: string;
  classes: CourseClass[];
  project: {
    title: string;
    description: string;
  };
  quizId: string;
}

export const courseData: CourseModule[] = [
  {
    id: '0',
    title: 'MÓDULO 0: Introducción y Ruta de Aprendizaje',
    objective:
      'Entender cómo se estructura el curso, herramientas necesarias y mentalidad del desarrollador',
    classes: [
      {
        id: '0.1',
        title: 'Bienvenida y objetivos del curso',
        content:
          '<h1>Bienvenida al Master Web Developer</h1><p>En este curso, te embarcarás en un viaje completo para convertirte en un desarrollador web de élite. Cubriremos desde los fundamentos hasta tecnologías avanzadas como IA y Web3.</p>',
        duration: 15,
      },
      {
        id: '0.2',
        title: 'Modalidades de estudio y plataformas',
        content:
          '<h2>Modalidades de Estudio</h2><p>Esta plataforma está diseñada para el autoaprendizaje. Sigue los módulos en orden y aprovecha los quizzes y proyectos para solidificar tu conocimiento.</p>',
        duration: 20,
      },
      {
        id: '0.3',
        title: 'Instalación de herramientas básicas',
        content:
          '<h2>Herramientas Esenciales</h2><p>Necesitarás un editor de código como VS Code, Git para control de versiones, y Node.js. Te guiaremos en la instalación.</p>',
        duration: 45,
      },
      {
        id: '0.4',
        title: 'Mentalidad de programador y resolución de problemas',
        content: '<h2>Mentalidad de Programador</h2><p>Contenido sobre la mentalidad de un programador y cómo abordar la resolución de problemas de manera efectiva.</p>',
        duration: 30,
      },
      {
        id: '0.5',
        title: 'Cómo estudiar programación (hábitos + metodología)',
        content: '<h2>Metodología de Estudio</h2><p>Aprende las mejores técnicas y hábitos para estudiar programación de manera eficiente y sostenible a largo plazo.</p>',
        duration: 30,
      },
    ],
    project: {
      title: 'Configuración de Entorno',
      description:
        'Instala todas las herramientas necesarias y configura tu cuenta de GitHub.',
    },
    quizId: 'quiz_0',
  },
  {
    id: '1',
    title: 'MÓDULO 1: Fundamentos de la Web (HTML, CSS, Git)',
    objective:
      'Aprender cómo funciona la web, crear estructuras con HTML y estilos con CSS',
    classes: [
      {
        id: '1.1',
        title: '¿Cómo funciona la Web?',
        content:
          '<h2>El Modelo Cliente-Servidor</h2><p>Exploraremos cómo los navegadores (clientes) solicitan información a los servidores y cómo estos responden con HTML, CSS y JavaScript.</p>',
        duration: 30,
      },
      {
        id: '1.2',
        title: 'HTML básico: etiquetas, listas, tablas, enlaces',
        content: '<h2>Estructura con HTML</h2><p>Aprende las etiquetas fundamentales de HTML para estructurar contenido web.</p><pre><code class="language-html">&lt;h1&gt;Título&lt;/h1&gt;\\n&lt;p&gt;Un párrafo de texto.&lt;/p&gt;</code></pre>',
        duration: 60,
      },
      {
        id: '1.3',
        title: 'HTML semántico y buenas prácticas',
        content:
          '<h2>HTML Semántico</h2><p>Utiliza etiquetas como `<article>`, `<section>`, y `<nav>` para dar significado a tu contenido, mejorando el SEO y la accesibilidad.</p>',
        duration: 45,
      },
      {
        id: '1.4',
        title: 'CSS básico: selectores, propiedades, colores',
        content:
          '<h2>Estilos con CSS</h2><p>Aprende a seleccionar elementos HTML y aplicarles estilos. </p><pre><code class="language-css">p {\\n  color: blue;\\n  font-size: 16px;\\n}</code></pre>',
        duration: 60,
      },
      {
        id: '1.5',
        title: 'Box model y layout',
        content: '<h2>El Modelo de Caja</h2><p>Todo en CSS es una caja. Aprende a controlar el `padding`, `border`, y `margin`.</p>',
        duration: 50,
      },
      {
        id: '1.6',
        title: 'Flexbox y Grid',
        content:
          '<h2>Layouts Modernos</h2><p>Domina Flexbox y Grid, las herramientas más poderosas de CSS para crear layouts complejos y responsivos.</p>',
        duration: 90,
      },
      {
        id: '1.7',
        title: 'Introducción a Git y GitHub',
        content: '<h2>Control de Versiones</h2><p>Git es fundamental para el desarrollo de software moderno. GitHub es la plataforma donde alojarás tus repositorios.</p>',
        duration: 45,
      },
      {
        id: '1.8',
        title: 'Git básico: commits, ramas, merge',
        content: '<h2>Comandos básicos de Git</h2><p>Aprende los comandos esenciales de Git como `commit`, `branch`, `merge` y `push` para gestionar tu código.</p>',
        duration: 60,
      },
    ],
    project: {
      title: 'Página de perfil personal',
      description: 'Crea tu propia página de perfil usando HTML y CSS, y súbela a un repositorio de GitHub.',
    },
    quizId: 'quiz_1',
  },
  {
    id: '2',
    title: 'MÓDULO 2: Programación con JavaScript',
    objective: 'Dominar JavaScript para lógica de programación, manipulación del DOM y trabajo con datos',
    classes: [
        { id: '2.1', title: 'Variables, tipos de datos y operadores', content: 'Contenido sobre variables en JS.', duration: 60 },
        { id: '2.2', title: 'Condicionales y bucles', content: 'Contenido sobre condicionales y bucles en JS.', duration: 75 },
        { id: '2.3', title: 'Funciones y scope', content: 'Contenido sobre funciones y scope en JS.', duration: 75 },
        { id: '2.4', title: 'Arreglos y objetos', content: 'Contenido sobre arreglos y objetos en JS.', duration: 60 },
        { id: '2.5', title: 'Manipulación del DOM', content: 'Contenido sobre manipulación del DOM.', duration: 90 },
        { id: '2.6', title: 'Eventos y formularios', content: 'Contenido sobre eventos y formularios en JS.', duration: 90 },
        { id: '2.7', title: 'JSON y almacenamiento local', content: 'Contenido sobre JSON y Local Storage.', duration: 45 },
        { id: '2.8', title: 'Fetch API: consumir datos de APIs', content: 'Contenido sobre Fetch API.', duration: 90 },
    ],
    project: {
        title: 'Aplicación de tareas (ToDo List)',
        description: 'Crea una ToDo List interactiva utilizando HTML, CSS y JavaScript puro, con manipulación del DOM y almacenamiento local.'
    },
    quizId: 'quiz_2'
  },
  {
    id: '3',
    title: 'MÓDULO 3: Desarrollo Front-End con Frameworks',
    objective: 'Aprender React y fundamentos de otros frameworks populares',
    classes: [
        { id: '3.1', title: '¿Qué es un framework y por qué usar React?', content: 'Contenido sobre frameworks y React.', duration: 45 },
        { id: '3.2', title: 'Componentes, props y JSX', content: 'Contenido sobre componentes y JSX en React.', duration: 90 },
        { id: '3.3', title: 'State y ciclo de vida', content: 'Contenido sobre state y ciclo de vida en React.', duration: 90 },
        { id: '3.4', title: 'React Router', content: 'Contenido sobre React Router.', duration: 75 },
        { id: '3.5', title: 'Hooks (useState, useEffect, custom hooks)', content: 'Contenido sobre React Hooks.', duration: 120 },
        { id: '3.6', title: 'Manejo de formularios y validaciones', content: 'Contenido sobre formularios en React.', duration: 90 },
        { id: '3.7', title: 'Introducción a Vue.js', content: 'Contenido sobre Vue.js.', duration: 60 },
        { id: '3.8', title: 'Introducción a Angular', content: 'Contenido sobre Angular.', duration: 60 },
    ],
    project: {
        title: 'App de notas con React',
        description: 'Desarrolla una aplicación de notas completa utilizando React, manejando estado, componentes y routing.'
    },
    quizId: 'quiz_3'
  },
];
