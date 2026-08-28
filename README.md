## **Respuestas práctica 1:**



### **Paso 2:**

* **¿Hubo algún error, alguna advertencia o algo en la consola que avisara?** 

No. La consola simplemente mostró el resultado incorrecto, sin avisos, advertencias ni mucho menos errores. Para JavaScript, no existe ningún error en el código ya que no se preocupa por el tipado de los datos manejados. Es decir, JavaScript no verifica que la multa de un préstamo sea un número.



### **Paso 3:**

* **Si el archivo tiene un error de tipos, ¿por qué node lo ejecuta? ¿Cuál comando revisa y cuál ejecuta?**

Node lo ejecuta porque los tipos se verifican únicamente al compilar, no al ejecutar. Es decir, cuando Node ejecuta el archivo multa.ts, las anotaciones de TypeScript desaparecen. De esta forma, el comando "tsc" se encarga de revisar el código al compilarlo y "node" de ejecutarlo.



### **Paso 4:**

* **De las dos líneas que usan const, ¿por qué sólo una falla?**

Porque la que falla intenta reasignarle un valor a la variable constante, lo cual no está permitido. Sin embargo, si la variable constante es un objeto, se pueden modificar sus propiedades sin problema (como queda demostrado al asignarle un nuevo valor a la multa del préstamo), ya que la variable sigue referenciando al mismo objeto.

* **Al asignarle un texto a la variable con let, nadie escribió que fuera un número. ¿De dónde salió ese tipo?**

Fue inferido por TypeScript: si el valor es un número, el tipo de dato de esa variable es un número de ahora en adelante. JavaScript ya realiza esta inferencia de base, aunque permite que el tipo de dato pueda cambiar en el futuro.

