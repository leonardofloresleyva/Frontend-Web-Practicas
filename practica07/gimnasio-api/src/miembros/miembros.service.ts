import { Inject, Injectable } from '@nestjs/common';
import type { MiembroRepository } from 'src/dominio/miembro.repository';
import { MIEMBRO_REPOSITORY } from './miembros.tokens';
import { Miembro } from 'src/dominio/entidades';
import { CrearMiembroDto } from './dto/crear-miembro.dto';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto';

@Injectable()
export class MiembrosService {

    constructor(
        @Inject(MIEMBRO_REPOSITORY)
        private readonly repo: MiembroRepository
    ) {}

    listar(): Promise<Miembro[]> {
        return this.repo.listar();
    }

    buscar(id: number): Promise<Miembro | null> {
        return this.repo.buscarPorId(id);
    }

    crear(dto: CrearMiembroDto): Promise<Miembro> {
        return this.repo.crear({
            nombre: dto.nombre,
            correo: dto.correo,
            membresia: dto.membresía
        });
    }

    actualizar(id: number, dto: ActualizarMiembroDto): Promise<Miembro | null> {
        return this.repo.actualizar({
            id: id,
            nombre: dto.nombre,
            correo: dto.correo,
            membresia: dto.membresía,
            activo: dto.activo
        });
    }

    eliminar(id: number): Promise<Miembro | null> {
        return this.repo.eliminar(id);
    }
}
