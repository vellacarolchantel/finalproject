import { Component, OnInit } from '@angular/core';
import { AppAction } from '../app-ability/enums/app-action.enum';
import { AppSubject } from '../app-ability/enums/app-subject.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  readonly kAppAction = AppAction;
  readonly kAppSubject = AppSubject;
  constructor() {}

  ngOnInit(): void {}
}
