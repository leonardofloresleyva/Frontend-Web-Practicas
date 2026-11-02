## **Preguntas de la práctica**

### **Paso 1.1: ¿Por qué el 404 sí tiene encabezado y pie?**
#### Porque existe un componente Router que atrapa todas las URLs no especificadas y devuelve el componente "NoEncontrado"; este componente es hijo del Layout, el cual cuenta con encabezado y pie de página.

### **Paso 1.2: ¿Qué cambia en la pestaña Red si usas "a href" en lugar de Link? Muéstralo con capturas**
#### Si se usa el componente Link, no cambia nada al hacer click en una clase; si se usa la etiqueta "a", al hacer click se recarga toda la página y se refresca la pestaña de red, indicando que se realizó una nueva petición. Las capturas se encuentran en la carpeta de evidencias, con los nombres "Link" y "a href".

### **Paso 2.1: ¿En qué tipo de dato llega el id de la URL y qué pasa si no lo conviertes?**
#### Llega como string; si no se convierte a number, se lanza un error de tipos, aunque typescript avisa previamente sobre esta discrepancia.

### **Paso 2.2: ¿Qué pasa al ir de /clases/1 a /clases/2 si el id no está en las dependencias del efecto?**
#### Ocurre exactamente lo mismo: se muestra la información correspondiente de cada clase. No entiendo por qué ocurre esto, así que asumo que algo realicé mal durante esta práctica que causa esta anomalía. Asumo que si el id no está incluido dentro de las dependencias de useClase, al ir de /clases/1 a /clases/2, no se mostraría el detalle de la segunda clase (no se ejecutaría el hook con el nuevo id y, por lo tanto, no se repintaría el componente).
