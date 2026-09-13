##### **Preguntas de la práctica:**



1. **¿Hizo falta una base de datos real para probar la regla de negocio? ¿Qué dice eso sobre para qué sirve el patrón Repository?**
No hizo falta ninguna base de datos real; solo se requirió un simple diccionario para almacenar los préstamos. Esto evidencia perfectamente la ventaja del desacoplamiento del patrón Repository, ya que **el servicio desconoce la implementación real del repositorio**.

2. **El Service recibe el repositorio como Repository<Prestamo>, no InMemoryPrestamoRepository. ¿Qué se rompía si usaban la clase concreta?
Se rompe el patrón**, ya que el servicio queda acoplado a la infraestructura. Por ejemplo, si utilizo la clase concreta y elimino el método save(), el compilador me arrojaría un error en la clase del servicio, lo que me forzaría a modificarla, resaltando el fuerte acoplamiento entre ambas clases.

3. **Si cambiaran el Map en memoria por una base de datos real, ¿cuántos archivos tocarían? ¿Por qué tan pocos?**
A lo mucho, se crearía un nuevo archivo con una clase que implemente el accesso a la base de datos y únicamente **se modificaría una línea de código** (cuando se instancia la clase en el archivo main.ts). Se modifica tan poco ya que se sigue implementando la misma interfaz (el patrón sigue intacto), por lo que, **a ojos del servicio, nada ha cambiado**.





