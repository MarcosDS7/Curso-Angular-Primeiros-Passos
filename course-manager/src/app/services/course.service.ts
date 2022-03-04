import { CourseMock } from './../mocks/course.mock';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  retrieveAll(): Course[] {
    return CourseMock;
  }

  retrieveById(id: number): Course {
    return CourseMock.find(
      (courseInterator: Course) => courseInterator.id === id
    )!;
  }

  save(course: Course): void {
    if (course.id) {
      const index = CourseMock.findIndex(
        (courseInterator: Course) => courseInterator.id === course.id
      );
      CourseMock[index] = course;
    }
  }
}
