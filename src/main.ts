import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { makeOpenApiDocument, Logger } from './shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const logger = app.get(Logger);

  // Swagger Documentation
  const document = makeOpenApiDocument(app);
  SwaggerModule.setup('docs', app, document);

  const port = +(process.env.PORT ?? 3000);

  await app.listen(port);

  logger.log(`🚀 Application is running on: http://localhost:${port}/`);
}

bootstrap();
