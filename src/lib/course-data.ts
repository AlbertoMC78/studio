
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
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) ¿Cómo funciona Internet?</strong> - Un excelente resumen visual de Platzi: <a href="https://www.youtube.com/watch?v=sS_o38i2A_w" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Inglés) How the Web Works: A Primer for Newcomers to Web Development</strong> - Una explicación clara y concisa de MDN: <a href="https://www.youtube.com/watch?v=hJHvdBlSxug" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Inglés, Técnico) HTTP Crash Course & Core Concepts</strong> - Un video más profundo de Traversy Media: <a href="https://www.youtube.com/watch?v=iYM2zFP3Zn0" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: ¿Cómo funciona la web?</strong> - La documentación de referencia para desarrolladores: <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/How_the_Web_works" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
</ul>
`,
        duration: 30,
      },
      {
        id: '1.2',
        title: 'HTML básico: etiquetas, listas, tablas, enlaces',
        content: `<h2>Los Cimientos de la Web: Estructura con HTML</h2>
<p>HTML (HyperText Markup Language) no es un lenguaje de programación; es un <strong>lenguaje de marcado</strong>. Su única función es describir y estructurar el contenido de una página web. Le dice al navegador qué es un título, qué es un párrafo, dónde va una imagen, etc.</p>

<h3>1. La Anatomía de una Etiqueta HTML</h3>
<p>Casi todo en HTML está compuesto por <strong>elementos</strong>, que generalmente consisten en una etiqueta de apertura y una de cierre, envolviendo el contenido.</p>
<pre><code class="language-html">&lt;p&gt;Este es el contenido de un párrafo.&lt;/p&gt;
&lt;!--  |   |                       |  --&gt;
&lt;!--  1   2                       3  --&gt;</code></pre>
<ol>
  <li><strong>Etiqueta de apertura:</strong> <code>&lt;p&gt;</code>. Indica el inicio de un elemento.</li>
  <li><strong>Contenido:</strong> El texto o los otros elementos que van dentro.</li>
  <li><strong>Etiqueta de cierre:</strong> <code>&lt;/p&gt;</code>. Igual que la de apertura, pero con una barra inclinada (<code>/</code>). Indica el final del elemento.</li>
</ol>
<p>Algunos elementos son "vacíos" o "auto-cerrados", lo que significa que no tienen contenido ni etiqueta de cierre, como la etiqueta de imagen <code>&lt;img&gt;</code> o la de salto de línea <code>&lt;br&gt;</code>.</p>

<h3>2. Estructura Básica de un Documento HTML</h3>
<p>Todo archivo <code>.html</code> sigue una estructura fundamental:</p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Título de la Página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- El contenido visible va aquí --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<ul>
    <li><code>&lt;!DOCTYPE html&gt;</code>: Declaración que define que el documento es HTML5.</li>
    <li><code>&lt;html&gt;</code>: El elemento raíz de la página.</li>
    <li><code>&lt;head&gt;</code>: Contiene metadatos (información sobre el documento), como el título (<code>&lt;title&gt;</code>) que aparece en la pestaña del navegador, enlaces a CSS y el juego de caracteres.</li>
    <li><code>&lt;body&gt;</code>: Contiene todo el contenido visible de la página web.</li>
</ul>

<h3>3. Etiquetas Esenciales para Contenido</h3>

<h4>Títulos (Headings)</h4>
<p>Se usan para titular secciones y subsecciones. Van del <code>&lt;h1&gt;</code> (el más importante) al <code>&lt;h6&gt;</code> (el menos importante).</p>
<pre><code class="language-html">&lt;h1&gt;Título Principal del Artículo&lt;/h1&gt;
&lt;h2&gt;Una sección importante&lt;/h2&gt;
&lt;p&gt;Texto de esta sección...&lt;/p&gt;</code></pre>

<h4>Párrafos (Paragraphs)</h4>
<p>La etiqueta <code>&lt;p&gt;</code> se usa para bloques de texto.</p>

<h4>Enlaces (Anchors)</h4>
<p>La etiqueta <code>&lt;a&gt;</code> crea hipervínculos. El atributo <code>href</code> (hypertext reference) especifica la URL de destino.</p>
<pre><code class="language-html">&lt;a href="https://www.google.com"&gt;Ir a Google&lt;/a&gt;</code></pre>

<h4>Listas</h4>
<p>Hay dos tipos principales:</p>
<ul>
    <li><strong>Listas desordenadas (<code>&lt;ul&gt;</code>):</strong> Para ítems sin un orden particular. Cada ítem se define con <code>&lt;li&gt;</code>.</li>
    <li><strong>Listas ordenadas (<code>&lt;ol&gt;</code>):</strong> Para ítems secuenciales (1, 2, 3...). Cada ítem también se define con <code>&lt;li&gt;</code>.</li>
</ul>
<pre><code class="language-html">&lt;h4&gt;Lista de la compra:&lt;/h4&gt;
&lt;ul&gt;
  &lt;li&gt;Leche&lt;/li&gt;
  &lt;li&gt;Pan&lt;/li&gt;
&lt;/ul&gt;

&lt;h4&gt;Pasos para hacer café:&lt;/h4&gt;
&lt;ol&gt;
  &lt;li&gt;Hervir agua&lt;/li&gt;
  &lt;li&gt;Añadir café&lt;/li&gt;
  &lt;li&gt;Servir&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<h4>Tablas</h4>
<p>Se usan para mostrar datos tabulares. Son una estructura de filas y celdas.</p>
<ul>
    <li><code>&lt;table&gt;</code>: Envuelve toda la tabla.</li>
    <li><code>&lt;thead&gt;</code>: Contiene la fila de cabecera.</li>
    <li><code>&lt;tbody&gt;</code>: Contiene el cuerpo de la tabla.</li>
    <li><code>&lt;tr&gt;</code> (table row): Define una fila.</li>
    <li><code>&lt;th&gt;</code> (table header): Define una celda de cabecera.</li>
    <li><code>&lt;td&gt;</code> (table data): Define una celda de datos.</li>
</ul>
<pre><code class="language-html">&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nombre&lt;/th&gt;
      &lt;th&gt;Edad&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Ana&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
