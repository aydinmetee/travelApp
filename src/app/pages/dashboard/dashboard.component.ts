import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../models/user';
import { DataService } from './../../services/data.service';
import { Comment } from './../../models/comment';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User;
  comments:Comment[];
  displayForm:boolean;
  cForm:FormGroup;
  ncomment:Comment=null;

  responsiveOptions;

  constructor(private dataService:DataService, private fb:FormBuilder) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.dataService.getComments().subscribe(data =>{
      this.comments=data
    });
    this.cForm=this.fb.group({
      message: [null,[Validators.required,Validators.maxLength(140)]],
      rating:[null,Validators.required]
      
    });
    this.dataService.getUsersById(localStorage.getItem("online")).subscribe(data =>
      {
        this.user=data;
      })
  }


  onSubmit(){
    this.ncomment=Object.assign(this.cForm.value);
    this.ncomment.author=this.user;
    this.dataService.addComment(this.ncomment).subscribe();
    this.displayForm=false;
  }

  showBasicDialog(){
    this.displayForm=true;
  }
  cancelDia(){
    this.cForm.reset;
    this.displayForm=false;
  }

}
