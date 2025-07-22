
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
          `<h2>El Viaje de una Página Web: Del Clic a la Pantalla</h2>
<p>Cada vez que visitas un sitio web, desencadenas una serie de eventos rapidísimos y complejos a través de una red global. La arquitectura que lo hace posible se conoce como el <strong>modelo Cliente-Servidor</strong>. Es la columna vertebral de la World Wide Web.</p>

<h3>1. Los Actores Principales</h3>
<ul>
  <li><strong>El Cliente (Tu Navegador):</strong> Es el software en tu dispositivo (Chrome, Firefox, Safari) que actúa como tu agente en la web. Su trabajo es solicitar, recibir e interpretar (renderizar) la información para que puedas verla y interactuar con ella.</li>
  <li><strong>El Servidor:</strong> Es un ordenador potente, siempre encendido y conectado a internet, cuyo propósito es "servir" contenido cuando un cliente lo solicita. Almacena los archivos (HTML, CSS, JavaScript, imágenes), ejecuta lógica de negocio y se conecta a bases de datos.</li>
</ul>

<h3>2. El Protocolo de Comunicación: HTTP/S</h3>
<p>Cliente y servidor necesitan un lenguaje común para entenderse. Este lenguaje es el <strong>Protocolo de Transferencia de Hipertexto (HTTP)</strong>. Su versión segura, <strong>HTTPS</strong>, encripta la comunicación, lo cual es el estándar hoy en día.</p>
<ul>
    <li><strong>Petición (Request):</strong> El cliente envía una petición HTTP al servidor. Por ejemplo: <code>GET /index.html</code>, que significa "dame el archivo index.html".</li>
    <li><strong>Respuesta (Response):</strong> El servidor procesa la petición y devuelve una respuesta HTTP, que incluye un <strong>código de estado</strong> (como <code>200 OK</code> si todo fue bien, o <code>404 Not Found</code> si no encontró el recurso) y el contenido solicitado (el archivo HTML, por ejemplo).</li>
</ul>

<h3>3. Las Direcciones de la Web: IP y DNS</h3>
<p>Para que tu navegador sepa a qué servidor enviar la petición, necesita su dirección. En internet, las direcciones son numéricas, llamadas <strong>direcciones IP</strong> (ej., <code>172.217.16.142</code>).</p>
<p>Como recordar números es difícil para los humanos, usamos nombres de dominio (ej., <code>google.com</code>). El <strong>Sistema de Nombres de Dominio (DNS)</strong> actúa como la agenda telefónica de internet, traduciendo los nombres de dominio que escribimos a la dirección IP del servidor correspondiente.</p>

<h3>4. El Proceso Completo (Paso a Paso)</h3>
<ol>
  <li><strong>Escribes la URL:</strong> Ingresas <code>https://www.ejemplo.com</code> en tu navegador y presionas Enter.</li>
  <li><strong>Traducción DNS:</strong> Tu navegador pregunta a un servidor DNS: "¿Cuál es la IP de <code>www.ejemplo.com</code>?". El DNS responde con la dirección IP del servidor.</li>
  <li><strong>Petición HTTP/S:</strong> Tu navegador establece una conexión con el servidor en esa IP y le envía una petición HTTP/S pidiendo la página principal.</li>
  <li><strong>Procesamiento del Servidor:</strong> El servidor recibe la petición. Busca el archivo HTML solicitado. Si es una página dinámica (ej., un perfil de red social), puede que necesite consultar una base de datos y construir el HTML sobre la marcha.</li>
  <li><strong>Respuesta del Servidor:</strong> El servidor envía el archivo HTML de vuelta a tu navegador como parte de la respuesta HTTP/S.</li>
  <li><strong>Renderizado (Fase 1 - HTML):</strong> El navegador comienza a leer el HTML. Entiende la estructura: aquí va un título, aquí un párrafo, aquí una imagen.</li>
  <li><strong>Peticiones Adicionales:</strong> Mientras lee el HTML, el navegador encuentra referencias a otros archivos, como hojas de estilo CSS (<code>&lt;link rel="stylesheet" href="style.css"&gt;</code>) y scripts de JavaScript (<code>&lt;script src="app.js"&gt;&lt;/script&gt;</code>). Realiza peticiones HTTP/S adicionales para cada uno de estos archivos.</li>
  <li><strong>Renderizado (Fase 2 - CSS y JS):</strong> A medida que llegan los archivos CSS y JavaScript, el navegador los aplica. El CSS le da estilo y apariencia visual a la estructura HTML. El JavaScript añade interactividad, como animaciones, validación de formularios o la capacidad de cargar más contenido sin recargar la página.</li>
</ol>
<p>Este ciclo completo, desde la petición inicial hasta que la página es completamente visible e interactiva, ocurre en cuestión de segundos o incluso milisegundos, gracias a la eficiencia de esta arquitectura fundamental.</p>
`,
        duration: 30,
      },
      {
        id: '1.2',
        title: 'HTML básico: etiquetas, listas, tablas, enlaces',
        content: '<h2>Estructura con HTML</h2><p>Aprende las etiquetas fundamentales de HTML para estructurar contenido web.</p><pre><code class="language-html">&lt;h1&gt;Título&lt;/h1&gt;\n&lt;p&gt;Un párrafo de texto.&lt;/p&gt;</code></pre>',
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
          '<h2>Estilos con CSS</h2><p>Aprende a seleccionar elementos HTML y aplicarles estilos. </p><pre><code class="language-css">p {\n  color: blue;\n  font-size: 16px;\n}</code></pre>',
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
  }
]
    