<p>Estas etiquetas son los bloques de construcción fundamentales. Dominarlas te permitirá crear la estructura de cualquier página web que imagines.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) Curso HTML5 desde cero</strong> - Un curso completo en video por EDteam: <a href="https://www.youtube.com/watch?v=k2IydkL3_o" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Inglés) HTML Full Course for Beginners</strong> - Un video exhaustivo de Traversy Media: <a href="https://www.youtube.com/watch?v=mJgBOIoGihA" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: HTML basics</strong> - La guía de referencia principal para HTML: <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
</ul>
`,
        duration: 60,
      },
      {
        id: '1.3',
        title: 'HTML semántico y buenas prácticas',
        content:
          `<h2>La Magia del Contexto: HTML Semántico</h2>
<p>Has aprendido a usar etiquetas HTML para estructurar tu contenido. Ahora, demos un paso más allá. El <strong>HTML Semántico</strong> consiste en elegir la etiqueta HTML correcta según el <strong>significado</strong> de su contenido, no por cómo se ve en el navegador.</p>
<p>Piensa en etiquetas como <code>&lt;div&gt;</code> y <code>&lt;span&gt;</code>. Son "no semánticas"; no nos dicen nada sobre el contenido que envuelven. En cambio, etiquetas como <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code> o <code>&lt;article&gt;</code> le dan un propósito claro a su contenido.</p>

<h3>¿Por qué es tan importante?</h3>
<ol>
  <li><strong>Accesibilidad:</strong> Las tecnologías de asistencia, como los lectores de pantalla para personas con discapacidad visual, utilizan la semántica para interpretar y navegar una página. Un lector de pantalla puede anunciar "Navegación principal" si usas una etiqueta <code>&lt;nav&gt;</code>, permitiendo al usuario saltar directamente a ella.</li>
  <li><strong>SEO (Search Engine Optimization):</strong> Los motores de búsqueda como Google analizan la estructura de tu página para entender de qué trata. Usar <code>&lt;h1&gt;</code> para tu título principal y <code>&lt;section&gt;</code> para agrupar contenido relacionado les ayuda a indexar tu sitio de manera más efectiva, lo que puede mejorar tu ranking en los resultados de búsqueda.</li>
  <li><strong>Mantenibilidad:</strong> Un código semántico es más fácil de leer y entender para otros desarrolladores (¡y para tu yo del futuro!). Es auto-documentado.</li>
</ol>

<h3>Las Etiquetas Semánticas de Layout Principales</h3>
<p>HTML5 introdujo un conjunto de etiquetas diseñadas para estructurar las secciones principales de una página web.</p>

<pre><code class="language-html">&lt;body&gt;
  &lt;header&gt;
    &lt;!-- Contenido introductorio o de navegación --&gt;
    &lt;h1&gt;Mi Blog Increíble&lt;/h1&gt;
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;a href="/"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/acerca"&gt;Acerca de&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;!-- El contenido principal y único de esta página --&gt;
    &lt;article&gt;
      &lt;h2&gt;Título del Artículo&lt;/h2&gt;
      &lt;p&gt;Contenido del artículo...&lt;/p&gt;
      &lt;section&gt;
        &lt;h3&gt;Comentarios&lt;/h3&gt;
        &lt;p&gt;Primer comentario...&lt;/p&gt;
      &lt;/section&gt;
    &lt;/article&gt;

    &lt;aside&gt;
      &lt;h3&gt;Publicidad&lt;/h3&gt;
      &lt;p&gt;Contenido relacionado pero no esencial.&lt;/p&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;!-- Pie de página con info de contacto, copyright, etc. --&gt;
    &lt;p&gt;&copy; 2024 Mi Blog Increíble&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
</code></pre>

<ul>
    <li><code>&lt;header&gt;</code>: Representa el encabezado de una página o sección. Suele contener el logo, el título principal y la navegación.</li>
    <li><code>&lt;nav&gt;</code>: Define un bloque de enlaces de navegación principal.</li>
    <li><code>&lt;main&gt;</code>: ¡Crucial! Envuelve el contenido <strong>principal y único</strong> del documento. Solo debe haber uno por página y no debe estar anidado dentro de otras etiquetas de layout como <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>, o <code>&lt;header&gt;</code>.</li>
    <li><code>&lt;article&gt;</code>: Representa un bloque de contenido independiente y auto-contenido que podría existir por sí solo y tener sentido, como una entrada de blog, un post en un foro o un artículo de noticias.</li>
    <li><code>&lt;section&gt;</code>: Agrupa contenido temáticamente relacionado. Es una forma más genérica de agrupar contenido que <code>&lt;article&gt;</code>. Generalmente, una sección debe tener su propio encabezado (h2-h6).</li>
    <li><code>&lt;aside&gt;</code>: Para contenido tangencialmente relacionado con el contenido principal, como barras laterales, publicidad o biografías de autor.</li>
    <li><code>&lt;footer&gt;</code>: Define el pie de página de un documento o sección. Suele contener información de autoría, copyright, enlaces a políticas, etc.</li>
</ul>

<h3>Buenas Prácticas</h3>
<ul>
    <li><strong>No abuses de los <code>&lt;div&gt;</code>:</strong> Antes de usar un <code>&lt;div&gt;</code>, pregúntate: "¿Hay una etiqueta semántica más apropiada para este contenido?". Usa los <code>div</code> principalmente para fines de estilado cuando no hay otra opción.</li>
    <li><strong>Jerarquía de Títulos:</strong> Usa los títulos (<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>) en orden lógico. No saltes de un <code>&lt;h1&gt;</code> a un <code>&lt;h3&gt;</code> porque te gusta cómo se ve. La apariencia se controla con CSS; el HTML es para la estructura.</li>
    <li><strong>El atributo <code>alt</code> en imágenes:</strong> Siempre incluye un texto alternativo (<code>alt</code>) en tus etiquetas <code>&lt;img&gt;</code>. Describe la imagen para usuarios de lectores de pantalla y también se muestra si la imagen no puede cargar.</li>
