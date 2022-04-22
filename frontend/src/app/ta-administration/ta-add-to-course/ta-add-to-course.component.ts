import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ta-add-to-course',
  templateUrl: './ta-add-to-course.component.html',
  styleUrls: ['./ta-add-to-course.component.css'],
})
export class TaAddToCourseComponent implements OnInit {
  form: FormGroup = new FormGroup({
    course_type: new FormControl(),
    course_num: new FormControl(),
    TA_name: new FormControl(),
    student_ID: new FormControl(),
    term_month_year: new FormControl(),
    assigned_hours: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
