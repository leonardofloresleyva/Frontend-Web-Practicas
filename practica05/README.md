## **Preguntas de la práctica:**

#### **1. ¿Qué generó el comando nest new?**
Generó un nuevo proyecto desde cero; incluye una carpeta "node_modules" con muchas dependencias (incluye typescript), una carpeta "src" con varias clases, una carpeta de testing, los archivos "package.json" y "tsconfig.json", entre otros.

#### **2. ¿Qué hace el AppService que ya viene generado?**
Devuelve el siguiente mensaje en la ruta http://localhost:3000: "Hello World!".

#### **3. ¿Por qué la ruta funciona sin declarar nada en app.module.ts?**
Porque la clase AppModule ya importa el controlador que maneja la ruta. Es decir, la clase AppModule delega el manejo de las peticiones a los controladores e importa lo que sea necesario.

#### **4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?**
Se agregaría la clase sin el nombre, ya que el código escrito en TypeScript se transpila a JavaScript y se borran los tipados. A su vez, no existen validaciones de la petición ni reglas de negocio (consecuencia de ignorar el servicio y trabajar directamente en el controlador).

#### **5. ¿En qué archivo vive hoy toda la lógica de la práctica?**
Dentro del archivo "app.controller.ts"; es decir, dentro del controlador.