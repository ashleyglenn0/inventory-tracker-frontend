import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
  }
}
