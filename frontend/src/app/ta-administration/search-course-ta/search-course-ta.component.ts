import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-course-ta',
  templateUrl: './search-course-ta.component.html',
  styleUrls: ['./search-course-ta.component.css'],
})
export class SearchCourseTaComponent implements OnInit {
  form: FormGroup = new FormGroup({
    course_type: new FormControl(),
    course_num: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
