# Mi tarjeta de presentación en React

## Descripción

Proyecto creado con **React** y **Vite** que muestra tres tarjetas de presentación de pioneros de la computación: Ada Lovelace, Alan Turing y Grace Hopper.

Las tres tarjetas usan el mismo componente funcional, `Tarjeta`, que recibe por props `nombre`, `profesion`, `imagen` y `descripcion`. Cada tarjeta muestra una imagen con `alt` descriptivo, el nombre en un `<h2>`, la profesión en un `<h3>` y la descripción en un `<p>`.

Los estilos están en un único archivo CSS. Las tarjetas tienen fondo claro, bordes redondeados, sombra suave y texto centrado. En pantallas grandes se muestran una al lado de la otra y en móviles quedan apiladas.

## Estructura del proyecto

```
react-inicial/
├── public/
│   └── img/
│       ├── ada-lovelace.svg
│       ├── alan-turing.svg
│       └── grace-hopper.svg
├── src/
│   ├── components/
│   │   └── Tarjeta.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── capturas/
│   ├── escritorio.png
│   └── movil.png
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/stanoira2/react-inicial.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd react-inicial
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecutar el proyecto:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que muestra la terminal (por defecto, http://localhost:5173).

## Capturas de pantalla

### Escritorio

![Captura de las tres tarjetas una al lado de la otra en escritorio](capturas/escritorio.png)

### Móvil

![Captura de las tarjetas apiladas en un dispositivo móvil](capturas/movil.png)

## Créditos

- **Estudiante:** Segundo Martinez Tanoira
- **Curso:** Desarrollo en React JS – Centro de e-Learning UTN BA
- **Módulo / Unidad:** Módulo 2 – Unidad 1 – Tarea Componentes

## Fuentes y bibliografía

- Banks, A. y Porcello, E. *Learning React: Modern Patterns for Developing React Apps*. 2ª ed. O'Reilly Media; 2020.
- Freeman, E. y Robson, E. *Head First JavaScript Programming*. 1ª ed. Estados Unidos: O'Reilly Media; 2014.
- MDN Web Docs. (s.f.-a). *&lt;img&gt;: The Image Embed element*. Mozilla Corporation. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
- MDN Web Docs. (s.f.-b). *Flexbox*. Mozilla Corporation. https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox
- React. (s.f.-a). *Writing Markup with JSX*. https://react.dev/learn/writing-markup-with-jsx
- React. (s.f.-b). *Passing Props to a Component*. https://react.dev/learn/passing-props-to-a-component
- Wikipedia. (s.f.-a). *Ada Lovelace*. https://es.wikipedia.org/wiki/Ada_Lovelace
- Wikipedia. (s.f.-b). *Alan Turing*. https://es.wikipedia.org/wiki/Alan_Turing
- Wikipedia. (s.f.-c). *Grace Murray Hopper*. https://es.wikipedia.org/wiki/Grace_Murray_Hopper

### Créditos de imágenes

- `public/img/ada-lovelace.svg`, `public/img/alan-turing.svg` y `public/img/grace-hopper.svg`: avatares ilustrados propios, creados en SVG para este proyecto.
