import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor() {

   }

  ngOnInit() {
    this.users = [
      {
        name: "Afina",
        age: 28,
        address:{               
          city: "Chittagong",
          street: "Halishahar"
        },
        image: "http://lorempixel.com/600/600/people/6/",
        isActive: true,
        balance: 5000,
        joined: new Date('08/22/1992 04:48:00')
      },
      {
        name: "Aria",
        age: 25,
        address:{               
          city: "Dhaka",
          street: "Mirpur 10"
        },
        image: "http://lorempixel.com/600/600/people/9/",
        isActive: false,
        balance: 20000,
        joined: new Date('12/09/1988 05:22:00')
      }
    ]    
  }
}
