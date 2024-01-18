# Demo:
![](gifgifgoofy.gif)

# Website:

Deploy hecho con Firebase.
https://e-commerce-coder-3fea2.web.app/

# Reglas de colaboración:

### Al agregar código: 
Especificar con dos comentarios "//agregado" uno antes y uno después del código agregado.

### Al cambiar código ya existente: 
El código existente a cambiar, cambiarlo a comentario y una línea debajo de ese comentario realizar el cambio del mismo, así si luego de haber cambiado el código damos cuenta de que en realidad por un tema de performance o algún tipo de decisión, podemos simplemente borrar o comentar el código cambiado y descomentar el código anterior. 

### Al borrar código ya existente:
En vez de borrar, comentarlo, y realizar una revisión en equipo para verificar si es necesario sustituirlo o es optimizante para el proyecto directamente borrarlo.

### Otras situciones:
Agregar un/os comentario/s en la/s parte/s del código que se haya cambiado indicando que se ha cambiado el código.

## Importante:
### Siempre que se haga un comentario agregar en el mismo la fecha en que se hizo, y por quién.

# Cosas externas al proyecto en uso:

## Bootstrap:
El uso de Bootstrap en este proyecto no es necesario, pero lo utilicé para investigar la relación de React func con Bootstrap para React, ya que el uso de Bootstrap para cada lenguaje es diferente en cunato al modo de implementación.
   versión de react-bootstrap: ^2.2.1

## Firebase:
El uso de Firebase lo utilicé como base de datos de los productos y también para el Hosting.
 versión: ^9.7.0

# ¿Por qué se hizo este proyecto?
Este proyecto es una práctica mas que otra cosa, es un E-commerce básico, hecho a lo largo del curso de React de Coder House, donde la empresa ficticia es React Pub, un comercio virtual donde se pueden comprar cervezas. 

# Explicación de la SPA a grandes razgos:
El proyecto esta dividido en diferentes componentes, donde varios son de tipo Widget (lo visible), otros de tipo Container (lo lógico detrás de lo visible). A su vez se implementa react-router-dom, lo cual hace posible la navegación entre diferentes componentes sin tener que refrescar la página, para mayor performance en cuanto al código (desde mi perspectiva). En principio hay una lista de items, lo cual abarca a los componentes ItemListContainer, ItemList e Item, donde Item. Donde a su vez el componente Item tiene un botón que redirige al detalle del producto, el cual es el producto con más imagenes, y con un texto que señala sus características singulares, donde tambien esta el componente ItemCount, que es un contador para sumar y restar la cantidad de items de ese producto que se quieren agregar al carrito. A su vez, al apretar Comprar, se agrega la cantidad seleccionada al carrito y aparece un botón que te redirige a la ruta del carrito, donde te dice el precio final de todo tu carrito, podés tambien remover el producto que quieras del carrito, y luego de esa experiencia en el carrito y chequear que queres comprar eso productos el botón "Finish my purchase"(terminar mi compra), te redirige al Checkout del carrito, donde hay un formulario en el cual hay 4 campos a completar, de los cuales dos son obligatorios y los otros dos, como son datos personales y no relevantes, son opcionales. Los campos obligatorios son obligatorios porque son necesarios para contactar al comprador o la compradora y confirmar el método de pago y el envío. En el checkout luego del formulario está el ticket del carrito con su precio final respectivo. Al apretar en el botón de Enviar y terminar compra, en el checkout, te devuelve el Id del documento creado en Firebase con la órden de compra enviada, la cual también recopila la fecha en que se ejecutó la compra y a su vez los datos del formulario. Aparte también en la Barra de navegación se puede navegar al carrito durante toda la experiencia en la página, y a las categorías de los productos si es necesario.

# Al hacer cambios del código, cómo correr el proyecto:
Correrlo con "npm start" para previsualizar como funciona. Una vez que vimos que corre bien hacer "npm run build", y luego "firebase deploy" (presuponiendo que ya habíamos hecho "npm install -g firebase-tools").

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
