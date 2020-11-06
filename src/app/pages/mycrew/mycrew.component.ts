import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycrew',
  templateUrl: './mycrew.component.html',
  styleUrls: ['./mycrew.component.css']
})
export class MycrewComponent implements OnInit {

  crew:User[]=null;
  onlineUser:User;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getCrewMember().then(data => this.crew=data);
    console.log(this.crew);
    this.dataService.getUsersById(localStorage.getItem("online")).subscribe(data =>{
      this.onlineUser=data
    });
  }

  get crewName() { return (this.onlineUser && this.onlineUser.myCrew.cName
    ) ? this.onlineUser.myCrew.cName : [] }

}
