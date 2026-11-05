## **Preguntas de la práctica**

### **Paso 1: ¿La ruta protegida hace segura la aplicación? ¿Qué es lo que de verdad protege los datos?**
#### No. Se puede eliminar el bloque de la ruta protegida a través de las herramientas de desarrollador del navegador. Lo que realmente protege los datos es la api del backend.

### **Paso 2.1: ¿Por qué no se manda el miembroId al inscribirse?**
#### Porque cualquiera podría poner el id de otro miembro en la petición; al enviar únicamente el id del horario, la api se encarga de obtener el id del usuario a través del token, garantizando una correspondencia total y evitando esta vulnerabilidad.

### **Paso 2.2: ¿Qué diferencia hay entre un 401 y un 403?**
#### El código 401 indica que el usuario no ha sido autenticado (no sé quién eres); el 403 indica que el usuario no tiene permiso de acceder al recurso (sé quién eres, pero no puedes pasar).