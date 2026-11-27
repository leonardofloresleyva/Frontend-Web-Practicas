import { HttpClient } from "@angular/common/http";
import { inject, Service } from "@angular/core";
import { Clase, ClaseNueva, Sobre } from "../modelos/clase";
import { API_URL } from "../config";
import { map } from "rxjs";

@Service()
export class ClasesApi {
    private readonly http = inject(HttpClient);

    crear(datos: ClaseNueva) {
        return this.http.post<Sobre<Clase>>(`${API_URL}/clases`, datos).pipe(map((r) => r.data));
    }
    
    obtener(id: number) {
    return this.http.get<Sobre<Clase>>(`${API_URL}/clases/${id}`).pipe(map((r) => r.data));
  }

  actualizar(id: number, datos: ClaseNueva) {
    return this.http.patch<Sobre<Clase>>(`${API_URL}/clases/${id}`, datos).pipe(map((r) => r.data));
  }

  eliminar(id: number) {
    return this.http.delete(`${API_URL}/clases/${id}`);
  }
}