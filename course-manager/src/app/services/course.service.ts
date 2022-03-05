import { HttpClient } from '@angular/common/http';
import { CourseMock } from './../mocks/course.mock';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courseUrl: string;
  constructor(private httpCLient: HttpClient) {
    this.courseUrl = 'http://localhost:3100/api/courses';
  }

  retrieveAll(): Observable<Course[]> {
    return this.httpCLient.get<Course[]>(this.courseUrl);
  }

  retrieveById(id: number): Observable<Course> {
    return this.httpCLient.get<Course>(`${this.courseUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpCLient.put<Course>(
        `${this.courseUrl}/${course.id}`,
        course
      );
    } else {
      return this.httpCLient.post<Course>(`${this.courseUrl}`, course);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpCLient.delete<any>(`${this.courseUrl}/${id}`);
  }
}
