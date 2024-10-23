import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userProfile: any;

  constructor() {
    this.userList();
  }

  userList() {
    let data: any = localStorage.getItem('ticketUser');
    this.userProfile = JSON.parse(data);
    console.log(this.userProfile, 'userprofile');
  }
}
