import { Component, OnInit } from '@angular/core';

interface user{
  name:string;
  email:string;
  password:string;
  designation:string;
  bio:string;
  terms:boolean;

}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


  public User:user={
    name:'',
    email:'',
    password:'',
    designation:'',
    bio:'',
    terms:false,

  }
  constructor() { }

  ngOnInit(): void {
  }

}
