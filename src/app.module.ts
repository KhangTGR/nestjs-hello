import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloModule } from './hello/hello.module';
import { CatsModule } from './cats/cats.module';
// import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HelloModule,
    CatsModule,
    // DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}