import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ta-admin-sidebar',
  templateUrl: './ta-admin-sidebar.component.html',
  styleUrls: ['./ta-admin-sidebar.component.css'],
})
export class TaAdminSidebarComponent implements OnInit {
  readonly links: SidebarLink[] = [
    {
      text: 'Import TA Cohort',
      route: '/ta-administration/ta-cohort',
    },
    {
      text: 'TA Info/History',
      route: '/ta-administration/ta-info',
    },
    {
      text: 'Course TA History',
      route: '/ta-administration/ta-course-history',
      children: [
        {
          text: 'Search TA',
          route: '/ta-administration/ta-search',
        },
        {
          text: 'Search Course',
          route: '/ta-administration/search-course-ta',
        },
      ],
    },

    {
      text: 'Add TA to a Course',
      route: '/ta-administration/ta-add-to-course',
    },
    {
      text: 'Remove TA from Course',
      route: '/ta-administration/ta-remove-from-course',
    },
    {
      text: 'Import Old TA statistics',
      route: '/ta-administration/ta-statistics',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

export interface SidebarLink {
  text: string;
  route: string;
  children?: SidebarLink[];
}