</ul>
<pre><code class="language-html">&lt;img src="perrito.jpg" alt="Un cachorro de Golden Retriever jugando en la hierba."&gt;
</code></pre>
<p>Adoptar el HTML semántico desde el principio es una de las marcas de un desarrollador web profesional. Tu código será más robusto, accesible y comprensible.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) ¿Qué es HTML Semántico?</strong> - Una explicación clara de CodelyTV: <a href="https://www.youtube.com/watch?v=T1itpKr822o" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: HTML Semántico</strong> - Artículo de referencia sobre el tema: <a href="https://developer.mozilla.org/es/docs/Glossary/Semantics" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
</ul>
`,
        duration: 45,
      },
      {
        id: '1.4',
        title: 'CSS básico: selectores, propiedades, colores',
        content:
          `<h2>Dando Vida a la Web: Introducción a CSS</h2>
<p>Si HTML es el esqueleto de una página web, <strong>CSS (Cascading Style Sheets)</strong> es la piel, la ropa y el maquillaje. Es el lenguaje que usamos para describir cómo se deben presentar visualmente los elementos HTML, controlando todo, desde los colores y las fuentes hasta la disposición de los elementos en la página.</p>

<h3>1. ¿Cómo se conecta el CSS al HTML?</h3>
<p>La forma más común y recomendada es usar una hoja de estilos externa. Esto implica crear un archivo separado con la extensión <code>.css</code> (por ejemplo, <code>style.css</code>) y enlazarlo desde el <code>&lt;head&gt;</code> de tu documento HTML.</p>
<pre><code class="language-html">&lt;!-- En tu archivo index.html --&gt;
&lt;head&gt;
  &lt;title&gt;Mi Página con Estilo&lt;/title&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;</code></pre>
<p>Esta práctica mantiene la estructura (HTML) y la presentación (CSS) separadas, lo que hace que el código sea mucho más fácil de mantener.</p>

<h3>2. La Sintaxis de una Regla CSS</h3>
<p>Una regla CSS consta de dos partes principales: un <strong>selector</strong> y un <strong>bloque de declaración</strong>.</p>
<pre><code class="language-css">h1 {
  color: #0A2342;
  font-size: 2.5rem;
}
/* |  |      |      | */
/* 1  2      3      4 */
</code></pre>
<ol>
  <li><strong>Selector:</strong> Apunta al elemento(s) HTML que quieres estilizar. En este caso, <code>h1</code> selecciona todos los elementos <code>&lt;h1&gt;</code>.</li>
  <li><strong>Bloque de declaración:</strong> Envuelto en llaves <code>{ }</code>, contiene una o más declaraciones.</li>
  <li><strong>Propiedad:</strong> El aspecto que deseas cambiar (ej., <code>color</code>, <code>font-size</code>).</li>
  <li><strong>Valor:</strong> El valor que quieres asignar a la propiedad (ej., <code>#0A2342</code>, <code>2.5rem</code>). Cada declaración termina con un punto y coma <code>;</code>.</li>
</ol>

<h3>3. Selectores Fundamentales</h3>
<p>Para estilizar algo, primero debes seleccionarlo. Aquí están los selectores más básicos:</p>
<ul>
    <li><strong>Selector de Etiqueta (o Tipo):</strong> Selecciona todos los elementos de un tipo específico.</li>
    <pre><code class="language-css">/* Estiliza todos los párrafos */
p {
  line-height: 1.6;
}</code></pre>
    <li><strong>Selector de Clase:</strong> Selecciona todos los elementos que tienen un atributo <code>class</code> específico. Es el selector más versátil y utilizado. Se denota con un punto (<code>.</code>).</li>
    <pre><code class="language-html">&lt;p class="destacado"&gt;Este párrafo es importante.&lt;/p&gt;</code></pre>
    <pre><code class="language-css">.destacado {
  font-weight: bold;
  color: hsl(var(--accent));
}</code></pre>
    <li><strong>Selector de ID:</strong> Selecciona <strong>un único elemento</strong> que tiene un atributo <code>id</code> específico. Un ID debe ser único en toda la página. Se denota con una almohadilla (<code>#</code>).</li>
    <pre><code class="language-html">&lt;header id="encabezado-principal"&gt;...&lt;/header&gt;</code></pre>
    <pre><code class="language-css">#encabezado-principal {
  background-color: #f0f0f0;
}</code></pre>
</ul>

<h3>4. Propiedades Básicas y Colores</h3>
<p>Algunas propiedades comunes para empezar:</p>
<ul>
  <li><code>color</code>: Establece el color del texto.</li>
  <li><code>background-color</code>: Establece el color de fondo de un elemento.</li>
  <li><code>font-size</code>: Define el tamaño del texto.</li>
  <li><code>font-family</code>: Define el tipo de letra (fuente) para el texto.</li>
  <li><code>font-weight</code>: Define el grosor del texto (normal, bold).</li>
  <li><code>text-align</code>: Alinea el texto (left, center, right).</li>
</ul>

<h4>Definición de Colores</h4>
<p>Puedes especificar colores de varias maneras:</p>
<ul>
  <li><strong>Nombres de color:</strong> <code>red</code>, <code>blue</code>, <code>green</code> (limitado).</li>
  <li><strong>HEX:</strong> <code>#RRGGBB</code> (Rojo, Verde, Azul en hexadecimal). Por ejemplo, <code>#FFFFFF</code> es blanco y <code>#0A2342</code> es un azul oscuro.</li>
  <li><strong>RGB:</strong> <code>rgb(rojo, verde, azul)</code> donde cada valor va de 0 a 255. Por ejemplo, <code>rgb(10, 35, 66)</code>.</li>
  <li><strong>HSL (Recomendado):</strong> <code>hsl(tono, saturación, luminosidad)</code>. Es muy intuitivo. El tono es un ángulo en la rueda de color (0-360), la saturación es un porcentaje (0% gris, 100% color puro), y la luminosidad es un porcentaje (0% negro, 100% blanco).</li>
</ul>
<p>CSS es un lenguaje vasto, pero dominar estos fundamentos (cómo enlazar, la sintaxis de las reglas y los selectores básicos) te da el poder de transformar documentos HTML simples en diseños web atractivos y legibles.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) Curso CSS desde Cero</strong> - Un excelente curso en video de freeCodeCamp en Español: <a href="https://www.youtube.com/watch?v=Lztd_g_fxw4" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Inglés) CSS Full Course for Beginners</strong> - Un curso completo de SuperSimpleDev: <a href="https://www.youtube.com/watch?v=G3e-cpL7ofc" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: Primeros pasos en CSS</strong> - La guía fundamental para empezar: <a href="https://developer.mozilla.org/es/docs/Learn/CSS/First_steps" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
</ul>
`,
        duration: 60,
      },
      {
        id: '1.5',
        title: 'Box model y layout',
        content: `<h2>El Concepto Fundamental de Diseño Web: El Modelo de Caja (Box Model)</h2>
