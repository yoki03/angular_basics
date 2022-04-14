import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CourseService {

  gerCourses(): Observable<Course[]>{
    this.messagesService.add('CourseService: fetched course');
    return of(COURSES);  
  }

  constructor(private messagesService: MessagesService) { }
}
