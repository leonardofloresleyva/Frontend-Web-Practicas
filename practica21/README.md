## **Preguntas de la práctica**

### **Paso 1.1: ¿Qué pieza de React Router corresponde a router-outlet, a routerLink y a routerLinkActive?**
#### La pieza "router-outlet" corresponde al componente "<Outlet />" de React; "routerLink" corresponde a "Link to"; "routerLinkActive" a "NavLink to".

### **Paso 1.2: ¿Por qué la ruta comodín (**) va al final y la ruta vacía necesita pathMatch: 'full'?**
#### Va al final porque Angular verifica según el orden establecido en el arreglo y se detiene en el primer match: si "**" estuviera al inicio, cualquier ruta haría match y siempre se mostraría el error 404. La ruta vacía necesita pathMatch: 'full' porque, por default, utiliza el valor "prefix, que realiza un match parcial de izquierda a derecha. De esta forma, la ruta vacía siempre es un prefijo de cualquier ruta, lo que ocasionaría un ciclo infinito.

### **Paso 2.1: ¿Dónde vive el valor de un campo en un formulario reactivo y en qué se diferencia del useState de React?**
#### Vive en el formulario (construido en la clase mediante FormBuilder). Se diferencia de "useState" al gestionar todos los campos como parte del mismo objeto formulario: declara sus campos y sus validadores, permite una conexión directa con el html, arma el objeto a ser enviado y verifica el estado de sus campos.

### **Paso 2.2: ¿Qué regresa un validador propio cuando el valor es válido y cuando no, y cómo se relaciona con hasError?**
#### Regresa null cuando el valor es válido y un objeto con los detalles de los errores encontrados (número y valor) con el nombre de la función como llave (se relaciona con hasError mediante esta llave).

### **Paso 3.1: ¿Qué cambió en el servicio del catálogo y por qué ningún componente se enteró?**
#### En el servició cambió la forma de obtener las clases: ahora se realiza mediante una petición a la API. Ningún componente se enteró porque el servicio del catálogo encapsula la petición de las clases.

### **Paso 3.2: ¿Por qué no hizo falta iniciar sesión para leer el catálogo?**
#### Porque el catálogo es público.