import { Module } from '@nestjs/common';
import { HorariosController } from './horarios.controller';
import { HorariosService } from './horarios.service';
// Ya existe HorarioPrismaRepository en infra/, pero NO se conecta en
// esta practica: se conecta en la Practica 9. Al terminar la clase el
// proyecto queda mixto a proposito -- Clases en MySQL, los otros tres
// en memoria -- y todo sigue funcionando igual.
// import { HorarioPrismaRepository } from './infra/horario-prisma.repository';
import { HORARIO_REPOSITORY } from './horarios.tokens';
import { HorarioPrismaRepository } from './infra/horario-prisma.repository';

@Module({
  controllers: [HorariosController],
  providers: [
    HorariosService,
    {
      provide: HORARIO_REPOSITORY,
      useClass: HorarioPrismaRepository,
    },
  ],
  exports: [HorariosService],
})
export class HorariosModule {}
