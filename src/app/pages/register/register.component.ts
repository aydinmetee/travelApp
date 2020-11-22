import { Crew } from './../../models/crew';
import { DataService } from './../../services/data.service';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  kisi: User = null;
  rForm: FormGroup;
  bikes: Bike[];
  selectedBike: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.bikes = [
      { name: 'Honda', code: 'HND' },
      { name: 'Yamaha', code: 'YMH' },
      { name: 'Suzuki', code: 'SZK' },
      { name: 'Kawasaki', code: 'KWS' },
      { name: 'Harley Davidson', code: 'HLD' },
    ];
    
  }

  ngOnInit(): void {
    this.rForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      email: [null, [Validators.required, Validators.email]],
      bmodel: [null, Validators.required],
      location: [null, Validators.required],
    });
  }

  onSubmit() {
    this.kisi = Object.assign(this.rForm.value);
    this.kisi.myCrew=null;
    console.log(this.rForm.value);
    this.dataService.addUsers(this.kisi).subscribe();
    this.router.navigate(['login']);
  }
}
