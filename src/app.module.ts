import { HelloModule } from './hello/hello.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HelloModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
