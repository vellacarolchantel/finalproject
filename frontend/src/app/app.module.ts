import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { TaPageComponent } from './ta-page/ta-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SysopPageComponent } from './sysop-page/sysop-page.component';
import { ProfessorPageComponent } from './professor-page/professor-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RateATaComponent } from './rate-a-ta/rate-a-ta.component';
import { TaAdministrationComponent } from './ta-administration/ta-administration.component';
import { TaManagementComponent } from './ta-management/ta-management.component';
import { SysopTasksComponent } from './sysop-tasks/sysop-tasks.component';
import { PersonalMenuComponent } from './personal-menu/personal-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { LandingImageComponent } from './landing-image/landing-image.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TokenOptionsComponent } from './token-options/token-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppAbilityModule } from './app-ability/app-ability.module';
import { TaCohortComponent } from './ta-administration/ta-cohort/ta-cohort.component';
import { TaInfoComponent } from './ta-administration/ta-info/ta-info.component';
import { TaCourseHistoryComponent } from './ta-administration/ta-course-history/ta-course-history.component';
import { TaAddToCourseComponent } from './ta-administration/ta-add-to-course/ta-add-to-course.component';
import { TaRemoveFromCourseComponent } from './ta-administration/ta-remove-from-course/ta-remove-from-course.component';
import { TaStatisticsComponent } from './ta-administration/ta-statistics/ta-statistics.component';
import { TaAdminSidebarComponent } from './ta-administration/ta-admin-sidebar/ta-admin-sidebar.component';
import { SearchCourseTaComponent } from './ta-administration/search-course-ta/search-course-ta.component';
import { TaSearchComponent } from './ta-administration/ta-search/ta-search.component';
import { TaPerfomanceLogComponent } from './ta-management/ta-perfomance-log/ta-perfomance-log.component';
import { TaWishListComponent } from './ta-management/ta-wish-list/ta-wish-list.component';
import { TaManagementSidebarComponent } from './ta-management/ta-management-sidebar/ta-management-sidebar.component';
import { SelectCourseComponent } from './ta-management/select-course/select-course.component';
import { SelectCourseDashboardComponent } from './ta-management/select-course-dashboard/select-course-dashboard.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ImportProfCourseComponent } from './sysop-tasks/import-prof-course/import-prof-course.component';
import { ManualAddComponent } from './sysop-tasks/manual-add/manual-add.component';
import { SysopSidebarComponent } from './sysop-tasks/sysop-sidebar/sysop-sidebar.component';
import { ManageUsersComponent } from './sysop-tasks/manage-users/manage-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    StudentPageComponent,
    TaPageComponent,
    AdminPageComponent,
    SysopPageComponent,
    ProfessorPageComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    RateATaComponent,
    TaAdministrationComponent,
    TaManagementComponent,
    SysopTasksComponent,
    PersonalMenuComponent,
    LayoutComponent,
    LandingImageComponent,
    StartingPageComponent,
    RegisterPageComponent,
    TokenOptionsComponent,
    TaCohortComponent,
    TaInfoComponent,
    TaCourseHistoryComponent,
    TaAddToCourseComponent,
    TaRemoveFromCourseComponent,
    TaStatisticsComponent,
    TaAdminSidebarComponent,
    TaSearchComponent,
    SearchCourseTaComponent,
    TaPerfomanceLogComponent,
    TaWishListComponent,
    TaManagementSidebarComponent,
    SelectCourseComponent,
    SelectCourseDashboardComponent,
    ImportProfCourseComponent,
    ManualAddComponent,
    SysopSidebarComponent,
    ManageUsersComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppAbilityModule,
    AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
