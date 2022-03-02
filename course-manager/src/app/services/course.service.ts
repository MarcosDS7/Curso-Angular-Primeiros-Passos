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
}
