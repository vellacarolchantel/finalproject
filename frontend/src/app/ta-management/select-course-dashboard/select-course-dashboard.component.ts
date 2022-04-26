import { Component, OnInit } from '@angular/core';
import { AppAction } from '../../app-ability/enums/app-action.enum';
import { AppSubject } from '../../app-ability/enums/app-subject.enum';

@Component({
  selector: 'app-select-course-dashboard',
  templateUrl: './select-course-dashboard.component.html',
  styleUrls: ['./select-course-dashboard.component.css'],
})
export class SelectCourseDashboardComponent implements OnInit {
  readonly kAppSubject = AppSubject;
  readonly kAppAction = AppAction;
  constructor() {}

  ngOnInit(): void {}
}
