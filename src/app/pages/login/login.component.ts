import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title='Login';

  kisi:User=null;
  loginForm:FormGroup;
  users:User[];
  displayBasic2:boolean;

  constructor(private fb:FormBuilder,private accountService:AccountService,private dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    });
    this.dataService.getUsers().subscribe(data=>{
      this.users=data;
    })

  }

  login(){
    this.kisi=Object.assign(this.loginForm.value);
    console.log(this.loginForm.value);
    this.accountService.login(this.kisi,this.users);
    this.router.navigate(["dashboard"]);
    
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
}

}
