import { Crew } from './../../models/crew';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

declare var alertify;

@Component({
  selector: 'app-mycrew',
  templateUrl: './mycrew.component.html',
  styleUrls: ['./mycrew.component.css'],
})
export class MycrewComponent implements OnInit {
  cMembers: User[]=[];
  onlineUser: User= new User;
  allCrews: Crew[] = [];

  createCrew: FormGroup;
  newCrew: Crew = new Crew;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {

    console.log(localStorage.getItem('oncrew'));

    this.dataService
      .getUsersById(localStorage.getItem('online'))
      .subscribe((data) => {
        this.onlineUser = data;
      });
    this.createCrew = this.fb.group({
      cName: [null, Validators.required],
      cCode: [null, Validators.required],
    });

    this.dataService.getCrew().subscribe((data) => {
      this.allCrews = data;
    });

    this.dataService
      .getMemberById()
      .subscribe((data) => {
        this.cMembers = data;
        console.log(this.cMembers);
      });
  }

  create() {
    this.newCrew = Object.assign(this.createCrew.value);
    this.newCrew.cLeaderId = this.onlineUser.id;
    this.onlineUser.myCrew = this.newCrew;
    this.dataService.updateCrew(this.onlineUser).subscribe();
    this.dataService.createCrew(this.newCrew).subscribe();
    alertify.success('Grup Başarıyla Oluşturuldu.');
  }

  join(index: number) {
    this.onlineUser.myCrew = this.allCrews[index];
    console.log(this.allCrews[index]);
    this.dataService.updateCrew(this.onlineUser).subscribe();
    alertify.success('Gruba Katılma Başarılı.');
  }
}
