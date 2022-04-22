import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-course',
  templateUrl: './select-course.component.html',
  styleUrls: ['./select-course.component.css'],
})
export class SelectCourseComponent implements OnInit {
  form: FormGroup = new FormGroup({
    course_type: new FormControl(),
    course_num: new FormControl(),
  });
  constructor() {}

  ngOnInit(): void {}
}