<p>En CSS, todo elemento HTML es tratado como una caja rectangular. El <strong>Modelo de Caja</strong> es la regla que define cómo se calcula el tamaño de esta caja y cómo interactúa con los demás elementos. Comprenderlo es absolutamente esencial para maquetar (hacer el layout) de cualquier página web.</p>
<p>Cada caja está compuesta de cuatro partes, ordenadas desde adentro hacia afuera:</p>
<img src="https://placehold.co/600x400.png" data-ai-hint="css box model diagram" alt="Diagrama del Modelo de Caja de CSS" style="width:100%; max-width:500px; margin: 20px auto; display: block;" />

<h3>1. Content (Contenido)</h3>
<p>Es el área donde se muestra tu contenido real: texto, una imagen, un video, etc. Sus dimensiones son el <code>width</code> (ancho) y el <code>height</code> (alto) que defines en tu CSS.</p>

<h3>2. Padding (Relleno)</h3>
<p>Es un espacio transparente que rodea el contenido, separándolo del borde. El padding "empuja" el borde hacia afuera. Es como el margen interior de una hoja de papel.</p>
<pre><code class="language-css">.mi-caja {
  padding: 20px; /* 20px de relleno en los 4 lados */
  padding-top: 10px; /* Relleno solo arriba */
  padding-left: 15px; /* Relleno solo a la izquierda */
  /* shorthand: arriba, derecha, abajo, izquierda */
  padding: 10px 20px 10px 20px; 
}</code></pre>

<h3>3. Border (Borde)</h3>
<p>Es una línea que se dibuja alrededor del padding y el contenido. El borde tiene un grosor, un estilo y un color.</p>
<pre><code class="language-css">.mi-caja {
  border: 2px solid #36454F; /* grosor, estilo, color */
}</code></pre>

<h3>4. Margin (Margen)</h3>
<p>Es un espacio transparente que rodea el borde, "empujando" a los otros elementos para crear espacio entre ellos. Es el espacio <em>exterior</em> de la caja.</p>
<pre><code class="language-css">.mi-caja {
  margin: 30px; /* 30px de margen en los 4 lados */
  margin-bottom: 40px; /* Margen solo abajo */
}</code></pre>

<h3>El Tamaño Total de un Elemento</h3>
<p>Por defecto, el ancho total de una caja es la suma de: <code>width</code> + <code>padding-left</code> + <code>padding-right</code> + <code>border-left</code> + <code>border-right</code>.</p>
<p>Esto puede ser poco intuitivo. Si defines <code>width: 200px</code> y luego añades <code>padding: 20px</code>, ¡el ancho visible total será de 240px! Esto causaba muchos dolores de cabeza a los desarrolladores.</p>

