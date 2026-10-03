# **Preguntas de la práctica:**

### **Paso 1: ¿Qué línea del Service o del Controller tuvo que cambiar para que Clases hablara con MySQL?**
#### Ninguna. La única línea modificada se encuentra en el Module, y ésa es la ventaja: ni el Service ni el Controller saben si se cambió de tecnología para persistir los datos, ni ocupan saberlo.

### **Paso 2: ¿Por qué InscripcionesService no tuvo que cambiar ni una línea de las reglas de cupo y duplicados?**
#### Podría referir la misma respuesta de la pregunta anterior. Por otro lado, también puede decirse que el repositorio con MySQL retorna los mismos resultados que su contraparte en memoria, por lo que el servicio no se ve afectado en absoluto.

### **Paso 3: ¿Por qué una interfaz no puede validar nada en tiempo de ejecución?**
#### Porque se borra en tiempo de compilación; en tiempo de ejecución, no existe la interfaz, por lo que no existe información para validar los datos.

### **Paso 4: ¿Qué código de estado responde y qué trae en el cuerpo?**
#### Responde un código 400 y en el cuerpo trae un mensaje que engloba cada mensaje de cada validación (por defecto o definido por el programador). Por ejemplo, "nombre must be a string" corresponde con la validación "IsString".

### **Paso 5: ¿Cuántas líneas quedó más corto el controlador?**
#### 26 líneas más corto; ahora cuenta con tan solo 56.

### **Paso 6: Si la respuesta llega en los dos casos, ¿quién bloquea realmente y a quién protege?**
#### El navegador es el que realmente bloquea la respuesta y protege a nuestro front-end. Es decir, garantiza un uso legítimo desde un navegador.