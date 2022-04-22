import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ta-search',
  templateUrl: './ta-search.component.html',
  styleUrls: ['./ta-search.component.css'],
})
export class TaSearchComponent implements OnInit {
  searchControl: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}
