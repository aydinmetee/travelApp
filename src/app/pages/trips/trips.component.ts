import { User } from './../../models/user';
import { Trip } from './../../models/trip';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

declare var alertify;

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips:Trip[]=null;
  onlineUser:User;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getAllTrips().subscribe(data => {
      this.trips=data
    })
    
    this.dataService.getUsersById(localStorage.getItem('online')).subscribe(data => {
      this.onlineUser=data;
    })

  }

  joinTrip(trip:Trip){
    trip.participants.push(this.onlineUser);
    this.dataService.updateTrip(trip).subscribe();
    alertify.success(" Yolculuğa katılma başarılı. ");
  }


}
