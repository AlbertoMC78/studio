
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
<hr/>
<h3>Recursos Complementarios</h3>
<h4>Videos Recomendados</h4>
<ul>
    <li><strong>(Español) ¿Cómo funciona Internet?</strong> - Un excelente resumen visual de Platzi: <a href="https://www.youtube.com/watch?v=sS_o38i2A_w" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Inglés) How the Web Works: A Primer for Newcomers to Web Development</strong> - Una explicación clara y concisa de MDN: <a href="https://www.youtube.com/watch?v=hJHvdBlSxug" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
    <li><strong>(Inglés, Técnico) HTTP Crash Course & Core Concepts</strong> - Un video más profundo de Traversy Media sobre HTTP: <a href="https://www.youtube.com/watch?v=iYM2zFP3Zn0" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
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
<p>Estas etiquetas son los bloques de construcción fundamentales. Dominarlas te permitirá crear la estructura de cualquier página web que imagines.</p>`,
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
<p>Adoptar el HTML semántico desde el principio es una de las marcas de un desarrollador web profesional. Tu código será más robusto, accesible y comprensible.</p>`,
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
<p>CSS es un lenguaje vasto, pero dominar estos fundamentos (cómo enlazar, la sintaxis de las reglas y los selectores básicos) te da el poder de transformar documentos HTML simples en diseños web atractivos y legibles.</p>`,
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
    