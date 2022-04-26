import { Injectable } from '@angular/core';
import { UserType } from '../enums/user-type.enum';
import { AppException } from '../models/app-exception';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  findOneOrFail(args: Partial<User>): User {
    const user = this.findOne(args);
    if (!user) throw new AppException({ message: 'User not found' });
    return user;
  }

  findOne(args: Partial<User>): User | undefined {
    const user = UsersService.allUsers.find((user) => {
      let matched = true;
      for (const key in args) {
        matched = matched && (user as any)[key] == (args as any)[key];
      }
      return matched;
    });
    return user;
  }

  static readonly allUsers: User[] = [
    // Professor
    new User({
      username: 'professor.instructor@mcgill.ca',
      email: 'professor.instructor@mcgill.ca',
      access: [UserType.professor],
      password: 'mcgillprof',
      first_name: 'John',
      last_name: 'Smith',
    }),
    // Student
    new User({
      username: 'student.undergrad@mail.mcgill.ca',
      email: 'student.undergrad@mail.mcgill.ca',
      access: [UserType.student],
      password: 'mcgillstudent',
      first_name: 'Vella',
      last_name: 'Abur',
    }),

    // TA
    new User({
      username: 'ta.instructor@mcgill.ca',
      email: 'ta.instructor@mcgill.ca',
      access: [UserType.ta],
      password: 'mcgillta',
      first_name: 'Sarah',
      last_name: 'Daniels',
    }),

    // Admin
    new User({
      username: 'admin.admin@mcgill.ca',
      email: 'admin.admin@mcgill.ca',
      access: [UserType.admin],
      password: 'mcgilladmin',
      first_name: 'Grace',
      last_name: 'Akpan',
    }),

    // Sysop
    new User({
      username: 'sys.operator@mcgill.ca',
      email: 'sys.operator@mcgill.ca',
      access: [UserType.sysop],
      password: 'mcgillsysop',
      first_name: 'Thomas',
      last_name: 'Earth',
    }),
  ];
}
