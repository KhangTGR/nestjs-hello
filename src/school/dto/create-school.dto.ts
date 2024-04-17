import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateSchoolDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEnum(['RED', 'BLUE', 'GREEN'])
  theme: Theme;

  @IsNotEmpty()
  @IsString()
  logo: string;
}

enum Theme {
  RED = 'RED',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
}
