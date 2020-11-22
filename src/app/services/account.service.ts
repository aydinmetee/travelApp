import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { DataService } from './data.service';

declare let alertify;

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
      this.loggedIn=true;
      localStorage.setItem("online",usr.id.toString());
      if(usr.myCrew!=null){
        localStorage.setItem("oncrew",usr.myCrew.id.toString());
      }
      console.log(localStorage.getItem("online"));
      alertify.success("Giriş Başarılı. Yönlendiriliyorsunuz...")
      return true;
    }
  }
  alertify.error("Hatali giriş yaptınız.");
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
