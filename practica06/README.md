# **Preguntas de la práctica:**

### **Paso 1: ¿Qué pasaría si el módulo no quedara registrado en la raíz?**

#### No arrancaría. Es decir, la aplicación no la instanciaría y, en consecuencia, las rutas gestionadas no serían atendidas.

### **Paso 2: ¿Por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?**

#### Por tres motivos principales: en primer lugar, la clase implementa la interfaz que define el tipo de dato que retornan los métodos heredados (es decir, promesas); en segundo lugar, las funciones son asíncronas, por lo que es siempre recomendado devolver promesas; por último, y la más importante (que a su vez está muy relacionada con el primer motivo), el servicio desconoce la implementación específica del repositorio, desacomplando ambas capas y permitiendo el uso de bases de datos o de almacenamiento en memoria cuando se requiera.

### **Paso 3: ¿Qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?**

#### Apareció el error UnknownDependenciesException, que explica que NestJS no puede resolver la dependencia del constructor de InscripcionesService (no puede  instanciar el repositorio); la clase sí se puedo resolver sola ya que cuenta con el decorador "Injectable()", que le indica a NestJS que puede inyectarse  como una dependencia al incluirse como un provider en el módulo.

### **Paso 4: ¿Por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?**

#### Porque el repositorio es una interfaz que es eliminada al compilarse el código a JavaScript, mientras que el servicio es una clase concreta (no se elimina durante la compilación) que puede injectarse. Es decir, el framework necesita saber qué implementación exacta de la interfaz debe proveer al servicio.

### **Paso 6: ¿Cuál es la diferencia entre un 400 y un 409?**

#### Un error 400 significa que la información recibida está mal formada; en cambio, un error 409 significa que existe un conflicto con el estado del recurso (por ejemplo, cuando hay duplicados).

### **Paso 7: ¿Por qué cambió el código de estado de esa última petición?**

#### Porque la cancelación de la primera inscripción liberó un cupo para una nueva inscripción.