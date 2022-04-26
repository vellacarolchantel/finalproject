import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ta-wish-list',
  templateUrl: './ta-wish-list.component.html',
  styleUrls: ['./ta-wish-list.component.css'],
})
export class TaWishListComponent implements OnInit {
  TAs = ["Jenny Agaba", "Tom Lander", "Henny Siffy", "Some Guy", "Some Girl", "Hello Kitty"];
  constructor() {}

  ngOnInit(): void {}
}
