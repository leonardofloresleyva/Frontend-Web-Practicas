# **Preguntas de la práctica:**

### **Paso 1: ¿Por qué el paquete del adaptador se llama adapter-mariadb si usamos MySQL?**
#### Porque MariaDB es un fork de MySQL; comparten el mismo protocolo de conexión.

### **Paso 2: ¿Editar schema.prisma cambió algo en la base de datos antes de migrar?**
#### No; los cambios en la base de datos sucedieron después de cada migración. El propósito de las migraciones es actualizar la base de datos al mismo tiempo que llevar un historial de cada migración para regresar a una versión anterior en caso de necesitarse; cada migración ejecuta un query que realmente actualiza la base de datos.

### **Paso 3: ¿La carpeta de migraciones es una foto del esquema o un historial?**
#### Funciona como un historial, ya que incluye un archivo .sql que contiene el query que modificó la base de datos en cada migración, así como también incluye la fecha y hora exacta de cada una (incluido en el nombre de cada carpeta). No es una foto del esquema, ya que el mismo era diferente tras cada migración.

### **Paso 4: ¿Por qué Horario.clase sí crea columna y Clase.horarios no?**
#### Porque Horario.clase es realmente una llave foránea que referencia a Clase. Por el contrario, una tabla de MySQL no puede referenciar múltiples ids en una sola columna, pero se pueden mapear esas referencias en código TypeScript como una lista de entidades para navegación. Todo lo anterior es resultado de una relación 1-N: las partes referencian al todo y no al revés.

### **Paso 6: ¿De dónde sale la relación de muchos a muchos entre Miembro y Horario, si nunca se declaró?**
#### De una Inscripción; esta entidad funge como un puente entre ambas a través de dos relaciones 1-N.