// import { NestFactory } from '@nestjs/core';
// import { HelloModule } from './hello/hello.module';
// import { CatsModule } from './cats/cats.module';

// async function bootstrap() {
//   const app = await NestFactory.create(HelloModule);
//   // const app = await NestFactory.create(CatsModule);
//   await app.listen(3000);
// }
// bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
