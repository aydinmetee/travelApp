import { Component, OnInit } from '@angular/core';
import { LoginGuard } from '../pages/login/login.guard';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
  }

}
