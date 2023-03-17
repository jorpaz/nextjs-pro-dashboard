This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


***CONFIGURACIONES ADICIONALES DESPUES DE INICIAR EL PROYECTO DE CERO***

Continuando con nuestro proyecto: 🔨
 
Vamos a crear la carpeta src; donde irá todo el código fuente, para ello pasamos las carpetas styles y pages dentro de src. Ahí se configurará toda la lógica de la app. Las demás carpetas y archivos que están al mismo nivel que src, son aquellas que no hay problema que sean subidos a la nube y estén públicas, algunas serán ignoradas según la configuración como la carpeta node_modules.
Vamos a la consola para instalar las dependencias y herramientas de eslint y de prettier: npm install eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier
Dado que no se colocó el flag -d de depencies, no se hizo el registro en el package.json de forma correcta, así que abrimos el archivo package.json y en la parte de “dependencies” cortamos las 3 líneas de eslint directamente y las agregamos a las dependencias de desarrollo (importante recordar que se debe agregar una coma en el último item para agregar más líneas).
También cambiamos de lugar a la línea de prettier y la movemos junto a las líneas de eslint. Así quedan las dependencias de producción y las dependencias de desarrollo:
"dependencies": {
	"next": "12.2.1",
	"react": "18.2.0",
	"react-dom": "18.2.0"
},
"devDependencies": {
	"eslint": "8.19.0",
	"eslint-config-next": "12.2.1",
	"eslint-config-prettier": "^8.5.0",
	"eslint-plugin-jsx-a11y": "^6.6.0",
	"eslint-plugin-prettier": "^4.2.1",
	"prettier": "^2.7.1"
}
Creamos un nuevo archivo: eslintrc.js y agregamos la siguiente configuración de eslint:
module.exports = {
//environments que vamos a usar
	env: {
		browser: true, //Variables globales del navegador.
		amd: true, //Define require()y define()como variables globales.
		node: true, //Variables globales de Node.js y alcance de Node.js.
		es6: true, //Habilita todas las características de ECMAScript 6 excepto los módulos
	},
//extender las configuraciones que hemos agregado como plugin
	extends: [
		"eslint:recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"next",
		"next/core-web-vitals",
	],
//agregar reglas
	rules: {
		semi: ["error", "always"],
	},
};
Para conocer más sobre c/u de las configuraciones de eslint, en el enlace los describe: aquí
Si seleccionamos todo el código y al dar click derecho y escogemos Format Document with y le damos en la casilla a prettier automáticamente la identación se adapta al formato estándar que debe cumplir.
Dato: si se quiere editar caracteres que se repiten, se selecciona el primer carácter y luego se presiona Ctrl + d, para seguir seleccionando otra palabra que se repite se presionan una vez más las teclas hasta cubrir todos los caracteres que queremos cambiar, sustituimos con lo que queremos modificar y todos los elementos seleccionados cambian, con la tecla Esc se sale de la selección.
 
En cuanto a la configuración de prettier, creamos el archivo prettier.config.js y se agrega el código:

module.exports={
	semi:true, //Imprima punto y coma al final de las declaraciones
	singleQuote: true, //Utiliza comillas simples en lugar de comillas dobles
	printWidth: 200, //Especifica la longitud de la línea en la que se ajustará la impresora
	tabWidth: 2, //Especifica el número de espacios por nivel de sangría
	trailingComma: 'es5', //Imprima comas finales siempre que sea posible en estructuras sintácticas separadas por comas de varias líneas
	bracketSpacing: true, //Imprima espacios entre corchetes en literales de objetos
};
Si quieres conocer sobre las configuraciones de prettier en el enlace explica con detalles c/u: aquí

Luego vamos al archivo package.json y en la parte de “scripts” agregamos:
"lint:fix": "eslint src/ --fix"
Con fix podemos ejecutar automáticamente la herramienta para arreglar cualquier cambio (autoreparar).

 

Para verificar que todo está bien configurado y detectar errores en la consola ejecutamos npm run lint y nos arroja errores de typo o de ausencia de puntos y comas, etc.
Para que se puedan autoreparar ejecutamos: npm run lint:fix y verificamos si los errores que arrojaba anteriormente en la consola han sido modificados y reparados.
Para ello, se vuelve a ejecutar npm run lint y debe arrojar el mensaje que no hay errores (que todo ha sido reparado exitosamente): ✔ No ESLint warnings or errors


Integrando PostCSS y TailwindCSS a nuestro proyecto 4/31 📑
Tailwind CSS
 

La herramienta Tailwind CSS nos permite tener una estructura de CSS para construir rápidamente interfaces de usuario personalizadas.

 

PostCSS
PostCSS es una herramienta de desarrollo de software que utiliza complementos basados en JavaScript para automatizar las operaciones de rutina de CSS.

 
Para instalarlos, vamos a la consola y ejecutamos: npm install tailwindcss postcss autoprefixer
 
También ejecutamos: npx tailwindcss init -p y se generan los archivos tailwind.config.js y postcss.config.js con los templates para añadir las configuraciones de nuestra preferencia.
 

Continuando con el proyecto: 🔨
A la fecha 8/7/2022 ya no es necesario purge. Sale por defecto content y se agrega lo siguiente:

content: [
	"./pages/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}",
],
Fuente: aquí

Para configurar los colores, se debe declarar la variable colors al principio del archivo tailwind.config.js
const colors = require('tailwindcss/colors');
y se debe agregar la configuración dentro de theme:

theme: {
	colors: {
		...colors,
	},
},
Fuente: aquí

Creamos el archivo .env.local que nos permitirá trabajar con la variable de entorno:
TAILWIND_MODE =watch;
En la ruta src/styles creamos un nuevo archivo llamado tailwind.css y añadimos las configuraciones para importar la base de nuestro proyecto y agregar reglas de CSS:

@tailwind base;
@tailwind components;
@tailwind utilities;
Una vez guardado el archivo con Ctrl + S ya no necesitamos los archivos de los estilos que se generaron por defecto, así que borramos los archivos: Home.css y globlas.css

Vamos al archivo _app.js es bueno recordar que cuando el archivo comienza con guion bajo: _ se interpreta que no va haber una ruta para app.js en pages, dentro del archivo se modifica el import que hacía el llamado a globals.js, lo cambiamos para importar a tailwind.css:
import '../styles/tailwind.css';
Ahora vamos a la página oficial de Tailwind CSS y en el panel izquierdo dar click a Playgroung, enlace directo: aquí

Nos muestra la salida de cómo sería la configuración por defecto, junto las configuraciones en html, css. Copiamos lo que sale en html y lo sustituimos en index.js (en la ruta src/pages) todo lo que está dentro de return.
Dato: Importante que dado index no tiene extensión html, puede ocurrir conflictos con la palabra reservada class, así que seleccionamos todos los class con Ctrl + D y lo sustituimos por className.
También borramos los import ya que no serán necesarios, seleccionamos todo el código y al dar click derecho, damos en Format Document with, lo guardamos y vamos a consola y ejecutamos npm run dev
con ésto nos arroja los errores de tipeo.
Con la extensión de esLint (para instalar en VSC, presionar Ctrl + P y pegar ext install dbaeumer.vscode-eslint y dar ENTER. Fuente: aquí) podemos tener advertencias directamente en el código, en index.js por ejemplo nos indica con los elementos de la imagen svg que crean conflictos, así que los borramos dado que no la necesitamos por el momento.