import { Pipe, PipeTransform } from '@angular/core';
import { UserType } from '../enums/user-type.enum';

@Pipe({
  name: 'userType',
})
export class UserTypePipe implements PipeTransform {
  transform(value: UserType | null): string | null {
    switch (value) {
      case UserType.admin:
        return 'Admin';
      case UserType.professor:
        return 'Professor';
      case UserType.student:
        return 'Student';
      case UserType.sysop:
        return 'System Operator';
      case UserType.ta:
        return 'Ta';
      default:
        return null;
    }
  }
}
