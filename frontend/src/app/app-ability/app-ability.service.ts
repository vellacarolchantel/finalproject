import { Inject, Injectable } from '@angular/core';
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
import { map } from 'rxjs/operators';
import { UserType } from '../core/enums/user-type.enum';
import { User } from '../core/models/user.model';
import { AppAction } from './enums/app-action.enum';
import { AppSubject } from './enums/app-subject.enum';

// ability configuration
type Actions = AppAction | 'manage';

// add other subjects
type Subjects = AppSubject | 'all';

export type AppAbility = Ability<[Actions, Subjects]>;
export const AppAbility = Ability as AbilityClass<AppAbility>;
export const detectAppSubjectType = (object: any) =>
  object.constructor as ExtractSubjectType<Subjects>;

@Injectable({
  providedIn: 'root',
})
export class AppAbilityService {
  constructor(
    // private authService: AuthService,
    @Inject(Ability) public readonly appAbility: AppAbility
  ) {
    // authService.privilegesChanges
    //   .pipe(map((privileges) => privileges ?? []))
    //   .subscribe((privileges) => {
    //     this.updatePrivilege();
    //     // console.log(
    //     //   this.appAbility.can(Privileges.CAN_UPDATE_SELF_PROFILE, 'Profile')
    //     // );
    //   });

    this.updatePrivilege();
  }

  private updatePrivilege() {
    const { can, cannot, rules, build } = new AbilityBuilder<AppAbility>(
      AppAbility
    );
    // const isLoggedIn = this.authService.isLoggedIn;
    const user: User = null as any;
    // const privileges: Privileges[] = this.authService.privileges ?? [];

    // if (!isLoggedIn || !user) {
    //   this.appAbility.update([]);
    //   return;
    // }
    // super admin
    if (user?.access?.includes(UserType.sysop)) {
      can('manage', 'all');
      this.appAbility.update(rules);
      return;
    }

    // ta
    if (user?.access?.includes(UserType.ta)) {
      can(AppAction.read, AppSubject.rating);
      can(AppAction.select, AppSubject.course);
    }

    // student
    if (user?.access?.includes(UserType.student)) {
      can(AppAction.read, AppSubject.rating);
      can(AppAction.add, AppSubject.rating);
    }
    this.appAbility.update(rules);
    return;
  }
}
