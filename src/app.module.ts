import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { HelloController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HelloController, CatsController],
  providers: [AppService],
})
export class AppModule {}
