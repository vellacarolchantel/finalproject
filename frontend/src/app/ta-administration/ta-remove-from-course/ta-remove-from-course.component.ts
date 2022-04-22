import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ta-remove-from-course',
  templateUrl: './ta-remove-from-course.component.html',
  styleUrls: ['./ta-remove-from-course.component.css'],
})
export class TaRemoveFromCourseComponent implements OnInit {
  form: FormGroup = new FormGroup({
    student_ID: new FormControl(),
    term_month_year: new FormControl(),
    course_type: new FormControl(),
    course_num: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
