import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sortUserType, UserType } from '../core/enums/user-type.enum';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-personal-menu',
  templateUrl: './personal-menu.component.html',
  styleUrls: ['./personal-menu.component.css'],
})
export class PersonalMenuComponent implements OnInit, OnDestroy {
  userType: UserType | null = null;
  fullname: string | null = null;
  private userChangesSubscription!: Subscription;
  constructor(public readonly authService: AuthService) {
    this.userChangesSubscription =
      this.authService.loggedInUserObservable.subscribe((user) => {
        const types = sortUserType(user?.access ?? []);
        if (types.length > 0) {
          this.userType = types[0];
        } else {
          this.userType = null;
        }
        this.fullname = user?.fullName;
      });
  }
  ngOnDestroy(): void {
    this.userChangesSubscription?.unsubscribe();
  }

  ngOnInit(): void {}
}
