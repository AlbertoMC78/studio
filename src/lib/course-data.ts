
export interface CourseClass {
  id: string;
  title: string;
  content: string;
  duration: number; // in minutes
}

export interface CourseModule {
  id: string;
  title:string;
  objective: string;
  classes: CourseClass[];
  project: {
    title: string;
    description: string;
  };
  quizId?: string;
}

export const courseData: CourseModule[] = [
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
          '<h2>El Viaje de una Página Web: Del Clic a la Pantalla</h2>\n<p>Cada vez que visitas un sitio web, desencadenas una serie de eventos rapidísimos y complejos a través de una red global. La arquitectura que lo hace posible se conoce como el <strong>modelo Cliente-Servidor</strong>. Es la columna vertebral de la World Wide Web.</p>\n\n<h3>1. Los Actores Principales</h3>\n<ul>\n  <li><strong>El Cliente (Tu Navegador):</strong> Es el software en tu dispositivo (Chrome, Firefox, Safari) que actúa como tu agente en la web. Su trabajo es solicitar, recibir e interpretar (renderizar) la información para que puedas verla y interactuar con ella.</li>\n  <li><strong>El Servidor:</strong> Es un ordenador potente, siempre encendido y conectado a internet, cuyo propósito es "servir" contenido cuando un cliente lo solicita. Almacena los archivos (HTML, CSS, JavaScript, imágenes), ejecuta lógica de negocio y se conecta a bases de datos.</li>\n</ul>\n\n<h3>2. El Protocolo de Comunicación: HTTP/S</h3>\n<p>Cliente y servidor necesitan un lenguaje común para entenderse. Este lenguaje es el <strong>Protocolo de Transferencia de Hipertexto (HTTP)</strong>. Su versión segura, <strong>HTTPS</strong>, encripta la comunicación, lo cual es el estándar hoy en día.</p>\n<ul>\n    <li><strong>Petición (Request):</strong> El cliente envía una petición HTTP al servidor. Por ejemplo: <code>GET /index.html</code>, que significa "dame el archivo index.html". Otros métodos comunes son <code>POST</code> (para enviar datos), <code>PUT</code> (para actualizar) y <code>DELETE</code> (para borrar). La petición también incluye cabeceras (headers) con metadatos, como el tipo de navegador que usas.</li>\n    <li><strong>Respuesta (Response):</strong> El servidor procesa la petición y devuelve una respuesta HTTP, que incluye un <strong>código de estado</strong> (como <code>200 OK</code> si todo fue bien, o <code>404 Not Found</code> si no encontró el recurso) y el contenido solicitado (el archivo HTML, por ejemplo).</li>\n</ul>\n\n<h3>3. Las Direcciones de la Web: IP y DNS</h3>\n<p>Para que tu navegador sepa a qué servidor enviar la petición, necesita su dirección. En internet, las direcciones son numéricas, llamadas <strong>direcciones IP</strong> (ej., <code>172.217.16.142</code>).</p>\n<p>Como recordar números es difícil para los humanos, usamos nombres de dominio (ej., <code>google.com</code>). El <strong>Sistema de Nombres de Dominio (DNS)</strong> actúa como la agenda telefónica de internet, traduciendo los nombres de dominio que escribimos a la dirección IP del servidor correspondiente.</p>\n\n<h3>4. El Proceso Completo (Paso a Paso)</h3>\n<ol>\n  <li><strong>Escribes la URL:</strong> Ingresas <code>https://www.ejemplo.com</code> en tu navegador y presionas Enter.</li>\n  <li><strong>Traducción DNS:</strong> Tu navegador pregunta a un servidor DNS: "¿Cuál es la IP de <code>www.ejemplo.com</code>?". El DNS responde con la dirección IP del servidor.</li>\n  <li><strong>Petición HTTP/S:</strong> Tu navegador establece una conexión con el servidor en esa IP y le envía una petición HTTP/S pidiendo la página principal.</li>\n  <li><strong>Procesamiento del Servidor:</strong> El servidor recibe la petición. Busca el archivo HTML solicitado. Si es una página dinámica (ej., un perfil de red social), puede que necesite consultar una base de datos y construir el HTML sobre la marcha.</li>\n  <li><strong>Respuesta del Servidor:</strong> El servidor envía el archivo HTML de vuelta a tu navegador como parte de la respuesta HTTP/S.</li>\n  <li><strong>Renderizado (Fase 1 - HTML):</strong> El navegador comienza a leer el HTML. Entiende la estructura: aquí va un título, aquí un párrafo, aquí una imagen.</li>\n  <li><strong>Peticiones Adicionales:</strong> Mientras lee el HTML, el navegador encuentra referencias a otros archivos, como hojas de estilo CSS (<code>&lt;link rel="stylesheet" href="style.css"&gt;</code>) y scripts de JavaScript (<code>&lt;script src="app.js"&gt;&lt;/script&gt;</code>). Realiza peticiones HTTP/S adicionales para cada uno de estos archivos.</li>\n  <li><strong>Renderizado (Fase 2 - CSS y JS):</strong> A medida que llegan los archivos CSS y JavaScript, el navegador los aplica. El CSS le da estilo y apariencia visual a la estructura HTML. El JavaScript añade interactividad, como animaciones, validación de formularios o la capacidad de cargar más contenido sin recargar la página.</li>\n</ol>\n<p>Este ciclo completo, desde la petición inicial hasta que la página es completamente visible e interactiva, ocurre en cuestión de segundos o incluso milisegundos, gracias a la eficiencia de esta arquitectura fundamental.</p>\n<hr/>\n<h3>Recursos Complementarios</h3>\n<h4>Videos Recomendados</h4>\n<ul>\n    <li><strong>(Español) ¿Cómo funciona Internet?</strong> - Un excelente resumen visual de Platzi: <a href="https://www.youtube.com/watch?v=JExO2i-QW4A" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>\n    <li><strong>(Inglés) How the Web Works: A Primer for Newcomers to Web Development</strong> - Una explicación clara y concisa de MDN: <a href="https://www.youtube.com/watch?v=hJHvdBlSxug" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>\n</ul>\n<h4>Lecturas Oficiales</h4>\n<ul>\n    <li><strong>MDN Web Docs: ¿Cómo funciona la web?</strong> - La documentación de referencia para desarrolladores: <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/How_the_Web_works" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>\n</ul>',
        duration: 30,
      },
      {
        id: '1.2',
        title: 'HTML básico: etiquetas, listas, tablas, enlaces',
        content:
          '<h2>Los Cimientos de la Web: Estructura con HTML</h2>\n<p>HTML (HyperText Markup Language) no es un lenguaje de programación; es un <strong>lenguaje de marcado</strong>. Su única función es describir y estructurar el contenido de una página web. Le dice al navegador qué es un título, qué es un párrafo, dónde va una imagen, etc.</p>\n\n<h3>1. La Anatomía de una Etiqueta HTML</h3>\n<p>Casi todo en HTML está compuesto por <strong>elementos</strong>, que generalmente consisten en una etiqueta de apertura y una de cierre, envolviendo el contenido.</p>\n<pre><code class="language-html">&lt;p&gt;Este es el contenido de un párrafo.&lt;/p&gt;\n&lt;!--  |   |                       |  --&gt;\n&lt;!--  1   2                       3  --&gt;</code></pre>\n<ol>\n  <li><strong>Etiqueta de apertura:</strong> <code>&lt;p&gt;</code>. Indica el inicio de un elemento.</li>\n  <li><strong>Contenido:</strong> El texto o los otros elementos que van dentro.</li>\n  <li><strong>Etiqueta de cierre:</strong> <code>&lt;/p&gt;</code>. Igual que la de apertura, pero con una barra inclinada (<code>/</code>). Indica el final del elemento.</li>\n</ol>\n<p>Algunos elementos son "vacíos" o "auto-cerrados", lo que significa que no tienen contenido ni etiqueta de cierre, como la etiqueta de imagen <code>&lt;img&gt;</code> o la de salto de línea <code>&lt;br&gt;</code>.</p>\n\n<h3>2. Estructura Básica de un Documento HTML</h3>\n<p>Todo archivo <code>.html</code> sigue una estructura fundamental:</p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html lang="es"&gt;\n  &lt;head&gt;\n    &lt;meta charset="UTF-8"&gt;\n    &lt;title&gt;Título de la Página&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;!-- El contenido visible va aquí --&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<ul>\n    <li><code>&lt;!DOCTYPE html&gt;</code>: Declaración que define que el documento es HTML5.</li>\n    <li><code>&lt;html&gt;</code>: El elemento raíz de la página.</li>\n    <li><code>&lt;head&gt;</code>: Contiene metadatos (información sobre el documento), como el título (<code>&lt;title&gt;</code>) que aparece en la pestaña del navegador, enlaces a CSS y el juego de caracteres.</li>\n    <li><code>&lt;body&gt;</code>: Contiene todo el contenido visible de la página web.</li>\n</ul>\n\n<h3>3. Etiquetas Esenciales para Contenido</h3>\n\n<h4>Títulos (Headings)</h4>\n<p>Se usan para titular secciones y subsecciones. Van del <code>&lt;h1&gt;</code> (el más importante) al <code>&lt;h6&gt;</code> (el menos importante).</p>\n\n<h4>Enlaces (Anchors)</h4>\n<p>La etiqueta <code>&lt;a&gt;</code> crea hipervínculos. El atributo <code>href</code> (hypertext reference) especifica la URL de destino.</p>\n\n<h4>Listas</h4>\n<p>Hay dos tipos principales: desordenadas (<code>&lt;ul&gt;</code>) y ordenadas (<code>&lt;ol&gt;</code>), con ítems (<code>&lt;li&gt;</code>).</p>\n\n<h4>Tablas</h4>\n<p>Se usan para mostrar datos tabulares con <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, y <code>&lt;td&gt;</code>.</p>',
        duration: 45,
      },
      {
        id: '1.3',
        title: 'HTML semántico y buenas prácticas',
        content: '<h2>La Magia del Contexto: HTML Semántico</h2>\n<p>El <strong>HTML Semántico</strong> consiste en elegir la etiqueta HTML correcta según el <strong>significado</strong> de su contenido, no por cómo se ve. Usar etiquetas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code> y <code>&lt;footer&gt;</code> es crucial por tres razones:</p><ol><li><strong>Accesibilidad:</strong> Ayuda a los lectores de pantalla a entender la estructura de tu página.</li><li><strong>SEO:</strong> Ayuda a los motores de búsqueda a indexar mejor tu contenido.</li><li><strong>Mantenibilidad:</strong> Hace que tu código sea más legible y fácil de entender.</li></ol><p>Siempre usa la etiqueta más apropiada para el contenido y sigue una jerarquía de títulos lógica (h1, h2, h3...).</p>',
        duration: 30,
      },
      {
        id: '1.4',
        title: 'CSS básico: selectores, propiedades, colores',
        content: '<h2>Dando Vida a la Web: Introducción a CSS</h2><p>CSS (Cascading Style Sheets) es el lenguaje que usamos para dar estilo a los elementos HTML. La forma recomendada de usarlo es a través de una hoja de estilos externa enlazada en el <code>&lt;head&gt;</code> del HTML.</p><h3>Sintaxis de una Regla CSS</h3><p><code>selector { propiedad: valor; }</code></p><h3>Selectores Fundamentales</h3><ul><li><strong>Etiqueta:</strong> <code>p { ... }</code> (selecciona todos los párrafos)</li><li><strong>Clase:</strong> <code>.mi-clase { ... }</code> (selecciona todos los elementos con <code>class="mi-clase"</code>). Es el más usado.</li><li><strong>ID:</strong> <code>#mi-id { ... }</code> (selecciona el único elemento con <code>id="mi-id"</code>).</li></ul><h3>Propiedades Básicas</h3><p>Controlan el color del texto (<code>color</code>), el fondo (<code>background-color</code>), el tamaño de fuente (<code>font-size</code>), la familia de fuente (<code>font-family</code>) y la alineación del texto (<code>text-align</code>).</p>',
        duration: 45,
      },
      {
        id: '1.5',
        title: 'Box model y layout',
        content: '<h2>El Concepto Fundamental de Diseño Web: El Modelo de Caja (Box Model)</h2>\n<p>En CSS, todo elemento es una caja rectangular. El <strong>Modelo de Caja</strong> define su tamaño y está compuesto por cuatro partes, de adentro hacia afuera: <strong>Contenido</strong>, <strong>Padding</strong> (relleno interior), <strong>Border</strong> (borde) y <strong>Margin</strong> (margen exterior).</p><p>Para simplificar los cálculos de tamaño, es una práctica estándar y fundamental usar la siguiente regla en tu CSS:</p><pre><code class="language-css">* {\n  box-sizing: border-box;\n}</code></pre><p>Esta regla asegura que cuando defines un <code>width</code> y <code>height</code> para un elemento, estas dimensiones incluyan el padding y el borde, haciendo la maquetación mucho más intuitiva.</p>',
        duration: 50,
      },
       {
        id: '1.6',
        title: 'Flexbox y Grid',
        content: '<h2>Layouts Modernos: Flexbox y Grid</h2>\n<p>Flexbox y Grid son tecnologías de CSS para organizar elementos.</p><h3>Flexbox (1D)</h3><p>Diseñado para alinear elementos en una sola dimensión (fila o columna). Se activa con <code>display: flex;</code>. Propiedades clave del contenedor son <code>justify-content</code> (alineación en el eje principal) y <code>align-items</code> (alineación en el eje cruzado).</p><h3>CSS Grid (2D)</h3><p>Diseñado para maquetación en dos dimensiones (filas y columnas). Se activa con <code>display: grid;</code>. Propiedades clave son <code>grid-template-columns</code>, <code>grid-template-rows</code> y <code>gap</code>.</p><h3>¿Cuándo usar cuál?</h3><ul><li><strong>Flexbox:</strong> Para componentes y alineación (barras de navegación, tarjetas).</li><li><strong>Grid:</strong> Para el layout general de la página.</li></ul>',
        duration: 60,
      },
      {
        id: '1.7',
        title: 'Introducción a Git y GitHub',
        content: '<h2>La Red de Seguridad del Desarrollador: Git y GitHub</h2>\n<p>El <strong>Control de Versiones</strong> es un sistema que registra los cambios en archivos a lo largo del tiempo, permitiéndote recuperar versiones específicas. Es como una máquina del tiempo para tu código.</p><h3>Git vs. GitHub</h3><ul><li><strong>Git:</strong> Es el software de control de versiones distribuido que se ejecuta en tu máquina. Te permite hacer "commits" (instantáneas de tu código) de forma local.</li><li><strong>GitHub:</strong> Es una plataforma web que aloja repositorios de Git. Sirve como copia de seguridad en la nube, facilita la colaboración con otros desarrolladores y actúa como tu portafolio profesional.</li></ul>',
        duration: 45,
      },
      {
        id: '1.8',
        title: 'Git básico: commits, ramas, merge',
        content: '<h2>Manos a la Obra: Comandos Esenciales de Git</h2>\n<p>El flujo de trabajo básico que usarás constantemente.</p><ol><li><strong><code>git init</code>:</strong> Inicializa un repositorio en tu proyecto.</li><li><strong><code>git status</code>:</strong> Revisa el estado de tus archivos.</li><li><strong><code>git add .</code>:</strong> Prepara todos los cambios para ser guardados (staging).</li><li><strong><code>git commit -m "Mensaje descriptivo"</code>:</strong> Crea una instantánea permanente de tus cambios.</li><li><strong><code>git branch nombre-rama</code>:</strong> Crea una nueva línea de desarrollo.</li><li><strong><code>git checkout nombre-rama</code>:</strong> Te mueves a esa rama para trabajar.</li><li><strong><code>git merge nombre-rama</code>:</strong> Fusiona los cambios de una rama en tu rama actual.</li><li><strong><code>git push origin main</code>:</strong> Sube tus commits a GitHub.</li></ol>',
        duration: 60,
      },
    ],
    project: {
      title: 'Página de perfil personal',
      description:
        'Crea tu propia página de perfil usando HTML y CSS, y súbela a un repositorio de GitHub.',
    },
    quizId: 'quiz_1',
  },
  {
    id: '2',
    title: 'MÓDULO 2: Programación con JavaScript',
    objective: 'Dominar JavaScript para lógica de programación, manipulación del DOM y trabajo con datos',
    classes: [
      {
        id: '2.1',
        title: 'Variables, tipos de datos y operadores',
        content: '<h2>La Verdad sobre JavaScript: Tipos, Coerción y Comparaciones</h2><p>JavaScript es un lenguaje de "tipado dinámico". Es crucial entender sus tipos primitivos (String, Number, Boolean, null, undefined) y cómo funciona la <strong>coerción de tipo</strong> (conversión automática de tipos).</p><p>Para evitar errores, la regla de oro es usar siempre el operador de <strong>igualdad estricta (<code>===</code>)</strong> y el de desigualdad estricta (<code>!==</code>), que comparan valor y tipo sin realizar coerción.</p><pre><code class="language-javascript">console.log(5 == "5");  // true (débil, con coerción)\nconsole.log(5 === "5"); // false (estricta, sin coerción)</code></pre>',
        duration: 45,
      },
      {
        id: '2.2',
        title: 'Condicionales y bucles',
        content: '<h2>Tomando Decisiones y Repitiendo Tareas</h2><h3>Condicionales</h3><p>Permiten que tu código ejecute diferentes bloques según una condición. Los principales son <code>if</code>, <code>else if</code>, y <code>else</code>.</p><pre><code class="language-javascript">if (edad >= 18) {\n  console.log("Es mayor de edad");\n} else {\n  console.log("Es menor de edad");\n}</code></pre><h3>Bucles</h3><p>Permiten ejecutar un bloque de código múltiples veces. Los más comunes son:</p><ul><li><strong><code>for</code>:</strong> Cuando sabes de antemano cuántas veces quieres repetir.</li><li><strong><code>while</code>:</strong> Cuando la repetición depende de una condición que puede cambiar.</li><li><strong><code>for...of</code>:</strong> Para iterar sobre los elementos de un array.</li></ul>',
        duration: 45,
      },
      {
        id: '2.3',
        title: 'Funciones y scope',
        content: '<h2>Bloques de Código Reutilizables: Funciones</h2><p>Una <strong>función</strong> es un bloque de código diseñado para realizar una tarea particular. Se define una vez y se puede ejecutar (llamar) muchas veces.</p><h3>Scope (Ámbito)</h3><p>El <strong>scope</strong> determina la accesibilidad de las variables. En JavaScript moderno (con <code>let</code> y <code>const</code>), las variables tienen un ámbito de bloque (solo existen dentro de las llaves <code>{}</code> donde fueron declaradas). Esto ayuda a prevenir errores y a mantener el código organizado.</p>',
        duration: 50,
      },
      {
        id: '2.4',
        title: 'Arreglos y objetos',
        content: '<h2>Colecciones de Datos</h2><h3>Arreglos (Arrays)</h3><p>Son listas ordenadas de valores. Puedes acceder a sus elementos por su índice (empezando en 0).</p><pre><code class="language-javascript">const frutas = ["manzana", "plátano", "naranja"];\nconsole.log(frutas[1]); // "plátano"</code></pre><h3>Objetos (Objects)</h3><p>Son colecciones de pares clave-valor. Se usan para agrupar datos relacionados.</p><pre><code class="language-javascript">const usuario = {\n  nombre: "Alberto",\n  edad: 30,\n  esEstudiante: true\n};\nconsole.log(usuario.nombre); // "Alberto"</code></pre>',
        duration: 50,
      },
      {
        id: '2.5',
        title: 'Manipulación del DOM',
        content: '<h2>JavaScript y el Navegador: El DOM</h2><p>El <strong>DOM (Document Object Model)</strong> es una representación en forma de árbol de tu documento HTML. JavaScript puede interactuar con este árbol para leer y modificar el contenido, la estructura y el estilo de una página de forma dinámica.</p><h3>Métodos Clave</h3><ul><li><strong><code>document.getElementById("miId")</code>:</strong> Selecciona un elemento por su ID.</li><li><strong><code>document.querySelector(".miClase")</code>:</strong> Selecciona el primer elemento que coincida con un selector de CSS.</li><li><strong><code>elemento.textContent = "Nuevo texto"</code>:</strong> Cambia el texto de un elemento.</li><li><strong><code>elemento.style.color = "blue"</code>:</strong> Cambia el estilo CSS de un elemento.</li><li><strong><code>elemento.classList.add("nueva-clase")</code>:</strong> Añade una clase CSS.</li></ul>',
        duration: 60,
      },
      {
        id: '2.6',
        title: 'Eventos y formularios',
        content: '<h2>Haciendo Páginas Interactivas: Eventos</h2><p>Los <strong>eventos</strong> son acciones que ocurren en el navegador, como un clic de un usuario, el envío de un formulario o la finalización de la carga de una imagen. Podemos "escuchar" estos eventos y ejecutar código en respuesta.</p><pre><code class="language-javascript">const miBoton = document.getElementById("miBoton");\n\nmiBoton.addEventListener("click", function() {\n  alert("¡Botón presionado!");\n});</code></pre><p>Para los formularios, es común escuchar el evento <code>submit</code> y usar <code>event.preventDefault()</code> para evitar que la página se recargue, permitiéndonos manejar los datos con JavaScript.</p>',
        duration: 60,
      },
       {
        id: '2.7',
        title: 'JSON y almacenamiento local',
        content: '<h2>Persistencia de Datos en el Navegador</h2><h3>JSON (JavaScript Object Notation)</h3><p>Es un formato de texto ligero para el intercambio de datos. A pesar de su nombre, es independiente del lenguaje, pero su sintaxis es un subconjunto de la de los objetos de JavaScript.</p><ul><li><strong><code>JSON.stringify(objeto)</code>:</strong> Convierte un objeto de JavaScript a una cadena JSON.</li><li><strong><code>JSON.parse(cadenaJson)</code>:</strong> Convierte una cadena JSON a un objeto de JavaScript.</li></ul><h3>Almacenamiento Local (Local Storage)</h3><p>Permite guardar pares clave-valor en el navegador de forma persistente (no se borran al cerrar la pestaña). Solo puede almacenar cadenas de texto, por lo que es común usar JSON para guardar objetos.</p><pre><code class="language-javascript">const usuario = { nombre: "Alberto" };\nlocalStorage.setItem("datosUsuario", JSON.stringify(usuario));\nconst usuarioGuardado = JSON.parse(localStorage.getItem("datosUsuario"));</code></pre>',
        duration: 45,
      },
      {
        id: '2.8',
        title: 'Fetch API: consumir datos de APIs',
        content: '<h2>Obteniendo Datos del Mundo Exterior: Fetch API</h2><p>La <strong>Fetch API</strong> es la forma moderna en JavaScript de realizar peticiones de red (por ejemplo, a una API REST) para obtener o enviar datos. Se basa en <strong>Promesas</strong>.</p><p>El patrón más común utiliza <code>async/await</code> para escribir código asíncrono que parece síncrono, facilitando su lectura y manejo de errores.</p><pre><code class="language-javascript">async function obtenerUsuarios() {\n  try {\n    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");\n    if (!respuesta.ok) {\n      throw new Error("Error en la red");\n    }\n    const datos = await respuesta.json();\n    console.log(datos);\n  } catch (error) {\n    console.error("Hubo un problema:", error);\n  }\n}\n\nobtenerUsuarios();</code></pre>',
        duration: 60,
      },
    ],
    project: {
      title: 'Aplicación de tareas (ToDo List)',
      description:
        'Crea una ToDo List funcional que permita añadir, eliminar y marcar tareas como completadas, guardando los datos en el Local Storage.',
    },
    quizId: 'quiz_2',
  },
  {
    id: '3',
    title: 'MÓDULO 3: Desarrollo Front-End con Frameworks',
    objective: 'Aprender React y fundamentos de otros frameworks populares',
    classes: [
      {
        id: '3.1',
        title: '¿Qué es un framework y por qué usar React?',
        content: '<h2>El Ecosistema Moderno: Librerías vs. Frameworks</h2><p>Cuando construyes una aplicación web compleja, no quieres reinventar la rueda. Las <strong>librerías</strong> (como React) te dan herramientas específicas que tú controlas, mientras que los <strong>frameworks</strong> (como Next.js o Angular) te dan un plan de construcción completo que guía la estructura de tu app.</p><h3>¿Por qué React?</h3><ol><li><strong>Arquitectura Basada en Componentes:</strong> Divide la UI en piezas reutilizables.</li><li><strong>UI Declarativa:</strong> Le dices a React cómo quieres que se vea la UI para un estado determinado, y él se encarga del resto.</li><li><strong>Virtual DOM:</strong> Optimiza las actualizaciones del DOM para un rendimiento superior.</li></ol>',
        duration: 45,
      },
      {
        id: '3.2',
        title: 'Componentes, props y JSX',
        content: '<h2>Los Bloques de Construcción: Componentes, JSX y Props</h2>\n<p>El corazón de React es el <strong>componente</strong>, una función de JavaScript (con nombre en mayúscula) que devuelve <strong>JSX</strong>.</p><h3>JSX</h3><p>Es una extensión de sintaxis que permite escribir "HTML" en JavaScript. Se transforma en llamadas a funciones de React.</p><h3>Props</h3><p>Son la forma de pasar datos de un componente padre a uno hijo. Son inmutables y fluyen en una sola dirección.</p><pre><code class="language-jsx">// Padre\n<SaludoPersonalizado nombre="Alberto" />\n\n// Hijo\nfunction SaludoPersonalizado(props) {\n  return <h1>Hola, {props.nombre}</h1>;\n}</code></pre>',
        duration: 90,
      },
      {
        id: '3.3',
        title: 'State y ciclo de vida',
        content: '<h2>La Memoria de los Componentes: State</h2><p>Para que un componente pueda recordar información que cambia con el tiempo (como un contador o el texto de un input), usamos el <strong>estado (state)</strong>. En los componentes de función, esto se gestiona con el Hook <strong><code>useState</code></strong>.</p><pre><code class="language-jsx">import { useState } from "react";\n\nfunction Contador() {\n  const [contador, setContador] = useState(0); // 0 es el valor inicial\n\n  // Al llamar a setContador, React vuelve a renderizar el componente\n  return <button onClick={() => setContador(contador + 1)}>{contador}</button>\n}</code></pre><p>React solo vuelve a renderizar un componente cuando cambian sus props o su estado.</p>',
        duration: 90,
      },
      {
        id: '3.4',
        title: 'React Router',
        content: '<h2>Navegando en Aplicaciones de Página Única (SPA) con Next.js</h2>\n<p>En las aplicaciones web modernas, no queremos que la página se recargue completamente cada vez que el usuario navega a una nueva sección. Este concepto se llama <strong>Single Page Application (SPA)</strong>, y el proceso de cambiar las vistas sin recargar la página se conoce como <strong>enrutamiento del lado del cliente</strong>.</p>\n<h3>El Enrutamiento Basado en Archivos de Next.js</h3>\n<p>Mientras que en React puro se usa una librería como <code>react-router-dom</code>, <strong>Next.js integra su propio sistema de enrutamiento potente y optimizado</strong>, conocido como el <strong>App Router</strong>. Este sistema se basa en el sistema de archivos, lo que lo hace muy intuitivo:</p>\n<ul>\n    <li><strong>Las carpetas definen las rutas:</strong> Cada carpeta dentro del directorio <code>src/app/</code> se convierte en un segmento de la URL. Por ejemplo, <code>src/app/dashboard/settings/page.tsx</code> se accederá en <code>http://tuweb.com/dashboard/settings</code>.</li>\n    <li><strong>El archivo <code>page.tsx</code> es la UI:</strong> El componente de React exportado desde un archivo <code>page.tsx</code> es lo que se renderizará para esa ruta específica.</li>\n    <li><strong>El archivo <code>layout.tsx</code> define la UI compartida:</strong> Un layout es un componente que envuelve a varias páginas. Es perfecto para elementos comunes como la barra de navegación (<code>Sidebar</code>), el pie de página o cualquier estructura que se repita. El layout del directorio raíz (<code>src/app/layout.tsx</code>) aplica a toda la aplicación.</li>\n</ul>\n<h3>Navegación entre Páginas</h3>\n<p>Para navegar entre las rutas de tu aplicación sin una recarga completa, Next.js proporciona el componente <strong><code>&lt;Link&gt;</code></strong>. Debes usarlo siempre en lugar de la etiqueta <code>&lt;a&gt;</code> tradicional para la navegación interna.</p>\n<pre><code class="language-jsx">\nimport Link from "next/link";\n\nfunction Navegacion() {\n  return (\n    <nav>\n      <Link href="/">Inicio</Link>\n      <Link href="/dashboard">Ir al Dashboard</Link>\n    </nav>\n  );\n}\n</code></pre>\n<p>Next.js automáticamente pre-carga el código de la página enlazada cuando el componente <code>&lt;Link&gt;</code> aparece en la pantalla, haciendo que la navegación se sienta instantánea.</p>',
        duration: 60,
      },
      {
        id: '3.5',
        title: 'Hooks (useState, useEffect, custom hooks)',
        content: '<h2>Enganchándose al Poder de React: Hooks Esenciales</h2>\n<p>Los <strong>Hooks</strong> son funciones especiales que te permiten "engancharte" a las características de React desde tus componentes de función. Son la base del desarrollo moderno en React.</p>\n\n<h3>1. <code>useState</code>: La Memoria del Componente</h3>\n<p>Como ya vimos, <code>useState</code> es el hook que nos permite añadir estado (variables que persisten entre renderizados) a nuestros componentes. Es la piedra angular de la interactividad.</p>\n\n<h3>2. <code>useEffect</code>: Manejando Efectos Secundarios</h3>\n<p>Un componente React idealmente solo calcula y devuelve JSX. Cualquier otra acción que interactúe con el "mundo exterior" es un <strong>efecto secundario</strong>. Ejemplos comunes incluyen:</p>\n<ul>\n    <li>Realizar una petición a una API (<code>fetch</code>).</li>\n    <li>Manipular directamente el DOM (aunque debe evitarse en lo posible).</li>\n    <li>Establecer suscripciones (como a un temporizador con <code>setInterval</code>).</li>\n</ul>\n<p><code>useEffect</code> te permite ejecutar estos efectos después de que el componente se haya renderizado. Su sintaxis es: <code>useEffect(funcionDelEfecto, [dependencias])</code>.</p>\n<ul>\n    <li><strong>La función de efecto:</strong> Es el código que se ejecutará.</li>\n    <li><strong>El array de dependencias:</strong> Controla <em>cuándo</em> se vuelve a ejecutar el efecto. Si una de las variables en este array cambia entre renderizados, el efecto se ejecuta de nuevo. Si se deja vacío (<code>[]</code>), el efecto se ejecuta solo una vez, cuando el componente se "monta" (aparece por primera vez).</li>\n</ul>\n\n<h3>3. Hooks Personalizados (Custom Hooks): La Clave de la Reutilización</h3>\n<p>Cuando te encuentras repitiendo la misma lógica de estado y efectos (por ejemplo, lógica para hacer un fetch de datos, o para leer del Local Storage) en varios componentes, puedes extraer esa lógica a tu propia función. Si esa función utiliza otros hooks (como <code>useState</code> o <code>useEffect</code>), se convierte en un <strong>Hook Personalizado</strong>. Por convención, sus nombres siempre deben empezar con <code>use</code>.</p>\n<p>En nuestro proyecto, <code>useLocalStorage</code> es un ejemplo perfecto de un hook personalizado. Encapsula toda la lógica de leer y escribir en el almacenamiento local del navegador, permitiéndonos usarlo en cualquier componente con una sola línea de código.</p>\n<pre><code class="language-jsx">\n// En use-local-storage.ts (nuestro custom hook)\nexport function useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(...);\n  useEffect(...);\n  return [storedValue, setStoredValue];\n}\n\n// En cualquier componente\nfunction MiComponente() {\n  const [nombre, setNombre] = useLocalStorage("nombre", "Invitado");\n  // ...\n}\n</code></pre>',
        duration: 120,
      },
      {
        id: '3.6',
        title: 'Manejo de formularios y validaciones',
        content: '<h2>La Interfaz entre Usuario y Aplicación: Formularios en React</h2>\n<p>El patrón estándar y más robusto para manejar formularios en React se conoce como <strong>componentes controlados</strong>. Esto significa que el estado del componente React se convierte en la "única fuente de verdad" para los datos del formulario.</p>\n\n<h3>¿Cómo funciona?</h3>\n<ol>\n    <li>Se declara una variable de estado con <code>useState</code> para cada campo del formulario.</li>\n    <li>La prop <code>value</code> de cada input se enlaza directamente a su correspondiente variable de estado.</li>\n    <li>Se define una función manejadora (handler) para el evento <code>onChange</code> de cada input. Esta función se encarga de llamar a la función `set` del estado para actualizar el valor con cada pulsación de tecla (<code>e.target.value</code>).</li>\n</ol>\n\n<pre><code class="language-jsx">\nfunction FormularioSimple() {\n  const [nombre, setNombre] = useState("");\n\n  const handleSubmit = (e) => {\n    e.preventDefault(); // Previene la recarga de la página\n    alert(`Hola, ${nombre}`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>Nombre:</label>\n      <input \n        type="text" \n        value={nombre} \n        onChange={(e) => setNombre(e.target.value)} \n      />\n      <button type="submit">Enviar</button>\n    </form>\n  );\n}\n</code></pre>\n\n<h3>Validación y Librerías</h3>\n<p>Manejar formularios más complejos con múltiples campos, validaciones y mensajes de error puede volverse tedioso. Para estos casos, la comunidad de React ha creado librerías excelentes que simplifican enormemente el proceso.</p>\n<p>En nuestro proyecto, utilizamos <strong>React Hook Form</strong> en conjunto con <strong>Zod</strong>:</p>\n<ul>\n    <li><strong>React Hook Form:</strong> Es una librería de alto rendimiento para la gestión de formularios. Optimiza los re-renderizados y simplifica el manejo del estado del formulario.</li>\n    <li><strong>Zod:</strong> Es una librería para la declaración y validación de esquemas de datos. Defines la "forma" que deben tener tus datos y Zod se encarga de validar que se cumpla, generando errores descriptivos.</li>\n</ul>\n<p>La combinación de ambas (a través del resolver <code>@hookform/resolvers/zod</code>) es una práctica profesional estándar para construir formularios robustos, seguros y fáciles de mantener.</p>',
        duration: 90,
      },
      {
        id: '3.7',
        title: 'Introducción a Vue.js',
        content: '<h2>Una Alternativa Progresiva: Introducción a Vue.js</h2><p>Vue.js es otro framework de JavaScript extremadamente popular, conocido por su curva de aprendizaje más suave y su excelente documentación. Características principales:</p><ul><li><strong>Sintaxis Basada en Plantillas:</strong> Utiliza plantillas que se asemejan al HTML clásico, lo que puede resultar muy familiar para desarrolladores que vienen de ese mundo.</li><li><strong>Reactividad:</strong> Su sistema de reactividad actualiza la UI automáticamente cuando los datos cambian, de forma muy eficiente.</li><li><strong>Componentes de un Solo Archivo (.vue):</strong> Encapsulan HTML, CSS y JavaScript en un único archivo, promoviendo una excelente organización.</li><li><strong>Progresivo:</strong> Puedes usar Vue para controlar solo una pequeña parte de una página existente o para construir una SPA completa desde cero.</li></ul>',
        duration: 60,
      },
      {
        id: '3.8',
        title: 'Introducción a Angular',
        content: '<h2>El Framework Todo Incluido: Introducción a Angular</h2><p>Angular (desarrollado y mantenido por Google) no es solo una librería, sino una "plataforma" completa y opinada para construir aplicaciones a gran escala y nivel empresarial. Características principales:</p><ul><li><strong>Basado en TypeScript:</strong> Impone el uso de TypeScript desde el principio, aportando robustez, autocompletado y detección temprana de errores.</li><li><strong>Arquitectura Opinada:</strong> Tiene una estructura muy definida (Módulos, Componentes, Servicios, Inyección de Dependencias), lo que es ideal para estandarizar el código en equipos grandes.</li><li><strong>Inyección de Dependencias:</strong> Un patrón de diseño central en el framework que facilita la gestión del código, su reutilización y, sobre todo, el testing.</li><li><strong>Ecosistema Completo:</strong> Angular viene con soluciones integradas para enrutamiento, cliente HTTP, gestión de formularios y más.</li></ul>',
        duration: 60,
      },
    ],
    project: {
      title: 'App de notas con React',
      description:
        'Desarrolla una aplicación de notas completa utilizando React, manejando estado, componentes y routing.',
    },
    quizId: 'quiz_3',
  },
  {
    id: '4',
    title: 'MÓDULO 4: Desarrollo Back-End con Next.js',
    objective: 'Crear APIs, manejar datos y lógica de servidor directamente en Next.js',
    classes: [
      { 
        id: '4.1', 
        title: 'Introducción al desarrollo back-end', 
        content: '<h2>El Paradigma Full-Stack de Next.js</h2>\n<p>Tradicionalmente, el "back-end" era un servidor completamente separado, construido con tecnologías como Node.js/Express, Python/Django o Java/Spring. Su responsabilidad era manejar la lógica de negocio, la autenticación y la comunicación con la base de datos, exponiendo los datos a través de una API REST o GraphQL.</p>\n<p>Next.js, con la introducción del <strong>App Router</strong>, revoluciona este concepto. Permite escribir código de back-end directamente dentro de tu proyecto de React, difuminando las fronteras entre el front-end y el back-end.</p>\n<h3>Componentes de Servidor (Server Components)</h3>\n<p>Por defecto, todos los componentes en el App Router de Next.js son <strong>Componentes de Servidor</strong>. Esto significa que:</p>\n<ul>\n    <li>Se renderizan en el servidor, no en el navegador del cliente.</li>\n    <li>Pueden acceder directamente a recursos de back-end (como bases de datos o APIs internas) de forma segura, sin necesidad de una petición <code>fetch</code> explícita. ¡Tus claves de API y credenciales nunca se envían al cliente!</li>\n    <li>No se incluye su código JavaScript en el paquete que se envía al navegador, lo que resulta en páginas mucho más ligeras y rápidas.</li>\n    <li>No pueden usar estado (<code>useState</code>) ni efectos (<code>useEffect</code>), ya que no existen en el entorno del cliente.</li>\n</ul>\n<h3>Componentes de Cliente (Client Components)</h3>\n<p>Para añadir interactividad (manejar clics, estado, etc.), necesitas un <strong>Componente de Cliente</strong>. Para convertir un componente, simplemente añades la directiva <code>"use client";</code> al principio del archivo.</p>\n<p>Este modelo te permite construir aplicaciones increíblemente rápidas por defecto, y "optar por la interactividad" solo donde sea necesario.</p>', 
        duration: 60 
      },
      { 
        id: '4.2', 
        title: 'Route Handlers: Creando Endpoints de API', 
        content: '<h2>Construyendo tu Propia API con Next.js: Route Handlers</h2>\n<p>Si bien los Server Components son excelentes para obtener datos para renderizar una UI, a menudo necesitas crear endpoints de API específicos. Por ejemplo, para que tu aplicación móvil consuma datos, para exponer una API pública, o para manejar webhooks de servicios de terceros. Aquí es donde entran los <strong>Route Handlers</strong>.</p>\n<p>Los Route Handlers son la forma que tiene Next.js de permitirte crear APIs RESTful personalizadas, reemplazando la necesidad de un servidor Express separado para muchos casos de uso.</p>\n<h3>¿Cómo Funcionan?</h3>\n<p>La convención es simple: creas un archivo llamado <code>route.ts</code> (o <code>.js</code>) dentro de cualquier carpeta en tu directorio <code>app</code>. La ruta del archivo se mapea directamente a una URL. Dentro de este archivo, exportas funciones asíncronas nombradas según los verbos HTTP que quieres manejar: <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>, etc.</p>\n<pre><code class="language-typescript">\n// En el archivo: src/app/api/hello/route.ts\n// Este código crea un endpoint en: http://tuweb.com/api/hello\n\nimport { NextResponse } from \'next/server\';\n\nexport async function GET(request: Request) {\n  // Puedes acceder a la petición, headers, etc.\n  return NextResponse.json({ message: "Hola, Mundo!" });\n}\n\nexport async function POST(request: Request) {\n  const body = await request.json(); // Leer el cuerpo de la petición\n  console.log(body);\n  return NextResponse.json({ received: true, data: body });\n}\n</code></pre>\n<h3><code>NextRequest</code> y <code>NextResponse</code></h3>\n<p>Next.js extiende las APIs nativas de <code>Request</code> y <code>Response</code> con objetos propios, <code>NextRequest</code> y <code>NextResponse</code>, que te dan más control. <code>NextResponse.json()</code>, por ejemplo, es una forma conveniente de devolver respuestas JSON con el `Content-Type` correcto automáticamente.</p><p>Los Route Handlers son la pieza clave para construir un back-end completo y robusto sin salir del ecosistema de Next.js, permitiéndote manejar cualquier tipo de lógica de servidor que necesites.</p>', 
        duration: 90 
      },
      { 
        id: '4.3', 
        title: 'Server Actions: Mutaciones de Datos Seguras', 
        content: '<h2>La Forma Moderna de Escribir Datos: Server Actions</h2>\n<p>Tradicionalmente, para enviar datos desde un formulario al servidor (por ejemplo, para crear un nuevo usuario o guardar una nota), se creaba un endpoint de API (con un Route Handler) que aceptara una petición <code>POST</code>, y luego se realizaba una llamada <code>fetch</code> desde el cliente a ese endpoint.</p>\n<p>Next.js simplifica radicalmente este proceso con las <strong>Server Actions</strong>. Son funciones de servidor que puedes llamar directamente desde tus componentes de cliente, especialmente desde formularios, sin tener que escribir endpoints de API manualmente.</p>\n<h3>¿Cómo Funcionan?</h3>\n<ol>\n    <li><strong>Definir la Acción:</strong> Creas una función asíncrona en un archivo de servidor (o directamente en un Server Component) y le añades la directiva <code>"use server";</code> al principio del archivo o de la función. Esta función puede recibir datos, como los de un formulario.</li>\n    <li><strong>Invocar desde el Cliente:</strong> En tu componente de cliente, en lugar de manejar el evento <code>onSubmit</code> del formulario con una función propia, pasas la Server Action directamente a la prop <code>action</code> del formulario.</li>\n</ol>\n<pre><code class="language-typescript">\n// En un archivo como `src/actions/user-actions.ts`\n"use server";\n\nexport async function createUser(formData: FormData) {\n  const name = formData.get("name") as string;\n  // Aquí iría la lógica para guardar el usuario en la base de datos\n  console.log("Creando usuario:", name);\n}\n</code></pre>\n<pre><code class="language-jsx">\n// En un Componente de Cliente (ej: `src/app/page.tsx` con "use client")\nimport { createUser } from "@/actions/user-actions";\n\nexport default function UserForm() {\n  return (\n    <form action={createUser}>\n      <input type="text" name="name" />\n      <button type="submit">Crear Usuario</button>\n    </form>\n  );\n}\n</code></pre>\n<p>Next.js se encarga automáticamente de crear y llamar a un endpoint RPC (Remote Procedure Call) privado, protegiéndolo de ataques comunes. Las Server Actions son el método recomendado para manejar mutaciones de datos en aplicaciones Next.js modernas, ya que reducen el código repetitivo y mejoran la experiencia de desarrollo.</p>', 
        duration: 90 
      },
      { 
        id: '4.4', 
        title: 'Conectando a Bases de Datos', 
        content: '<h2>La Persistencia de los Datos: Conexión a Bases de Datos con ORMs</h2>\n<p>Una aplicación real necesita guardar sus datos de forma permanente. Para ello, nos conectamos a una <strong>base de datos</strong>. Escribir consultas a la base de datos directamente en el lenguaje que esta entiende (como SQL) puede ser propenso a errores, difícil de mantener y vulnerable a ataques (inyección de SQL).</p>\n<h3>El Rol del ORM (Object-Relational Mapper)</h3>\n<p>Para solucionar esto, utilizamos una herramienta llamada <strong>ORM</strong>. Un ORM es una capa de abstracción que "mapea" las tablas de nuestra base de datos a objetos y clases en nuestro lenguaje de programación (TypeScript). Esto nos permite interactuar con la base de datos usando métodos y objetos familiares, en lugar de escribir consultas manualmente.</p>\n<p><strong>Prisma</strong> es el ORM de nueva generación líder en el ecosistema de TypeScript. Sus ventajas son:</p>\n<ul>\n    <li><strong>Seguridad de Tipos (Type-Safety):</strong> Si intentas acceder a un campo que no existe o pasar un tipo de dato incorrecto, TypeScript te avisará antes de que el código llegue a producción.</li>\n    <li><strong>Autocompletado:</strong> El editor de código te sugerirá los modelos y operaciones disponibles, agilizando el desarrollo.</li>\n    <li><strong>Gestión de Migraciones:</strong> Prisma facilita la evolución del esquema de tu base de datos a lo largo del tiempo de forma controlada.</li>\n</ul>\n\n<h3>Flujo de Trabajo Básico (Teórico)</h3>\n<ol>\n    <li><strong>Definir el Esquema:</strong> En un archivo <code>schema.prisma</code>, defines tus modelos de datos de forma declarativa.</li>\n    <li><strong>Migrar la Base de Datos:</strong> Con un comando, Prisma compara tu esquema con la base de datos y genera automáticamente las migraciones necesarias para sincronizarlas.</li>\n    <li><strong>Usar el Cliente de Prisma:</strong> Prisma genera un cliente de base de datos totalmente tipado que puedes importar y usar en tu código de servidor para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar).</li>\n</ol>\n\n<p><strong>Importante:</strong> Toda la comunicación con la base de datos a través del ORM debe ocurrir exclusivamente en el <strong>entorno del servidor</strong> (Server Components, Route Handlers, Server Actions). Las credenciales de la base de datos nunca deben ser expuestas al navegador del cliente.</p>', 
        duration: 120 
      },
      { 
        id: '4.5', 
        title: 'Autenticación en Next.js con Servicios Gestionados', 
        content: '<h2>Protegiendo tu Aplicación: Autenticación en Next.js</h2>\n<p>Toda aplicación seria necesita un sistema para identificar y verificar a sus usuarios. Construir un sistema de autenticación desde cero es complejo y arriesgado. Implica manejar contraseñas de forma segura (hashing y salting), gestionar tokens de sesión, protegerse contra ataques de fuerza bruta, implementar la recuperación de contraseñas, etc.</p>\n<h3>La Ventaja de los Servicios Gestionados (BaaS)</h3>\n<p>Afortunadamente, existen servicios de "Backend as a Service" (BaaS) como <strong>Firebase Authentication</strong>, Auth0 o Supabase Auth que resuelven este problema por nosotros. Utilizar un servicio gestionado es la práctica recomendada en el desarrollo moderno por varias razones:</p>\n<ul>\n    <li><strong>Seguridad:</strong> Delega la responsabilidad de la seguridad a expertos. Estos servicios son auditados constantemente y están protegidos contra las vulnerabilidades más comunes.</li>\n    <li><strong>Ahorro de Tiempo:</strong> Te permite centrarte en la lógica de tu aplicación en lugar de reinventar la rueda de la autenticación.</li>\n    <li><strong>Funcionalidades Adicionales:</strong> Ofrecen de serie inicio de sesión con proveedores sociales (Google, GitHub, etc.), autenticación multi-factor, y mucho más.</li>\n</ul>\n<h3>Flujo de Autenticación con Firebase en Nuestra App</h3>\n<p>Nuestra aplicación ya está integrada con Firebase Authentication. El flujo es el siguiente:</p>\n<ol>\n    <li><strong>Interacción en el Cliente:</strong> En la página de login (<code>/login</code>), el usuario introduce su email y contraseña.</li>\n    <li><strong>SDK de Firebase:</strong> Utilizamos el SDK de cliente de Firebase (<code>firebase/auth</code>) para enviar estas credenciales de forma segura a los servidores de Firebase a través de funciones como <code>signInWithEmailAndPassword</code>.</li>\n    <li><strong>Verificación de Firebase:</strong> Firebase verifica las credenciales en su base de datos segura.</li>\n    <li><strong>Gestión de Sesión:</strong> Si las credenciales son correctas, Firebase devuelve un token al cliente. El SDK de Firebase se encarga de almacenar este token de forma segura en el navegador y de gestionar la sesión del usuario.</li>\n    <li><strong>Estado de Autenticación:</strong> Nuestro <code>AuthContext</code> utiliza el hook <code>onAuthStateChanged</code>, que actúa como un "oyente". Este observador notifica a nuestra aplicación en tiempo real si el usuario ha iniciado sesión, ha cerrado sesión o su estado ha cambiado, permitiéndonos redirigir al usuario o actualizar la UI en consecuencia.</li>\n</ol>\n<p>Este enfoque nos da un sistema de autenticación robusto y de nivel de producción con un esfuerzo de implementación mínimo por nuestra parte.</p>', 
        duration: 120 
      },
      { 
        id: '4.6', 
        title: 'Middleware: Modificando Peticiones', 
        content: '<h2>El Guardián de tus Rutas: Middleware en Next.js</h2>\n<p>El <strong>Middleware</strong> en Next.js es una función que se ejecuta <em>antes</em> de que una petición llegue a su destino final (una página o un endpoint de API). Esto lo convierte en un punto de control centralizado y extremadamente potente para implementar lógica transversal que afecta a múltiples rutas.</p>\n<h3>¿Por Qué es Tan Importante?</h3>\n<p>Imagina que tienes 10 páginas en tu aplicación que solo deberían ser accesibles para usuarios autenticados. Sin middleware, tendrías que añadir la misma lógica de comprobación de sesión en cada una de esas 10 páginas. Con el middleware, lo defines una sola vez.</p>\n<h3>Casos de Uso Principales:</h3>\n<ul>\n    <li><strong>Autenticación y Autorización:</strong> Es el caso de uso más común. El middleware puede comprobar si existe un token de sesión válido en las cookies de la petición. Si no existe o no es válido, puede redirigir al usuario a la página de login. Esto protege tus rutas de forma eficiente.</li>\n    <li><strong>Redirecciones:</strong> Para marketing, seguimiento o cambios de estructura en tu web.</li>\n    <li><strong>Reescritura de URLs:</strong> Para presentar URLs más limpias a los usuarios (ej. <code>/perfil</code>) que internamente apuntan a otra ruta (ej. <code>/usuario/123</code>).</li>\n    <li><strong>A/B Testing:</strong> Mostrar diferentes versiones de una página a diferentes segmentos de usuarios.</li>\n    <li><strong>Internacionalización (i18n):</strong> Detectar la preferencia de idioma del usuario y redirigirlo a la versión correcta de la página (ej. <code>/en</code> o <code>/es</code>).</li>\n</ul>\n<h3>Implementación</h3>\n<p>Se crea un único archivo llamado <code>middleware.ts</code> (o <code>.js</code>) en la raíz de tu proyecto (al mismo nivel que `src`). Dentro, exportas una función `middleware` y, opcionalmente, un objeto `config` con un `matcher` para especificar a qué rutas se debe aplicar.</p>\n<pre><code class="language-typescript">\nimport { NextResponse } from \'next/server\'\nimport type { NextRequest } from \'next/server\'\n \nexport function middleware(request: NextRequest) {\n  // Lógica aquí... por ejemplo, comprobar si hay una cookie de sesión.\n  // Si no está autenticado, podemos redirigir:\n  // return NextResponse.redirect(new URL(\'/login\', request.url))\n}\n \n// El matcher define a qué rutas se aplicará el middleware\nexport const config = {\n  matcher: \'/dashboard/:path*\', // Protegerá todas las rutas bajo /dashboard\n}\n</code></pre>\n<p>El middleware es una pieza fundamental para la arquitectura de una aplicación Next.js segura y bien estructurada, permitiendo mantener la lógica de las páginas limpia y centrada en su contenido.</p>', 
        duration: 60 
      },
    ],
    project: {
      title: 'API de Tareas con Route Handlers y Server Actions',
      description: 'Crear los endpoints de API y las acciones de servidor para gestionar las tareas del proyecto ToDo List del módulo 2, pero esta vez del lado del servidor.',
    },
    quizId: 'quiz_4'
  },
  {
    id: '5',
    title: 'MÓDULO 5: DevOps, Testing y Deployment',
    objective: 'Preparar entornos profesionales, CI/CD, Docker y pruebas unitarias',
    classes: [
      { id: '5.1', title: 'Introducción a DevOps', content: '<h2>Cerrando el Círculo: De tu Código a Millones de Usuarios</h2>\n<p>Hasta ahora, hemos escrito código que funciona en nuestra máquina. Pero, ¿cómo llevamos esa aplicación al mundo real para que millones de personas puedan usarla de forma fiable y segura? Aquí es donde entra <strong>DevOps</strong>.</p>\n<p>DevOps no es una herramienta, sino una <strong>cultura y un conjunto de prácticas</strong> que unen el desarrollo de software (<strong>Dev</strong>) y las operaciones de TI (<strong>Ops</strong>). El objetivo es automatizar y mejorar el proceso de construcción, prueba y lanzamiento de software, haciéndolo más rápido y más fiable.</p>\n<h3>Los Pilares de DevOps</h3>\n<ol>\n    <li><strong>Planificación:</strong> Definir qué se va a construir.</li>\n    <li><strong>Codificación:</strong> El trabajo de desarrollo que ya hemos hecho.</li>\n    <li><strong>Construcción (Build):</strong> Compilar el código y empaquetarlo en un formato ejecutable.</li>\n    <li><strong>Pruebas (Testing):</strong> Automatizar las pruebas para asegurar que el nuevo código no rompe nada.</li>\n    <li><strong>Lanzamiento (Release):</strong> El acto de preparar una nueva versión para su despliegue.</li>\n    <li><strong>Despliegue (Deploy):</strong> Poner el software en producción.</li>\n    <li><strong>Operación y Monitorización:</strong> Mantener la aplicación funcionando y observar su rendimiento y errores.</li>\n</ol>\n<h3>¿Por Qué es Esencial para un Desarrollador Full Stack?</h3>\n<p>Un verdadero desarrollador Full Stack no solo escribe código. Entiende el ciclo de vida completo de la aplicación. Saber de DevOps te permite:</p>\n<ul>\n    <li><strong>Ser Autónomo:</strong> Puedes desplegar y mantener tus propias aplicaciones.</li>\n    <li><strong>Colaborar Eficazmente:</strong> Entiendes los desafíos de los equipos de operaciones y puedes escribir código que sea más fácil de desplegar y mantener.</li>\n    <li><strong>Mejorar la Calidad:</strong> La automatización de pruebas y despliegues reduce los errores humanos y aumenta la confianza en el producto.</li>\n</ul>\n<p>En este módulo, nos centraremos en las herramientas prácticas que hacen posible la cultura DevOps: Docker para la contenerización, GitHub Actions para la Integración y Despliegue Continuos (CI/CD) y Jest para el testing automatizado.</p>', duration: 60 },
      { id: '5.2', title: 'Docker básico', content: '<h2>Empaquetando tu Aplicación: Introducción a Docker</h2>\n<p>Una vez que tu aplicación funciona en tu máquina, ¿cómo te aseguras de que funcionará exactamente igual en la máquina de otro desarrollador, en un servidor de pruebas o en producción? La respuesta es la <strong>contenedorización</strong>, y la herramienta estándar para ello es <strong>Docker</strong>.</p>\n<h3>¿Qué es un Contenedor?</h3>\n<p>Un contenedor es una unidad estándar de software que empaqueta el código y todas sus dependencias para que la aplicación se ejecute de forma rápida y fiable en cualquier entorno informático. Resuelve el clásico problema de "en mi máquina funciona".</p>\n<h3>Imagen vs. Contenedor</h3>\n<p>Es crucial entender esta analogía:</p>\n<ul>\n    <li>Una <strong>Imagen Docker</strong> es una plantilla inmutable y de solo lectura con instrucciones para crear un contenedor. Es como el plano de una casa.</li>\n    <li>Un <strong>Contenedor Docker</strong> es una instancia en ejecución de una imagen. Es la casa construida a partir de ese plano. Puedes tener múltiples contenedores (casas) funcionando a partir de la misma imagen (plano).</li>\n</ul>\n<h3>El Dockerfile: La Receta de tu Imagen</h3>\n<p>Un <code>Dockerfile</code> es un archivo de texto que contiene todos los comandos, en orden, necesarios para construir una imagen Docker determinada. Le dice a Docker cómo ensamblar tu aplicación, paso a paso:</p>\n<ol>\n    <li>Empezar desde una imagen base (ej. una imagen oficial de Node.js).</li>\n    <li>Establecer el directorio de trabajo.</li>\n    <li>Copiar los archivos de tu aplicación.</li>\n    <li>Instalar las dependencias (ej. <code>npm install</code>).</li>\n    <li>Exponer un puerto (ej. el puerto 3000 para Next.js).</li>\n    <li>Definir el comando que se ejecutará cuando se inicie el contenedor (ej. <code>npm start</code>).</li>\n</ol>\n<h3>El Flujo de Trabajo Básico</h3>\n<p>El ciclo de vida es simple:</p>\n<ol>\n    <li>Escribes tu <code>Dockerfile</code>.</li>\n    <li>Ejecutas <code>docker build -t mi-app .</code> para crear la imagen a partir del Dockerfile y le pones una etiqueta (tag).</li>\n    <li>Ejecutas <code>docker run -p 3000:3000 mi-app</code> para iniciar un contenedor a partir de tu imagen, mapeando el puerto de tu máquina al puerto del contenedor.</li>\n</ol>', duration: 90 },
      { id: '5.3', title: 'Docker Compose y entornos escalables', content: '<h2>Orquestando Múltiples Servicios: Docker Compose</h2>\n<p>Las aplicaciones reales a menudo se componen de varios servicios que necesitan trabajar juntos: tu aplicación web, una base de datos, un servicio de caché, etc. Gestionar estos contenedores individualmente con <code>docker run</code> es tedioso e insostenible.</p>\n<p><strong>Docker Compose</strong> es una herramienta para definir y ejecutar aplicaciones Docker de múltiples contenedores. Con un único archivo de configuración <code>YAML</code>, puedes orquestar todo tu entorno con un solo comando.</p>\n<h3>El Archivo `docker-compose.yml`</h3>\n<p>Este archivo es el corazón de Docker Compose. En él, defines los <strong>servicios</strong> que componen tu aplicación. Cada servicio corresponde a un contenedor.</p>\n<pre><code class="language-yaml">\n# docker-compose.yml\nversion: \'3.8\'\n\nservices:\n  webapp:\n    build: . # Construye la imagen desde el Dockerfile en el directorio actual\n    ports:\n      - "3000:3000"\n    volumes:\n      - .:/app # Monta el código local en el contenedor para desarrollo en vivo\n    networks:\n      - app-network\n\n  database:\n    image: "postgres:13" # Usa una imagen oficial de PostgreSQL\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: password\n    volumes:\n      - db-data:/var/lib/postgresql/data # Persiste los datos de la base de datos\n    networks:\n      - app-network\n\nvolumes:\n  db-data:\n\nnetworks:\n  app-network:\n</code></pre>\n<h3>Conceptos Clave</h3>\n<ul>\n    <li><strong>Servicios (`services`):</strong> Cada pieza de tu stack (tu app, la BD). Compose inicia un contenedor por cada servicio.</li>\n    <li><strong>Redes (`networks`):</strong> Compose crea una red privada por defecto. Los servicios dentro de esta red pueden comunicarse entre sí usando el nombre del servicio como si fuera un nombre de host (ej., desde `webapp` puedes hacer una petición a `http://database:5432`).</li>\n    <li><strong>Volúmenes (`volumes`):</strong> Son el mecanismo para persistir datos fuera del ciclo de vida del contenedor. Esencial para las bases de datos.</li>\n</ul>\n<h3>Comandos Esenciales</h3>\n<ul>\n    <li><strong><code>docker-compose up</code>:</strong> Construye, (re)crea, inicia y adjunta los contenedores para un conjunto de servicios. Con el flag <code>-d</code> se ejecuta en segundo plano.</li>\n    <li><strong><code>docker-compose down</code>:</strong> Detiene y elimina los contenedores, redes, y volúmenes definidos en el archivo.</li>\n</ul>', duration: 90 },
      { id: '5.4', title: 'GitHub Actions y CI/CD', content: '<h2>La Automatización Definitiva: CI/CD con GitHub Actions</h2>\n<p>Hemos visto cómo empaquetar nuestra aplicación. Ahora, vamos a automatizar el proceso para que cada vez que subamos código nuevo, este se pruebe y se prepare para el despliegue sin intervención manual. Esto es <strong>CI/CD (Integración Continua y Despliegue Continuo)</strong>.</p>\n<h3>¿Qué es CI/CD?</h3>\n<ul>\n    <li><strong>Integración Continua (CI):</strong> Es la práctica de fusionar todos los cambios de código de los desarrolladores en una rama principal de forma automática y frecuente. Cada fusión desencadena una <strong>construcción (build)</strong> y una serie de <strong>pruebas automatizadas</strong>. El objetivo es detectar problemas de integración lo antes posible.</li>\n    <li><strong>Despliegue Continuo (CD):</strong> Es el siguiente paso. Cada cambio que pasa todas las pruebas de CI se despliega automáticamente en producción.</li>\n</ul>\n<h3>GitHub Actions: CI/CD Integrado en tu Repositorio</h3>\n<p><strong>GitHub Actions</strong> es la herramienta que nos permite definir estos flujos de trabajo de automatización directamente en nuestro repositorio de GitHub. Se configuran mediante archivos <code>YAML</code> en una carpeta especial llamada <code>.github/workflows</code>.</p>\n<h3>Conceptos Clave de un Workflow</h3>\n<ul>\n    <li><strong>Workflow:</strong> El proceso automatizado completo.</li>\n    <li><strong>Events (Eventos):</strong> El disparador que inicia el workflow (ej. un <code>push</code> a la rama <code>main</code>, o la creación de un <code>pull request</code>).</li>\n    <li><strong>Jobs (Trabajos):</strong> Un conjunto de pasos que se ejecutan en un mismo entorno virtual (llamado "runner").</li>\n    <li><strong>Steps (Pasos):</strong> Una tarea individual que puede ejecutar un comando o una "acción".</li>\n    <li><strong>Actions (Acciones):</strong> Piezas de código reutilizables que realizan tareas complejas (ej. <code>actions/checkout</code> para descargar tu código, o <code>actions/setup-node</code> para configurar Node.js).</li>\n</ul>\n<h3>Ejemplo de Workflow Básico para CI</h3>\n<p>Este es un ejemplo de un archivo <code>.github/workflows/ci.yml</code> para una aplicación Next.js:</p>\n<pre><code class="language-yaml">\nname: Node.js CI\n\non:\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "main" ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n    - uses: actions/checkout@v3\n    - name: Use Node.js 20.x\n      uses: actions/setup-node@v3\n      with:\n        node-version: "20.x"\n        cache: \'npm\'\n    - run: npm ci\n    - run: npm run build\n    - run: npm test\n</code></pre>\n<p>Este workflow se ejecuta en cada push o pull request a `main`, descarga el código, instala las dependencias de forma limpia, construye la aplicación y ejecuta las pruebas. Si algún paso falla, el workflow se detiene y notifica el error, impidiendo que el código defectuoso llegue a producción.</p>', duration: 120 },
      { id: '5.5', title: 'Testing con Jest y Supertest', content: '', duration: 120 },
      { id: '5.6', title: 'Entornos de staging y producción', content: '', duration: 60 },
    ],
    project: {
      title: 'App full stack dockerizada y desplegada',
      description: 'Contenerizar la aplicación completa en Docker y crear un pipeline de CI/CD con GitHub Actions para desplegarla automáticamente.',
    },
    quizId: 'quiz_5'
  },
   {
    id: '6',
    title: 'MÓDULO 6: Proyecto Intermedio',
    objective: 'Construir una app completa full-stack y desplegarla',
    classes: [],
    project: {
      title: 'Sistema de gestión de usuarios (CRUD, login, dashboard, etc.)',
      description: 'Entregable: Repositorio Git + Deploy en Render/Vercel + Documentación',
    }
  },
  {
    id: '7',
    title: 'MÓDULO 7: Ciberseguridad para Desarrolladores Web',
    objective: 'Prevenir ataques y proteger aplicaciones web',
    classes: [
      { id: '7.1', title: 'Principios de ciberseguridad', content: '', duration: 60 },
      { id: '7.2', title: 'OWASP Top 10', content: '', duration: 90 },
      { id: '7.3', title: 'XSS, CSRF, SQL Injection', content: '', duration: 90 },
      { id: '7.4', title: 'Seguridad en autenticación y JWT', content: '', duration: 120 },
      { id: '7.5', title: 'HTTPS, CORS, headers seguros', content: '', duration: 120 },
      { id: '7.6', title: 'Hardening de aplicaciones', content: '', duration: 60 },
    ],
    project: {
      title: 'Análisis y hardening de una app',
      description: 'Realizar un análisis de seguridad de una aplicación y aplicar las mejoras necesarias.',
    },
    quizId: 'quiz_7',
  },
   {
    id: '8',
    title: 'MÓDULO 8: Introducción a la Inteligencia Artificial',
    objective: 'Aplicar IA a productos web',
    classes: [
      { id: '8.1', title: '¿Qué es IA y cómo se usa en la web?', content: '', duration: 60 },
      { id: '8.2', title: 'Introducción a Python y modelos preentrenados', content: '', duration: 90 },
      { id: '8.3', title: 'API de OpenAI y otras herramientas', content: '', duration: 90 },
      { id: '8.4', title: 'Procesamiento de lenguaje natural (NLP)', content: '', duration: 120 },
      { id: '8.5', title: 'Aplicaciones prácticas: chatbot con IA', content: '', duration: 120 },
    ],
    project: {
      title: 'Web app con integración de IA',
      description: 'Crear una aplicación web que integre una funcionalidad de IA, como un asistente o un sistema de recomendaciones.',
    },
    quizId: 'quiz_8',
  },
  {
    id: '9',
    title: 'MÓDULO 9: Web3 y Blockchain',
    objective: 'Entender la web descentralizada y crear apps sobre blockchain',
    classes: [
      { id: '9.1', title: 'Fundamentos de Web3 y contratos inteligentes', content: '', duration: 60 },
      { id: '9.2', title: 'Wallets y redes blockchain', content: '', duration: 90 },
      { id: '9.3', title: 'Smart contracts con Solidity', content: '', duration: 90 },
      { id: '9.4', title: 'DApps con React + Web3.js', content: '', duration: 120 },
      { id: '9.5', title: 'NFT y marketplaces', content: '', duration: 120 },
    ],
    project: {
      title: 'Aplicación descentralizada con smart contract',
      description: 'Desarrollar una dApp que interactúe con un smart contract en una red de prueba.',
    },
    quizId: 'quiz_9',
  },
  {
    id: '10',
    title: 'MÓDULO 10: Portafolio, Freelancing y Monetización',
    objective: 'Preparar al estudiante para trabajar, emprender y vender sus servicios',
    classes: [
      { id: '10.1', title: 'Cómo crear un portafolio impactante', content: '', duration: 60 },
      { id: '10.2', title: 'Plataformas para encontrar trabajo (Upwork, Freelancer, etc.)', content: '', duration: 90 },
      { id: '10.3', title: 'Marca personal y networking', content: '', duration: 90 },
      { id: '10.4', title: 'Monetizar tus aplicaciones', content: '', duration: 120 },
      { id: '10.5', title: 'Estrategias básicas de marketing digital para programadores', content: '', duration: 120 },
    ],
    project: {
      title: 'Lanzamiento de tu marca personal',
      description: 'Crear un portafolio profesional, perfiles en plataformas de freelancing y una estrategia de monetización.',
    },
    quizId: 'quiz_10',
  },
  {
    id: '11',
    title: 'MÓDULO 11: Proyecto Final',
    objective: 'Desarrollar un proyecto profesional completo',
    classes: [],
    project: {
      title: 'App full stack con IA o Web3 integrada',
      description: 'Incluye: diseño, frontend, backend, seguridad, deploy, documentación y defensa oral del proyecto.',
    }
  },
  {
    id: '12',
    title: 'MÓDULO 12: Nivel Master',
    objective: 'Dominar arquitectura avanzada, patrones y escalabilidad',
    classes: [
      { id: '12.1', title: 'Arquitectura limpia', content: '', duration: 60 },
      { id: '12.2', title: 'Monolitos vs Microservicios', content: '', duration: 90 },
      { id: '12.3', title: 'Patrones de diseño (Factory, Singleton, etc.)', content: '', duration: 90 },
      { id: '12.4', title: 'Webs de alto tráfico y escalabilidad', content: '', duration: 120 },
      { id: '12.5', title: 'Testing avanzado y automatización', content: '', duration: 120 },
    ],
    project: {
      title: 'Refactorización y optimización de un proyecto existente',
      description: 'Aplicar patrones de diseño y arquitecturas avanzadas para mejorar un proyecto anterior.',
    },
    quizId: 'quiz_12',
  },
  {
    id: '13',
    title: 'MÓDULO 13: Nivel Doctorado (Investigación e innovación)',
    objective: 'Conectar ciencia, ética y futuro de la programación',
    classes: [
      { id: '13.1', title: 'Ética en la IA y tecnología', content: '', duration: 60 },
      { id: '13.2', title: 'Filosofía computacional y pensamiento crítico', content: '', duration: 90 },
      { id: '13.3', title: 'Tecnologías emergentes (Quantum computing, computación evolutiva)', content: '', duration: 90 },
      { id: '13.4', title: 'Publicación de papers y proyectos open-source', content: '', duration: 120 },
    ],
    project: {
      title: 'Propuesta de innovación tecnológica o tesis técnica',
      description: 'Desarrollar una propuesta de investigación o un proyecto open-source innovador.',
    },
    quizId: 'quiz_13',
  },
];

