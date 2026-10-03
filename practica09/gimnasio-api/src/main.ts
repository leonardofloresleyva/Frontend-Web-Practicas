// Primera linea, antes que cualquier otro import: carga el .env en
// process.env. `prisma.config.ts` hace lo mismo, pero eso solo aplica
// al CLI de Prisma (migrate, studio). La aplicacion cuando corre con
// `npm run start:dev` necesita cargarlo por su cuenta, o PrismaService
// no encuentra DATABASE_URL.
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DominioExceptionFilter } from './comun/filtros/dominio.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3001'],
    exposedHeaders: ['Location', 'X-Request-Id'],
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })
  );

  app.useGlobalFilters(new DominioExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
