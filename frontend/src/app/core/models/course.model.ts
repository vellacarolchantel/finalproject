import { AppModel } from './app-model';

//COURSE OBJECT
export class Course extends AppModel<Course> {
  course_num!: Number;
  term_month_year!: String;
  course_name!: String;
  course_type!: String;
  TA_quota!: Number;
  instructor_name!: String;
  enrollment_num!: Number;
  tas!: Number[];
}
