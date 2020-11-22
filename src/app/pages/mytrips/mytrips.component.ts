import { Trip } from './../../models/trip';
import { User } from './../../models/user';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})

export class MytripsComponent implements OnInit {

  onlineUser:User;
  trips : Trip[]=[];
  uId:Number = Number(localStorage.getItem('online'));

  constructor(private dataService:DataService) { }

  ngOnInit(): void {

    this.dataService.getUsersById(localStorage.getItem("online")).subscribe(data => {
      this.onlineUser = data;
    });

    this.dataService.getAllTrips().subscribe(data => {
      for(var i of data) {
        if(i.assignee.id == this.uId){
            this.trips.push(i);
        }
        else{
          for(var j of i.participants){
              if(j.id==this.uId){
                this.trips.push(i);
                break;
              }
          }
        }
        
      }
    })

  }


}
