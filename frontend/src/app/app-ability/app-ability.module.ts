import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityModule } from '@casl/angular';
import { AppAbility, AppAbilityService } from './app-ability.service';
import { Ability, PureAbility } from '@casl/ability';

@NgModule({
  declarations: [],
  imports: [CommonModule, AbilityModule],
  providers: [
    {
      provide: AppAbility,
      useValue: new AppAbility(),
    },
    { provide: PureAbility, useExisting: AppAbility },
    { provide: Ability, useValue: new AppAbility() },
  ],
  exports: [AbilityModule],
})
export class AppAbilityModule {}
