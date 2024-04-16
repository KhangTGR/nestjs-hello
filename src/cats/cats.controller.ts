import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  Header,
  Redirect,
  Query,
  Param,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  // @Post('add')
  // @HttpCode(201)
  // @Header('Cache-Control', 'none')
  // create(@Req() request: Request): string {
  //   console.log('The request from the client: ', request.body);
  //   return 'This action adds a new cat';
  // }
  // @Get('ab*cd')
  // @HttpCode(200)
  // @Redirect('https://nestjs.com', 301)
  // findAll(@Req() request: Request): string {
  //   console.log('The request from the client: ', request.body);
  //   return 'This action returns all cats';
  // }
  // @Get('docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' };
  //   }
  // }
  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} cat`;
  // }
}
