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
    this.course = this.courseService.retrieveById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }

  save(): void {
    this.courseService.save(this.course);
    this.router.navigate(['/courses']);
  }
}
