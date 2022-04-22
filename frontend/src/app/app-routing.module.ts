import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProfessorPageComponent } from './professor-page/professor-page.component';
import { SysopPageComponent } from './sysop-page/sysop-page.component';
import { TaPageComponent } from './ta-page/ta-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RateATaComponent } from './rate-a-ta/rate-a-ta.component';
import { TaAdministrationComponent } from './ta-administration/ta-administration.component';
import { TaCohortComponent } from './ta-administration/ta-cohort/ta-cohort.component';
import { TaInfoComponent } from './ta-administration/ta-info/ta-info.component';
import { TaCourseHistoryComponent } from './ta-administration/ta-course-history/ta-course-history.component';
import { TaAddToCourseComponent } from './ta-administration/ta-add-to-course/ta-add-to-course.component';
import { TaRemoveFromCourseComponent } from './ta-administration/ta-remove-from-course/ta-remove-from-course.component';
import { TaStatisticsComponent } from './ta-administration/ta-statistics/ta-statistics.component';
import { TaSearchComponent } from './ta-administration/ta-search/ta-search.component';
import { SearchCourseTaComponent } from './ta-administration/search-course-ta/search-course-ta.component';
import { TaManagementComponent } from './ta-management/ta-management.component';
import { SelectCourseComponent } from './ta-management/select-course/select-course.component';
import { SelectCourseDashboardComponent } from './ta-management/select-course-dashboard/select-course-dashboard.component';
import { TaWishListComponent } from './ta-management/ta-wish-list/ta-wish-list.component';
import { TaPerfomanceLogComponent } from './ta-management/ta-perfomance-log/ta-perfomance-log.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthenticatedGuard } from './core/guards/not-authenticated.guard';
import { LogoutGuard } from './core/guards/logout.guard';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SysopTasksComponent } from './sysop-tasks/sysop-tasks.component';
import { SysopSidebarComponent } from './sysop-tasks/sysop-sidebar/sysop-sidebar.component';
import { ManualAddComponent } from './sysop-tasks/manual-add/manual-add.component';
import { ImportProfCourseComponent } from './sysop-tasks/import-prof-course/import-prof-course.component';
import { ManageUsersComponent } from './sysop-tasks/manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'admin-page',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student-page',
    component: StudentPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'professor-page',
    component: ProfessorPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sysop-page',
    component: SysopPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'ta-page', component: TaPageComponent, canActivate: [AuthGuard] },
  {
    path: 'landing-page',
    component: LandingPageComponent,
    canActivate: [NotAuthenticatedGuard],
  },
  { path: 'register-page', component: RegisterPageComponent},
  {
    path: 'signout',
    component: LandingPageComponent,
    canActivate: [LogoutGuard],
  },

  { path: 'rate-a-ta', component: RateATaComponent, canActivate: [AuthGuard] },
  {
    path: 'ta-administration',
    component: TaAdministrationComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      // {path: '',redirectTo: 'ta-co', pathMatch: 'full' },
      { path: 'ta-cohort', component: TaCohortComponent },
      { path: 'ta-info', component: TaInfoComponent },
      { path: 'ta-course-history', component: TaCourseHistoryComponent },
      { path: 'ta-add-to-course', component: TaAddToCourseComponent },
      { path: 'ta-remove-from-course', component: TaRemoveFromCourseComponent },
      { path: 'ta-statistics', component: TaStatisticsComponent },
      { path: 'ta-search', component: TaSearchComponent },
      { path: 'search-course-ta', component: SearchCourseTaComponent },
    ],
  },
  {
    path: 'ta-management',
    component: TaManagementComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'select-course', component: SelectCourseComponent },
      {
        path: 'select-course-dashboard',
        component: SelectCourseDashboardComponent,
      },
      { path: 'ta-wish-list', component: TaWishListComponent },
      { path: 'ta-perfomance-log', component: TaPerfomanceLogComponent },
    ],
  },
  { path: 'sysop-tasks', component: SysopTasksComponent,
children: [
  { path: "manual-add", component: ManualAddComponent},
  { path: "sysop-sidebar", component: SysopSidebarComponent},
  { path: "import-prof-course", component: ImportProfCourseComponent},
  { path: "manage-users", component: ManageUsersComponent}, 
]},
  { path: '**', redirectTo: '/landing-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
