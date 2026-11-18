## **Preguntas de la práctica**

### **Paso 1: ¿Qué archivo de Angular hace el papel de main.tsx, de App.tsx y de vite.config.ts?**
#### En Angular, main.ts hace la función de main.tsx (genera la raíz del proyecto), app.ts hace el papel de App.tsx (define la disposición de más alto nivel del sitio) y app.config.ts hace el papel de vite.config.ts (provee un recurso a toda la aplicación)

### **Paso 2: ¿Por qué clase() lleva paréntesis y para qué sirve track?**
#### Clase lleva paréntesis porque es un signal: un dato que envuelve un valor y que le avisa a otros cuando este cambia; se debe llamar al signal como función para leer su valor. Track sirve para enlazar los elementos de la lista con sus componentes en el DOM.