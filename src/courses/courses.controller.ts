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
import { Response } from 'express';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  findAll() {
    return this.courseService.findAll();
  }
  @Get(':id')
  findOnde(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() CreateCourseDto: CreateCourseDto) {
    return this.courseService.create(CreateCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCourseDto: UpdateCourseDto) {
    return this.courseService.update(id, UpdateCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.delete(id);
  }
}
