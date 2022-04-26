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
import { AuthService } from '../core/services/auth.service';
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
    private authService: AuthService,
    @Inject(Ability) public readonly appAbility: AppAbility
  ) {
    authService.loggedInUserObservable.subscribe((user) => {
      this.updatePrivilege();
    });

    this.updatePrivilege();
  }

  private updatePrivilege() {
    const { can, cannot, rules, build } = new AbilityBuilder<AppAbility>(
      AppAbility
    );
    const isLoggedIn = this.authService.loggedIn;
    const user: User = this.authService.loggedInUser;

    if (!isLoggedIn || !user) {
      this.appAbility.update([]);
      return;
    }

    if (user?.access?.includes(UserType.sysop)) {
      can('manage', 'all');
      this.appAbility.update(rules);
      return;
    }

    // AppSubject.taAdministrationPage
    if (user?.access?.includes(UserType.admin)) {
      can(AppAction.view, AppSubject.taAdministrationPage);
    }

    // AppSubject.taManagementPage
    if (
      user?.access?.includes(UserType.admin) ||
      user?.access?.includes(UserType.professor) ||
      user?.access?.includes(UserType.ta)
    ) {
      can(AppAction.view, AppSubject.taManagementPage);
    }

    // AppSubject.performance
    if (user?.access?.includes(UserType.professor)) {
      can(AppAction.view, AppSubject.performance);
    }

    // AppSubject.wishlist
    if (user?.access?.includes(UserType.professor)) {
      can(AppAction.view, AppSubject.wishlist);
    }

    this.appAbility.update(rules);
    return;
  }
}
