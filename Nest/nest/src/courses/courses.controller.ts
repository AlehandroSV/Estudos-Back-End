import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly cousesService: CoursesService) {}
  @Get()
  findAll(@Res() res) {
    return res.status(200).send(this.cousesService.getHelloWord());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cousesService.getFindId(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') name) {
    return name;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `Exclusão do curso #${id}`;
  }
}
