import { Component } from '@angular/core';
import { AppAbilityService } from './app-ability/app-ability.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(abilityService: AppAbilityService) {}
  title = 'final-project';
}
