import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
     selector:    'app-user',
     templateUrl: './user.component.html',
     styleUrls:   ['./user.component.css']
})

export class UserComponent implements OnInit{
     user: User;

     constructor(){
          
     }

     ngOnInit(){
          this.user = {
               name: "Rahimin",
               age: 28,
               address:{
                    city: "dhaka",
                    street: "105/A"
               }
          }
     }
}