<h4>La Solución: \`box-sizing: border-box\`</h4>
<p>Para solucionar esto, usamos una regla mágica en CSS que simplifica enormemente el cálculo del tamaño. <code>box-sizing: border-box;</code> le dice al navegador: "Cuando yo defina un <code>width</code> de 200px, quiero que ese sea el ancho <strong>total</strong>, incluyendo el padding y el borde". El navegador entonces ajustará el espacio del contenido hacia adentro para hacerle campo al padding y al borde.</p>
<p>Es una práctica estándar y altamente recomendada incluir esta regla al inicio de tu CSS para todos los elementos:</p>
<pre><code class="language-css">*,
*::before,
*::after {
  box-sizing: border-box;
}</code></pre>
<p>Con esta simple regla, si declaras <code>width: 200px;</code>, la caja ocupará exactamente 200px de ancho en la pantalla, facilitando enormemente la creación de layouts precisos.</p>
<p>Dominar el Modelo de Caja es el primer gran paso para dejar de "luchar" con CSS y empezar a decirle exactamente qué hacer y cómo posicionar los elementos con predictibilidad y control.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) El Modelo de Caja (Box Model) en CSS</strong> - Explicación detallada de FalconMasters: <a href="https://www.youtube.com/watch?v=j352-T4bE0o" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: El Modelo de Caja</strong> - La documentación oficial sobre este concepto: <a href="https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
</ul>
`,
        duration: 50,
      },
      {
        id: '1.6',
        title: 'Flexbox y Grid',
        content: `<h2>Layouts Modernos: Flexbox y Grid</h2>
<p>Hasta ahora, has aprendido a tratar cada elemento como una caja individual. Flexbox y Grid son tecnologías de CSS que te permiten ir más allá, dándote el poder de controlar cómo se organizan y alinean grupos de cajas. Son las herramientas fundamentales para crear cualquier layout moderno y responsivo.</p>

<h3>1. Flexbox: El Poder del Eje Único</h3>
<p><strong>Flexbox (Flexible Box Layout)</strong> está diseñado para maquetar elementos en una sola dimensión, ya sea una fila o una columna. Es perfecto para alinear ítems, distribuirlos y controlar su orden dentro de un contenedor.</p>

<h4>Conceptos Clave de Flexbox</h4>
<ul>
    <li><strong>Contenedor Flex (Flex Container):</strong> Es el elemento padre al que le aplicas <code>display: flex;</code>.</li>
    <li><strong>Ítems Flex (Flex Items):</strong> Son los hijos directos del contenedor flex.</li>
    <li><strong>Eje Principal (Main Axis):</strong> La dirección en la que se colocan los ítems flex (por defecto, horizontal).</li>
    <li><strong>Eje Cruzado (Cross Axis):</strong> El eje perpendicular al eje principal (por defecto, vertical).</li>
</ul>

<h4>Propiedades del Contenedor (Padre)</h4>
<ul>
    <li><code>display: flex;</code>: Activa el contexto de Flexbox.</li>
    <li><code>flex-direction: row | column;</code>: Establece la dirección del eje principal.</li>
    <li><code>justify-content</code>: Alinea los ítems a lo largo del eje principal (<code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>).</li>
    <li><code>align-items</code>: Alinea los ítems a lo largo del eje cruzado (<code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>stretch</code>).</li>
    <li><code>flex-wrap: nowrap | wrap;</code>: Permite que los ítems salten a la siguiente línea si no caben.</li>
</ul>

<pre><code class="language-css">.contenedor-flex {
  display: flex;
  justify-content: space-between; /* Distribuye el espacio entre los ítems */
  align-items: center; /* Centra los ítems verticalmente */
}</code></pre>

<h3>2. CSS Grid: El Poder de las Dos Dimensiones</h3>
<p><strong>Grid Layout</strong> es un sistema de maquetación bidimensional. Te permite crear una cuadrícula de filas y columnas donde puedes posicionar elementos de forma precisa. Es ideal para layouts de página complejos.</p>

<h4>Conceptos Clave de Grid</h4>
<ul>
    <li><strong>Contenedor Grid (Grid Container):</strong> El elemento padre al que aplicas <code>display: grid;</code>.</li>
    <li><strong>Ítems Grid (Grid Items):</strong> Los hijos directos del contenedor.</li>
    <li><strong>Líneas de Grid (Grid Lines):</strong> Las líneas horizontales y verticales que dividen la cuadrícula.</li>
    <li><strong>Celdas de Grid (Grid Cells):</strong> El espacio entre cuatro líneas de grid.</li>
    <li><strong>Áreas de Grid (Grid Areas):</strong> Un espacio rectangular que puede abarcar múltiples celdas.</li>
</ul>

<h4>Propiedades del Contenedor (Padre)</h4>
<ul>
    <li><code>display: grid;</code>: Activa el contexto de Grid.</li>
    <li><code>grid-template-columns</code>: Define el número y tamaño de las columnas (ej: <code>1fr 1fr 2fr;</code> crea tres columnas, la última el doble de ancha).</li>
    <li><code>grid-template-rows</code>: Define el número y tamaño de las filas (ej: <code>auto 100px;</code>).</li>
    <li><code>gap</code>: Define el espacio entre filas y columnas (ej: <code>20px;</code>).</li>
</ul>

<h4>Propiedades de los Ítems (Hijos)</h4>
<ul>
    <li><code>grid-column-start / grid-column-end</code>: Define en qué línea de columna empieza y termina un ítem.</li>
    <li><code>grid-row-start / grid-row-end</code>: Define en qué línea de fila empieza y termina un ítem.</li>
    <li><code>grid-column</code> y <code>grid-row</code> (shorthand): Abreviaturas para las propiedades anteriores (ej: <code>grid-column: 1 / span 2;</code> abarca desde la línea 1 a la 3).</li>
</ul>

<pre><code class="language-css">.contenedor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
  gap: 1rem;
}

.item-destacado {
  grid-column: 1 / span 2; /* Ocupa dos columnas */
  grid-row: 1;
}</code></pre>

<h3>¿Cuándo usar Flexbox y cuándo usar Grid?</h3>
<ul>
    <li>Usa <strong>Flexbox</strong> para componentes y alineación en una dimensión: barras de navegación, alineación de ítems dentro de una tarjeta, centrado de contenido.</li>
    <li>Usa <strong>Grid</strong> para el layout general de la página en dos dimensiones: la estructura principal de tu sitio web con encabezado, contenido, barra lateral y pie de página.</li>
</ul>
<p>La verdadera maestría viene de combinar ambos. Puedes tener un layout principal hecho con Grid, y dentro de una de las áreas de ese grid, usar Flexbox para alinear los elementos de un componente.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) Guía Completa de Flexbox y CSS Grid</strong> - Un video que compara y explica ambos, por Dorian Desings: <a href="https://www.youtube.com/watch?v=R-lJofc_I7s" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Juegos Interactivos (¡La mejor forma de aprender!)</h4>
<ul>
    <li><strong>Flexbox Froggy:</strong> Un juego para aprender Flexbox de forma interactiva: <a href="https://flexboxfroggy.com/#es" target="_blank" rel="noopener noreferrer">Jugar ahora</a></li>
    <li><strong>CSS Grid Garden:</strong> El equivalente para aprender CSS Grid: <a href="https://cssgridgarden.com/#es" target="_blank" rel="noopener noreferrer">Jugar ahora</a></li>
</ul>
`,
        duration: 90,
      },
      {
        id: '1.7',
        title: 'Introducción a Git y GitHub',
        content: `<h2>La Red de Seguridad del Desarrollador: Git y GitHub</h2>
<p>Imagina que estás escribiendo un documento muy importante. Cada cierto tiempo, guardas una copia con un nombre diferente: "documento_v1", "documento_v2", "documento_final", "documento_final_de_verdad". Esto es engorroso y propenso a errores. El <strong>Control de Versiones</strong> es un sistema que soluciona este problema de manera profesional.</p>

<h3>1. ¿Qué es el Control de Versiones?</h3>
<p>Es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que puedas recuperar versiones específicas más adelante. Es como una máquina del tiempo para tu código. Te permite:</p>
<ul>
    <li>Revertir archivos a un estado anterior.</li>
    <li>Revertir todo el proyecto a un estado anterior.</li>
    <li>Comparar cambios a lo largo del tiempo.</li>
    <li>Ver quién modificó algo por última vez que podría estar causando un problema.</li>
    <li>Trabajar en paralelo con otros desarrolladores sin sobrescribir el trabajo de los demás.</li>
</ul>

<h3>2. Git: Tu Base de Datos de Cambios Local</h3>
<p><strong>Git</strong> es el software de control de versiones más popular del mundo. Es un <strong>Sistema de Control de Versiones Distribuido (DVCS)</strong>. Esto significa que no dependes de un servidor central. Cada desarrollador tiene una copia completa del historial del proyecto en su propia máquina.</p>
<p>Con Git, el flujo de trabajo básico es:</p>
<ol>
    <li>Modificas archivos en tu copia de trabajo.</li>
    <li>Seleccionas los cambios que quieres "guardar" (esto se llama <em>staging</em>).</li>
    <li>Creas un <em>commit</em>: una instantánea permanente de tus archivos en ese momento, con un mensaje que describe los cambios.</li>
</ol>
<p>Toda esta actividad ocurre en tu ordenador, de forma local. Es rápido y no necesitas conexión a internet para ver el historial o hacer commits.</p>

<h3>3. GitHub: Tu Repositorio en la Nube y Plataforma Social</h3>
<p>Si Git es el software, ¿dónde guardas una copia de seguridad o compartes tu trabajo con otros? Ahí es donde entra <strong>GitHub</strong>.</p>
<p>GitHub es una plataforma web que aloja repositorios de Git en la nube. Ofrece:</p>
<ul>
    <li><strong>Alojamiento de Repositorios Remotos:</strong> Un lugar central (un "remoto") donde puedes "empujar" (<em>push</em>) tus commits. Es la copia de seguridad y la fuente de verdad para el equipo.</li>
    <li><strong>Colaboración:</strong> Permite que múltiples personas trabajen en el mismo proyecto. Pueden "clonar" (<em>clone</em>) el repositorio, hacer sus cambios y luego proponer integrarlos al proyecto principal a través de un <em>Pull Request</em>.</li>
    <li><strong>Revisión de Código:</strong> Los Pull Requests son la herramienta clave para la colaboración, permitiendo a otros revisar tus cambios, dejar comentarios y aprobar la integración.</li>
    <li><strong>Gestión de Proyectos:</strong> Incluye herramientas para seguimiento de errores (<em>Issues</em>), tableros Kanban (<em>Projects</em>) y documentación (<em>Wikis</em>).</li>
    <li><strong>Portafolio Profesional:</strong> Tu perfil de GitHub se convierte en tu currículum como desarrollador. Muestra los proyectos en los que has trabajado y tus contribuciones a proyectos de código abierto.</li>
</ul>

<h3>En Resumen: Git vs. GitHub</h3>
<p>Una analogía útil:</p>
<ul>
    <li><strong>Git</strong> es como Microsoft Word: el programa que usas en tu ordenador para escribir y guardar el historial de un documento.</li>
    <li><strong>GitHub</strong> es como Google Docs o Dropbox: el servicio en la nube donde subes tu documento para tener una copia de seguridad, compartirlo y colaborar con otras personas en tiempo real.</li>
</ul>
<p>No se puede ser un desarrollador moderno sin saber Git. Es una habilidad no negociable. GitHub (o alternativas como GitLab o Bitbucket) es el estándar de la industria para trabajar con Git en un entorno profesional y colaborativo.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) ¿Qué es Git y GitHub? ¡La guía para principiantes!</strong> - Un video introductorio de HolaMundo: <a href="https://www.youtube.com/watch?v=VdGzPZ31ts8" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>Libro Pro Git:</strong> El libro oficial y de referencia, disponible gratis online: <a href="https://git-scm.com/book/es/v2" target="_blank" rel="noopener noreferrer">Leer online</a></li>
</ul>
`,
        duration: 45,
      },
      {
        id: '1.8',
        title: 'Git básico: commits, ramas, merge',
        content: `<h2>Manos a la Obra: Comandos Esenciales de Git</h2>
<p>Has entendido qué es Git y GitHub. Ahora, es momento de abrir la terminal y aprender los comandos que usarás todos los días. Esta será una guía práctica para el flujo de trabajo básico.</p>

<h3>Configuración Inicial (Solo se hace una vez)</h3>
<p>Antes de nada, debes decirle a Git quién eres. Esto es importante porque cada commit que hagas usará esta información.</p>
<pre><code class="language-shell">git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu_email@example.com"</code></pre>

<h3>1. Inicializar un Repositorio: \`git init\`</h3>
<p>Para empezar a usar Git en un proyecto, navega a la carpeta de tu proyecto en la terminal y ejecuta:</p>
<pre><code class="language-shell">git init</code></pre>
<p>Esto crea una subcarpeta oculta llamada <code>.git</code> donde Git almacenará todo el historial y la configuración del proyecto. ¡Tu proyecto ahora es un repositorio de Git!</p>

<h3>2. El Ciclo Básico: Modificar, Añadir, Comprometer</h3>
<p>Este es el ciclo que repetirás constantemente.</p>
<h4>Paso A: Revisa el Estado con \`git status\`</h4>
<p>Este es tu comando más importante. Te dice qué archivos han sido modificados, cuáles están en el área de preparación (staging) y en qué rama estás.</p>
<pre><code class="language-shell">git status</code></pre>

<h4>Paso B: Prepara los Cambios con \`git add\`</h4>
<p>Git no guarda automáticamente todos los archivos que modificas. Debes decirle explícitamente qué cambios incluir en el próximo "punto de guardado" (commit). Esto se llama <em>staging</em> o preparar los cambios.</p>
<pre><code class="language-shell"># Prepara un archivo específico
git add index.html

# Prepara todos los archivos modificados y nuevos en el directorio actual
git add .</code></pre>

<h4>Paso C: Guarda los Cambios con \`git commit\`</h4>
<p>Un commit es una instantánea de tus archivos preparados. Cada commit tiene un mensaje que describe los cambios realizados. ¡Los buenos mensajes son cruciales!</p>
<pre><code class="language-shell">git commit -m "Añade la estructura HTML inicial para la página de inicio"</code></pre>

<h3>3. Ramas (Branches): Trabajando en Paralelo</h3>
<p>Una rama es una línea de desarrollo independiente. La rama por defecto se llama <code>main</code> (o <code>master</code>). Se crean ramas para trabajar en nuevas funcionalidades o corregir errores sin afectar la versión estable (<code>main</code>).</p>
<h4>Crear y Cambiar de Rama: \`git branch\` y \`git checkout\`</h4>
<pre><code class="language-shell"># Crea una nueva rama llamada 'nueva-funcionalidad'
git branch nueva-funcionalidad

# Muévete a esa rama para empezar a trabajar en ella
git checkout nueva-funcionalidad

# O, un atajo para crear y cambiarte a la rama en un solo paso:
git checkout -b nueva-funcionalidad</code></pre>

<h3>4. Fusionar (Merge): Integrando Cambios</h3>
<p>Una vez que has terminado tu trabajo en una rama, querrás integrar esos cambios de vuelta a tu rama principal (<code>main</code>).</p>
<pre><code class="language-shell"># 1. Primero, vuelve a tu rama principal
git checkout main

# 2. Luego, fusiona los cambios de la otra rama en main
git merge nueva-funcionalidad</code></pre>
<p>Git intentará combinar los cambios automáticamente. A veces, si dos personas han modificado la misma línea de un archivo, ocurrirá un "conflicto de merge", que tendrás que resolver manualmente.</p>

<h3>5. Trabajando con GitHub: \`push\`</h3>
<p>Hasta ahora, todos tus commits y ramas están solo en tu máquina. Para subirlos a tu repositorio remoto en GitHub, usas <code>git push</code>.</p>
<pre><code class="language-shell"># Sube tu rama 'main' al remoto llamado 'origin'
git push origin main

# Si estás subiendo una rama nueva por primera vez
git push --set-upstream origin nueva-funcionalidad</code></pre>
<p><code>origin</code> es el nombre por defecto que Git le da al repositorio remoto desde el que clonaste. Ahora tus cambios están seguros en la nube y disponibles para tus colaboradores.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) Git y GitHub - Curso práctico para principiantes</strong> - Un curso práctico de MoureDev: <a href="https://www.youtube.com/watch?v=3GymExBkKjE" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Herramientas Interactivas</h4>
<ul>
    <li><strong>Learn Git Branching:</strong> Una herramienta visual e interactiva para aprender los comandos de Git, especialmente el manejo de ramas: <a href="https://learngitbranching.js.org/?locale=es_ES" target="_blank" rel="noopener noreferrer">Empezar a aprender</a></li>
</ul>
`,
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
        {
          id: '2.1', 
          title: 'Variables, tipos de datos y operadores', 
          content: `<h2>El Cerebro de la Web: Introducción a JavaScript</h2>
<p>Hemos construido el esqueleto (HTML) y hemos vestido nuestra página (CSS). Ahora es el momento de darle vida y cerebro con <strong>JavaScript (JS)</strong>. JavaScript es un lenguaje de programación completo que se ejecuta directamente en el navegador del usuario. Nos permite crear interactividad, manipular contenido dinámicamente y comunicarnos con servidores.</p>

<h3>1. Variables: Contenedores de Información</h3>
<p>En programación, necesitamos una forma de almacenar valores para usarlos más tarde. Para eso usamos las <strong>variables</strong>. Piensa en ellas como cajas con etiquetas donde guardamos datos.</p>
<p>En JavaScript moderno, tenemos tres formas de declarar una variable:</p>
<ul>
    <li><strong><code>let</code>:</strong> Es la forma estándar y más recomendada para declarar variables cuyo valor puede cambiar con el tiempo.</li>
    <li><strong><code>const</code>:</strong> Se usa para declarar "constantes", es decir, variables cuyo valor no cambiará después de ser asignado. Es una buena práctica usar <code>const</code> por defecto y solo cambiar a <code>let</code> si sabes que necesitarás reasignar el valor.</li>
    <li><strong><code>var</code>:</strong> La forma antigua de declarar variables. Tiene un comportamiento de "scope" (alcance) que puede ser confuso y propenso a errores. Se recomienda evitar <code>var</code> en código moderno.</li>
</ul>
<pre><code class="language-javascript">// Usando let para un valor que puede cambiar
let edad = 30;
edad = 31; // Esto es válido

// Usando const para un valor que no cambiará
const nombre = "Alberto";
// nombre = "Carlos"; // Esto provocaría un error

console.log("Hola, " + nombre + ". Tienes " + edad + " años.");</code></pre>

<h3>2. Tipos de Datos Primitivos</h3>
<p>JavaScript tiene varios tipos de datos fundamentales:</p>
<ul>
  <li><strong>String (Cadena de texto):</strong> Para texto. Se escribe entre comillas simples (<code>''</code>) o dobles (<code>""</code>). Ejemplo: <code>'Hola Mundo'</code>.</li>
  <li><strong>Number (Número):</strong> Para cualquier tipo de número, ya sea entero (<code>25</code>) o con decimales (<code>99.99</code>).</li>
  <li><strong>Boolean (Booleano):</strong> Representa un valor de verdad, solo puede ser <code>true</code> o <code>false</code>. Es la base de la lógica y la toma de decisiones.</li>
  <li><strong><code>null</code>:</strong> Representa la ausencia intencional de un valor. Es un valor que asignamos nosotros para decir "aquí no hay nada".</li>
  <li><strong><code>undefined</code>:</strong> Significa que una variable ha sido declarada pero aún no se le ha asignado un valor.</li>
</ul>

<h3>3. Operadores: Realizando Acciones</h3>
<p>Los operadores son símbolos que realizan operaciones sobre nuestros datos.</p>
<h4>Operadores Aritméticos</h4>
<p>Para realizar cálculos matemáticos.</p>
<ul>
  <li><code>+</code> (Suma)</li>
  <li><code>-</code> (Resta)</li>
  <li><code>*</code> (Multiplicación)</li>
  <li><code>/</code> (División)</li>
  <li><code>%</code> (Módulo o Resto): Devuelve el resto de una división. <code>10 % 3</code> es <code>1</code>.</li>
</ul>

<h4>Operadores de Asignación</h4>
<p>Para asignar valores a las variables.</p>
<ul>
  <li><code>=</code> (Asignación): <code>let x = 10;</code></li>
  <li><code>+=</code> (Suma y asignación): <code>x += 5;</code> es lo mismo que <code>x = x + 5;</code></li>
  <li><code>-=</code>, <code>*=</code>, <code>/=</code> funcionan de manera similar.</li>
</ul>

<h4>Operadores de Comparación</h4>
<p>Para comparar valores. El resultado siempre es un booleano (<code>true</code> o <code>false</code>).</p>
<ul>
  <li><code>==</code> (Igualdad laxa): Compara solo el valor, no el tipo. <code>'5' == 5</code> es <code>true</code>. <strong>(Evitar su uso)</strong></li>
  <li><code>===</code> (Igualdad estricta): Compara tanto el valor como el tipo. <code>'5' === 5</code> es <code>false</code>. <strong>(Esta es la que debes usar siempre)</strong>.</li>
  <li><code>!=</code> y <code>!==</code> (Desigualdad laxa y estricta).</li>
  <li><code>&gt;</code> (Mayor que), <code>&lt;</code> (Menor que), <code>&gt;=</code> (Mayor o igual que), <code>&lt;=</code> (Menor o igual que).</li>
</ul>

<h4>Operadores Lógicos</h4>
<p>Para combinar expresiones booleanas.</p>
<ul>
  <li><code>&&</code> (AND / Y): Devuelve <code>true</code> solo si ambas condiciones son verdaderas. <code>(edad > 18 && tieneCarnet)</code>.</li>
  <li><code>||</code> (OR / O): Devuelve <code>true</code> si al menos una de las condiciones es verdadera. <code>(esFinDeSemana || esFestivo)</code>.</li>
  <li><code>!</code> (NOT / No): Invierte el valor booleano. <code>!esVisible</code>.</li>
</ul>

<p>Estos bloques de construcción son la base de toda la programación en JavaScript. Al combinarlos, podemos empezar a escribir programas que toman decisiones y realizan tareas complejas.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) Aprende JavaScript Ahora!</strong> - Un curso completo en un solo video por freeCodeCamp en Español: <a href="https://www.youtube.com/watch?v=ivdTnPl1iY" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: Guía de JavaScript</strong> - La fuente de documentación más importante para JS: <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer">Leer documentación</a></li>
</ul>
`,
          duration: 60
        },
        { id: '2.2', title: 'Condicionales y bucles', content: `<h2>Tomando Decisiones y Repitiendo Tareas: Condicionales y Bucles</h2>
<p>Los programas informáticos no serían muy útiles si solo pudieran ejecutar instrucciones una tras otra. Su verdadero poder reside en su capacidad para <strong>evaluar condiciones</strong> y <strong>repetir acciones</strong>. Para esto, JavaScript nos proporciona los condicionales y los bucles.</p>

<h3>1. Condicionales: Los Caminos del Código</h3>
<p>Los condicionales permiten que nuestro código tome diferentes caminos basados en si una expresión es verdadera (<code>true</code>) o falsa (<code>false</code>).</p>

<h4><code>if / else if / else</code></h4>
<p>Esta es la estructura de control más fundamental. Permite ejecutar un bloque de código si una condición es verdadera, y opcionalmente, otros bloques si la primera condición es falsa.</p>
<pre><code class="language-javascript">const edad = 19;
const tieneCarnet = true;

if (edad >= 18 && tieneCarnet) {
  console.log("Puedes conducir legalmente."); // Se ejecuta este bloque
} else if (edad >= 18 && !tieneCarnet) {
  console.log("Eres mayor de edad, pero necesitas un carnet para conducir.");
} else {
  console.log("No puedes conducir.");
}</code></pre>

<h4>Operador Ternario (<code>? :</code>)</h4>
<p>Es una forma compacta de escribir una declaración <code>if/else</code> simple. Es muy útil para asignar un valor a una variable basado en una condición.</p>
<pre><code class="language-javascript">const temperatura = 15;
const tiempo = temperatura > 20 ? "Es un día cálido" : "Es un día fresco";

console.log(tiempo); // "Es un día fresco"</code></pre>

<h4><code>switch</code></h4>
<p>La declaración <code>switch</code> es útil cuando tienes una única expresión cuyo valor quieres comparar con múltiples opciones distintas.</p>
<pre><code class="language-javascript">const diaDeLaSemana = "lunes";
let mensaje;

switch (diaDeLaSemana) {
  case "lunes":
    mensaje = "¡Ánimo, empieza la semana!";
    break; // 'break' es crucial para salir del switch
  case "viernes":
    mensaje = "¡Hoy es viernes!";
    break;
  case "sabado":
  case "domingo":
    mensaje = "Es fin de semana.";
    break;
  default: // Se ejecuta si ningún 'case' coincide
    mensaje = "Es un día normal de trabajo.";
}
console.log(mensaje);</code></pre>

<h3>2. Bucles: Los Trabajadores Incansables</h3>
<p>Los bucles nos permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición.</p>

<h4><code>for</code></h4>
<p>El bucle <code>for</code> es ideal cuando sabes de antemano cuántas veces quieres que se repita el bucle. Su sintaxis tiene tres partes: inicialización, condición y expresión final (incremento/decremento).</p>
<pre><code class="language-javascript">// Imprime los números del 0 al 4
for (let i = 0; i < 5; i++) {
  console.log("El número es " + i);
}</code></pre>

<h4><code>while</code></h4>
<p>El bucle <code>while</code> se ejecuta mientras una condición especificada sea verdadera. Es perfecto para situaciones donde no sabes cuántas iteraciones necesitarás.</p>
<pre><code class="language-javascript">let contador = 0;

while (contador < 3) {
  console.log("Iteración número " + contador);
  contador++;
}</code></pre>
<p><strong>¡Cuidado!</strong> Es fácil crear un bucle infinito con <code>while</code> si olvidas actualizar la variable de la condición (como <code>contador++</code>).</p>

<h4><code>do...while</code></h4>
<p>Similar a <code>while</code>, pero con una diferencia clave: el bloque de código se ejecuta <strong>al menos una vez</strong>, porque la condición se evalúa <em>después</em> de la primera ejecución.</p>
<pre><code class="language-javascript">let password;

do {
  password = prompt("Introduce tu contraseña (debe tener al menos 4 caracteres):");
} while (password.length < 4);

console.log("Contraseña aceptada.");</code></pre>
<p>Dominar los condicionales y los bucles te da el control sobre el flujo de tu programa, permitiéndote crear lógica compleja y manejar tareas repetitivas de manera eficiente.</p>
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) Condicionales en JavaScript (if, else, switch)</strong> - Video de Dorian Desings: <a href="https://www.youtube.com/watch?v=345-q_S4-58" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Español) Bucles en JavaScript (for, while, do while)</strong> - Video del mismo autor: <a href="https://www.youtube.com/watch?v=6rSl3_3p4h4" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
</ul>
<h4>Lecturas Oficiales</h4>
<ul>
    <li><strong>MDN Web Docs: Toma de decisiones en tu código — condicionales</strong>: <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
    <li><strong>MDN Web Docs: Bucles en el código</strong>: <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Looping_code" target="_blank" rel="noopener noreferrer">Leer artículo</a></li>
</ul>`, duration: 75 },
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
    