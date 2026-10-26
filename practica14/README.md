## **Preguntas de la práctica**

### **Paso 1: ¿Por qué en la pestaña Red salen dos peticiones al cargar?**
#### Por el modo estricto de React: este invoca dos veces el hook para verificar efectos secundarios que no son manejados correctamente. Solo ocurre en modo desarrollo.

### **Paso 2: ¿Qué pasa si quitas el arreglo de dependencias del efecto?**
#### El efecto entra en un ciclo infinito: se realizan peticiones sin detenerse. El arreglo de dependencias del hook debe estar vacío para asegurarse de que el hook se llame solo una vez (o manejar correctamente las dependencias).

### **Paso 3: ¿Qué hace e.preventDefault() y qué pasa si lo quitas?**
#### Evita que la página se recargue al enviar un formulario HTML. Si lo quito, al enviar el pedido se recarga toda la página y no se muestra el mensaje con el folio del pedido.