import { CourseService } from 'src/app/services/course.service';
import { Course } from './../../models/course.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    this.course = null as unknown as Course;
  }

  ngOnInit(): void {
    this.courseService
      .retrieveById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe({
        next: (course) => {
          this.course = course;
        },
        error: (err) => console.log('Error', err),
      });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (course) => console.log('Saved with success', course),
      error: (err) => console.log('Error', err),
    });
    this.router.navigate(['/courses']);
  }
}
