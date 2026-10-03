import { Module } from '@nestjs/common';
import { InscripcionesController } from './inscripciones.controller';
import { InscripcionesService } from './inscripciones.service';
// Se conecta en la Practica 9.
// import { InscripcionPrismaRepository } from './infra/inscripcion-prisma.repository';
import { INSCRIPCION_REPOSITORY } from './inscripciones.tokens';
import { InscripcionPrismaRepository } from './infra/inscripcion-prisma.repository';

@Module({
  controllers: [InscripcionesController],
  providers: [
    InscripcionesService,
    {
      provide: INSCRIPCION_REPOSITORY,
      useClass: InscripcionPrismaRepository,
    },
  ],
})
export class InscripcionesModule {}
