import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  kisi:User=null;
  loginForm:FormGroup;
  users:User[];
  

  constructor(private fb:FormBuilder,private accountService:AccountService,private dataService:DataService) { }

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
  }

}
