import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private dataService:DataService) { }


loggedIn=false;

ngOnInit(): void {
  
  
}

login(user:User,users:User[]):boolean{
  for(const usr of users){
    if(usr.username==user.username && usr.password==user.password){
      alert("Başarılı.");
      this.loggedIn=true;
      return true;
    }
  }
  alert("Başarısız.");
  return false;
}

isLoggedIn(){
  return this.loggedIn;
}

logOut(){
  localStorage.removeItem("isLogged");
  this.loggedIn=false;
}

}
