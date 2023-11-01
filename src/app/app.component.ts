import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allowNewUser: boolean = false;
  userName = '';
  userStatus = ''

  onCreateNewUser(){
    this.userStatus = 'New Username: ' + this.userName;
  }
}
