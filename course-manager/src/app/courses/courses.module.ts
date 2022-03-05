import { ReplacePipeModule } from './../shared/pipes/replace.pipe.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/components/star/star.module';

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    ReplacePipeModule,
    RouterModule.forChild([
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
    ]),
  ],
  providers: [],
})
export class CoursesModule {}
