import { readFileSync } from "node:fs";
import { type Libro } from "./dominio/tipos.js";

function esLibro(valor: unknown): valor is Libro {
    
    if (typeof valor !== "object" || valor === null) { return false; }

    const o = valor as Record<string, unknown>;

    if(typeof o.id !== "string" || typeof o.titulo !== "string" || typeof o.autor !== "string" || typeof o.ejemplares !== "number"){
        return false;
    }

    if('anio' in o && o.anio !== undefined && typeof o.anio !== "number"){ return false; }
    return true;
}

export interface CatalogoCargado {
    libros: Libro[],
    descartados: number
}

export function cargarCatalogo(path: string): CatalogoCargado {
    const texto = readFileSync(path, "utf-8");

    const crudo = JSON.parse(texto);

    if (typeof crudo !== "object" || crudo === null){
        throw new Error("El archivo no es de tipo JSON.");
    }

    const posibles = (crudo as Record<string, unknown>).libros;

    if(!Array.isArray(posibles)){
        throw new Error("El archivo no contiene un catálogo válido.");
    }

    const libros = posibles.filter(esLibro);

    return {libros, descartados: posibles.length - libros.length};
}