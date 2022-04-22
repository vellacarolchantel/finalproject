import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-options',
  templateUrl: './token-options.component.html',
  styleUrls: ['./token-options.component.css']
})
export class TokenOptionsComponent implements OnInit {
  tokenService: any;

  constructor() { 
    this.tokenService.init({
      userTypes: [
        { name: 'ADMIN', path: 'admin' },
        { name: 'USER', path: 'user' }
      ]
    });
    
    this.tokenService.signIn({
      login:    'example@example.com',
      password: 'secretPassword',
      userType: 'ADMIN'
    })
    
    this.tokenService.currentUserType; // ADMIN
  }

  ngOnInit(): void {
  }

}
