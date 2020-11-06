import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() control:FormControl;

  @Input() errors: {[key:string ]: string} = {};

  constructor() { }

  ngOnInit(): void {
  }

}
