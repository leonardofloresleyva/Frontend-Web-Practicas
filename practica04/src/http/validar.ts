import type { CrearPrestamoRequestDto } from "../contratos/prestamo.dto.js";
import { ValidacionError } from "./errores-http.js";

export function validarCrearPrestamo(cuerpo: unknown): CrearPrestamoRequestDto {
    const errores: string[] = [];

    if (typeof cuerpo !== "object" || cuerpo === null) {
        throw new ValidacionError(["El cuerpo debe ser un objeto JSON"]);
    }

    const c = cuerpo as Record<string, unknown>;

    if (typeof c.libroId !== "string" || c.libroId.trim() === ""){
        errores.push("El campo libroId debe ser un texto no vacío");
    }

    if (typeof c.socioId !== "string" || c.socioId.trim() === ""){
        errores.push("El campo socioId debe ser un texto no vacío");
    }

    if(!Array.isArray(c.ejemplares) || c.ejemplares.length === 0){
        errores.push("El campo ejemplares debe ser un arreglo no vacío");
    } else if (c.ejemplares.some(e => typeof e !== "number" || !Number.isInteger(e) || e <= 0)) {
        errores.push("El campo ejemplares debe contener números enteros positivos");
    }

    if (errores.length > 0){
        throw new ValidacionError(errores);
    }

    return c as unknown as CrearPrestamoRequestDto;
}