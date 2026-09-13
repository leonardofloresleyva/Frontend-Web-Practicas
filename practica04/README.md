## **Preguntas de la práctica:**

#### **1. Express manda los rechazos de un handler async directo al middleware de errores, sin try/catch en cada ruta. ¿Qué tendrían que agregar en cada ruta si esto no fuera así?**
Tendría que agregar una serie de bloques try/catch específicos para cada ruta y devolver los códigos HTTP correspondientes; esto podría derivar en código repetitivo y propenso a errores, ya que un desarrollador podría omitir un bloque try/catch en un handler sin darse cuenta.
#### **2. ¿Por qué el servicio no lanza directamente un 409 en vez de EjemplarPrestadoError?**
Porque la capa de servicio no debe conocer nada sobre HTTP; únicamente es responsable de aplicar reglas de negocio y comunicarse con los repositorios. Por ejemplo, si otra API utilizara un protocolo de comunicación diferente, no podría utilizar este servicio.
#### **3. Si mañana agregaran una app móvil que también consume esta API, ¿qué archivos de esta práctica tendrían que tocar?**
Únicamente el servidor, ya que el resto está desacoplado. De hecho, no se tendría que tocar ningún archivo siempre y cuando no se haga una petición a la ruta que devuelve HTML (localhost:3000), ya que los handlers devuelven únicamente datos en formato JSON.