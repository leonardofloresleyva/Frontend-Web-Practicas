# **Preguntas de la práctica:**

### **Paso 1.1: ¿Por qué el filtro atrapa la clase base y no cada error por separado?**
#### Porque esto permite atrapar todos los errores en un solo filtro (al heredar de la misma clase), sin necesidad de escribir una clase para cada uno. Básicamente, permite agrupar todos los errores con un mismo filtro, ofrecer un mismo formato de respuesta y diferenciar únicamente en el código de error.

### **Paso 1.2: ¿Por qué este middleware no podría decidir si un usuario tiene permiso para una ruta?**
#### Porque se ejecuta antes de que la petición sea procesada por un handler. Por lo tanto, no puede saber a qué rol está dirigida la petición.

### **Paso 1.3: ¿Por qué la petición que responde 409 no aparece en ese registro?**
#### Porque el método tap no es llamado si el método handler arroja una excepción (la excepción es, por el contrario, interceptada por un ExceptionFilter).

### **Paso 1.4: ¿Por qué este cambio rompe a cualquier cliente que ya estuviera usando la API?**
#### Porque modifica el formato de la respuesta: "data" ya no pasa a ser todo el cuerpo, sino que ahora se envuelve como una propiedad junto a "meta". De ahora en adelante, los que consumían esta API no podrán seguir haciéndolo porque los datos ocupan ser accedidos con un nivel de acceso más profundo (de "res" a "res.data").

### **Paso 1.5: Si el servidor respondió en los dos casos, ¿quién bloquea y a quién protege?**
#### El navegador es el que realmente bloquea la respuesta y protege a nuestro front-end. Es decir, garantiza un uso legítimo desde un navegador.

### **Paso 2.1: ¿Por qué el campo se llama passwordHash y no password?**
#### Para diferenciar los tipos de contraseñas; su función es declarativa, ya que indica claramente que se guarda una contraseña ofuscada por hashing y no en texto plano.

### **Paso 2.2: ¿Por qué los dos errores del inicio de sesión dicen exactamente lo mismo?**
#### Por seguridad: indicar específicamente si el correo o la contraseña son incorrectos le da pistas a un atacante sobre los usuarios que ya están registrados, lo que pueden aprovechar para intentar descifrar la contraseña o realizar otras actividades maliciosas.

### **Paso 2.3: Si el contenido se puede leer, ¿qué es lo que protege la firma?**
#### Protege la integridad del token, ya que permite verificar si el token fue modificado antes de llegar al servidor y rechazarlo si es así por medio de la llave secreta.

### **Paso 2.4: ¿Por qué es más seguro proteger todo y abrir a mano, que al revés?**
#### Por prevención: proteger todo nos evita el riesgo de que el desarrollador omita proteger una ruta por error y cree una nueva vulnerabilidad.

### **Paso 2.5: ¿Cuál es la diferencia entre un 401 y un 403?**
#### En un 403, la identidad del usuario es conocida, lo que indica que no tiene acceso al contenido al que intenta acceder. En cambio, un 401 indica que se desconoce al usuario (no está autenticado).

### **Paso 2.7: ¿Cuántas líneas del AuthService tuvieron que cambiar para pasar de memoria a MySQL? ¿Por qué?**
#### Solo una, porque el servicio recibe una interfaz, cuya clase concreta se inyecta mediante un token registrado en el módulo (AuthModule). Es decir, AuthService desconoce la implementación del repositorio y solo se necesita una línea para que NestJs y el módulo sepan qué clase concreta proveer al servicio.

### **Paso 2.8: ¿Por qué es importante tomar al usuario de los claims del token y no de un parámetro de la URL o del cuerpo? Da un ejemplo concreto de qué pasaría si la API confiara en algo como GET /miembros/3/inscripciones o en el miembroId del cuerpo sin compararlo contra el token. Explica qué claim se usa y por qué el cliente no puede falsificarlo**
#### Porque la URL o el cuerpo podrían manipularse fácilmente por atacantes que deseen acceder a la información de otros usuarios, mientras que los claims del token validan que la información de acceso sea legítima y se pueda verificar en posteriores operaciones (se usa el claim de "sub" o "subject" y el cliente no puede falsificarlo porque se verifica cualquier falsificación por medio de la firma de JWT). Si la API confiara en el miembroId del cuerpo, cualquier atacante podría alterar el valor de ese campo y acceder a la información de diferentes miembros sin el consentimiento de estos, con herramientas como Postman o Curl.