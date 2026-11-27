# Preguntas de la práctica

## Paso 1.1: Si el formulario ya valida, ¿por qué también valida el servidor?
Porque el servidor realiza la protección real: debe verificar que los datos que recibe están en el formato correcto, ya que desconoce si quien envía los datos también hace esta verificación (los datos pueden llegar de orígenes diferentes del frontend).

## Paso 1.2: ¿Por qué httpResource para leer y HttpClient para crear, editar y eliminar?
Porque así se separan dos tipos de operaciones: leer un estado (no modifica nada) y realizar una acción (sí modifica).

## Paso 1.3: ¿Qué pasa si se olvida el subscribe()?
No se envía la petición.

## Paso 2.1: ¿A qué pieza de React corresponden las rutas hijas (children), el interceptor y el guardia?
Al componente RutaProtegida.

## Paso 2.2: ¿Cuándo se ejecuta el guardia y por qué salir() tiene que navegar al login?
El guardia se ejecuta al cambiar de ruta y se tiene que navegar al login después de salir() ya que esta función solo remueve el token expirado (se podría seguir navegando por las rutas protegidas, pero las peticiones estarían devolviendo un código 401).

## Paso 3.1: ¿Cómo decide un mismo formulario, con dos rutas, si manda POST o PATCH?
Para decidir el método a ejecutar, el formulario verifica la existencia de un id en la URL como un parámetro: si existe, manda PATCH; si no existe, manda POST. Es una forma sutil de indicar la existencia de una clase.

## Paso 3.2: ¿Por qué el estado del formulario no se puede observar con un computed()?
Porque el formulario no es un signal.

## Paso 3.3: ¿Qué diferencia hay entre canActivate y canDeactivate, y qué casos no cubre la guarda de salida?
Un canActivate verifica si se puede entrar a una página; un canDeactivate verifica si se puede salir de una página. Un guarda de salida no cubre cerrar la pestaña ni recargar la página.