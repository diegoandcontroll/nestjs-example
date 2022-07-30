import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Diego',
      description: 'test',
      tags: ['test', 'test2'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));

    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);

    return createCourseDto;
  }

  update(id: string, updateCourseDto: any) {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (!courseIndex) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return (this.courses[courseIndex] = updateCourseDto);
  }

  delete(id: string) {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (!courseIndex) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    if (courseIndex >= 0) {
      return this.courses.splice(courseIndex, 1);
    }
  }
}
