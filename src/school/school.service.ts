import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Theme } from '@prisma/client';

@Injectable()
export class SchoolService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSchoolDto: CreateSchoolDto) {
    return this.prisma.school.create({
      data: createSchoolDto,
    });
  }

  async findAll(theme?: Theme) {
    if (theme)
      return this.prisma.school.findMany({
        where: { theme },
      });
  }

  findOne(id: number) {
    return this.prisma.school.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return this.prisma.school.update({
      where: { id },
      data: updateSchoolDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.school.delete({
      where: { id },
    });
  }
}
