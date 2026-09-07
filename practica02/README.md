##### **Paso 2:**

* **¿Por qué una unión de valores y no una enumeración?**

Porque una enumeración genera código JavaScript adicional.



##### **Paso 3:**

* **¿Qué se gana con el tipo desconocido en lugar del que acepta todo?**

El beneficio es la verificación del compilador: te obliga a verificar el tipo de la variable antes de usarla.



##### **Paso 4:**

* **¿Por qué la fecha entra como parámetro?**

Porque le añade mayor flexibilidad a cada función: permite asignarle una fecha al préstamo decidida por el usuario e identificar el estado y calcular la multa de un préstamo en cualquier fecha (no solo en la de hoy). Por ejemplo, para averiguar cuál será el estado de un préstamo en tal fecha o su posible multa.

