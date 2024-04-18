import { Module } from '@nestjs/common';
// import { HelloModule } from './hello/hello.module';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    // HelloModule,
    PrismaModule,
    SchoolModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
