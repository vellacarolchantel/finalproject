// import { UserType } from '../enums/user-type.enum';

import { UserType } from '../enums/user-type.enum';
import { AppModel } from './app-model';
import { Course } from './course.model';

export class User extends AppModel<User> {
  first_name!: string;
  last_name!: string;
  email!: string;
  id!: number;
  student_id!: number;
  username!: string;
  password!: string;
  courses_reg!: Course[];
  access!: UserType[];
}

//TA OBJECT
export interface Ta {
  id: number;
  ta_name: string;
  legal_name: string;
  grad_ugrad: string;
  student_id: number;
  term_month_year: string;
  supervisor_name: string;
  email: string;
  priority: string;
  hours: number;
  date_applied: number;
  location: string;
  phone: number;
  degree: string;
  courses_applied_for: string[];
  open_to_other_courses: string;
  assigned_responsibility: string[];
  assigned_in_past: [string];
  student_ratings: number[];
  student_rating_average: number;
  student_comments: string[];
  performance_log: string[];
  ratings_received: number;
  notes: string[];
  wishlist: { [key: string]: string };
}

// STUDENT OBJECT
export interface Student {
  id: number;
  ratings_given: number;
}

// SYSOP OBJECT
export interface Sysop {}

// PROFESSOR OBJECT
export interface Professor {}

// ADMIN OBJECT
export interface Admin {}
