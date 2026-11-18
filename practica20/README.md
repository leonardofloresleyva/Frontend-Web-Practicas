## **Preguntas de la práctica**

### **Paso 1: ¿Qué diferencia hay entre un signal y un computed, y cuál se parece a useState y cuál a useMemo?**
#### Un signal es un valor que le avisa a quien lo llama cuando cambia; este se parece más a useState, ya que ambos actualizan la página cuando cambian en aquellas partes que los leen. Por otro lado, un computed es un valor que se deriva de los cambios de otros valores; se parece más a useMemo debido a que también calcular un valor cuando otros valores cambian (en react son las dependencias).

### **Paso 2: ¿Qué pasa si el filtro hace new Catalogo() en lugar de inject(Catalogo)?**
#### El catálogo no se filtra, debido a que el catálogo del filtro es una instancia separada del resto de la aplicación, mientras que la app sí inyecta el catálogo global.