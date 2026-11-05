## **Preguntas de la práctica**

### **Paso 1.1: ¿Cuánto se ahorró y por qué el ahorro es pequeño en esta aplicación?**
#### Se ahorraron 4 KB. El ahorro es pequeño porque la aplicación es pequeña y la diferencia es indistinguible; entre mayor sea la aplicación, más se nota el beneficio.

### **Paso 1.2: ¿Por qué falla la API si el preview corre en el puerto 4173?**
#### Porque la api tiene habilitada la protección de Cross-Origin Resource Sharing (CORS) del origen http://localhost:5173; el origen con el puerto 4173 no está permitido, por lo que el navegador bloquea las peticiones de la api del front-end.

### **Paso 2: ¿Cuándo conviene un contexto y cuándo un store?**
#### Un contexto es conveniente cuando se quiere compartir información que no cambia mucho a una serie de componentes envueltos por un proveedor (por ejemplo, para compartir una sesión de usuario); un store lo es más cuando se quiera manejar un estado global de un conjunto de datos específico, a fin de actualizar ciertas partes de la aplicación cuando un dato cambie y de optimizar las peticiones a la api de datos (se carga solo lo nuevo y se mantiene lo que ya estaba).