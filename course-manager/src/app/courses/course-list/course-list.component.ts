import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  constructor() {
    this.courses = [];
  }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: './assets/images/forms.png',
        price: 99.99,
        code: 'xPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'December, 2, 2019',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: './assets/images/http.png',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 4,
        releaseDate: 'December, 4, 2019',
      },
    ];
  }
}
