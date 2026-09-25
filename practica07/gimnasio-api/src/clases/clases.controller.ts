import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClasesService } from './clases.service';
import type { Clase } from './clases.service';

@Controller('clases')
export class ClasesController {

    constructor(private readonly servicio: ClasesService) {}

    @Get()
    listar(): Clase[] {
        return this.servicio.listar();
    }

    @Post()
    crear(@Body() cuerpo: { nombre: string}): Clase {
        return this.servicio.crear(cuerpo.nombre);
    }
}
