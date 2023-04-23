import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: '1',
      name: 'Fundamentos do Framework Nest',
      description: 'Fundamentos do Framework Nest',
      tags: ['NodeJs', 'NestJS', 'JavaScript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === id);

    if (!course) {
      throw new HttpException(
        `Course id: ${id} nor found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    this.courses[indexCourse] = {
      ...this.courses[indexCourse],
      ...updateCourseDto,
    };

    return this.courses[indexCourse];
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex((course) => course.id === id);

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
