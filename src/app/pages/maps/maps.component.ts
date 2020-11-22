import { User } from './../../models/user';
import { DataService } from 'src/app/services/data.service';
import { Trip } from './../../models/trip';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

declare let alertify;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
 
  lat:number
  lng:number;
  zoom:number;
  address:string;
  private geoCoder;
  tripform:FormGroup;
  trip:Trip;
  assignee:User;
  sDate:Date;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private fb:FormBuilder,
    private dataService:DataService
  ){ }

  ngOnInit(): void {
    this.sDate=new Date();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder= new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () =>{
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if( place.geometry == undefined || place.geometry == null){
            return;
          }

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        })
      })
    })
    
    this.tripform=this.fb.group({
      slocation:[null,Validators.required],
      flocation:[null,Validators.required],
      sDate:[null,Validators.required]
    });

    this.dataService.getUsersById(localStorage.getItem("online")).subscribe(data =>
      {
        this.assignee=data;
      })
  }
  
  private setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      })
    }
  }

  markerDragEnd($event : any){
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.getAddress(this.lat, this.lng);

  }

  getAddress(latitude, longitude){
    this.geoCoder.geocode({'location': { lat: latitude, lng:longitude}},(results,status) =>{
      console.log(results);
      console.log(status);
      if(status === 'OK'){
        if(results[0]){
          this.zoom=12;
          this.address = results[0].formatted_address;
        }
        else{
          alertify.error("Not found.");
        }
      }
      else{
        alertify.error("Geocoder failed due to: " + status);
      }
    })
  }


  cTrip(){
    this.trip=Object.assign(this.tripform.value);
    this.trip.assignee=this.assignee;
    this.trip.participants=[]
    this.trip.participants.push(this.assignee);
    this.dataService.createTrip(this.trip).subscribe();
    alertify.success("Başarıyla oluşturuldu.")
    this.tripform.reset();
  }

}
