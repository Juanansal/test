
/*

// CONFIGURACION INICIAL 
npm install -g typescript       // Instalacion de typeScript
tsc -init                       // Creacion del fichero de configuracion
tsc                             // Compila todos los ficheros typescript y crea los js correpondientes 
tsc base                        // Compila el fichero typescript base.ts y convirtiendolo es su correspondiente js
tsc -w                          // Inicia el modo watch (Compila automaticamente al guardar)




// FICHERO DE CONFIGURACION
tsc -init                        // Creacion del fichero de configuracion              
- Mirar cada caracteristica en el tsconfig.json de este proyecto

*/



// DEPURACION DE CODIGO
/*
Asignar la propiedadas sourceMap a true e nel fichero de configuración, al compilar, todo el codigo de depuracion aparecera en el navegador
gracias a unos ficheros .map que creara de cada fichero typescript

"sourceMap": true,   //  
*/



/* COMPILACION DEL CODIGO A JAVASCRIPT
- Si se quieren tener ficheros independientes de cada typescript (En una ruta especifica)
    "outDir": "../build", 

- Si se quiere tener todo en un unico fichero
    "outFile": "../build/main.js",    // Genera todo el codigo en un unico fichero */




// Pruebas
/*
console.log('BUENOS TARDssEsS');
*/

