# **Preguntas de la práctica:**

### **Paso 1: ¿Por qué esta interfaz no menciona Express, NestJS ni memoria?**
#### Porque es un contrato: define lo que puede hacer el repositorio, pero no su implementación. De esta forma, el servicio desconoce cómo se guarda la información y solo se encarga de aplicar las reglas de negocio.

### **Paso 2: ¿Qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior?**
#### La palabra "implements", la cual indica que la clase implementa la interfaz y, en consecuencia, el compilador fuerza que se respeten todas las funciones declaradas.

### **Paso 4: ¿Por qué este archivo no sabe qué es una petición HTTP?**
#### Porque no importa ningún recurso relacionado con HTTP. Por otro lado, este archivo no debe saber qué es HTTP ya que su responsabilidad es únicamente aplicar reglas de negocio; en cambio, el controlador es el verdadero responsable de manejar HTTP. De esta manera, se desacoplan ambas capas y permite que el módulo pueda ofrecer el servicio a otros que lo requieran.

### **Paso 5: ¿Por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?**
#### Porque el servicio es una clase concreta que no se elimina cuando se compila el código y, por lo tanto, puede beneficiarse del decorador @Injectable(), el cual le indica a NestJS que puede inyectarse en otra clase (normalmente, en el decorador, como en este caso). Por el contrario, el repositorio sí necesita un token porque recibe una interfaz, cuyo código es eliminado cuando se compila el código del proyecto.

### **Paso 6: ¿Qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?**
#### Que la arquitectura funciona: se pueden agregar o modificar módulos sin afectar al resto, siempre y cuando las entidades y otros archivos fundacionales no se rompan; esto le ortorga una alta escalabilidad y mantenibilidad a este tipo de proyectos. Sin embargo, aclaro que, con respecto a la práctica anterior, decidí mover las carpetas de dominio e infra de inscripciones a src para implementar un módulo independiente de miembros, lo que al final resultó en la modificación de varios imports en los archivos del módulo de inscripciones.