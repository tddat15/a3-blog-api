import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { middleware } from './app.middleware';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    bufferLogs: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      transform: true, // transform object to DTO class
    }),
  );

  if (!isProduction) {
    const options = new DocumentBuilder()
      .setTitle('BlogPercies API Documentation')
      .setDescription('The BlogPercies API documentation')
      .setVersion('1.0')
      .addBearerAuth()
      .addApiKey({ type: 'apiKey', name: 'x-lambda-token', in: 'header', description: 'The API key for lambda request.' }, 'lambda')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }

  if (isProduction) {
    app.enable('trust proxy');
  }

  app.use(json({ limit: '2mb' }));
  app.use(urlencoded({ extended: true }));

  middleware(app);

  await app.listen(3000);
}
bootstrap();
