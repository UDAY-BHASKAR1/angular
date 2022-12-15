import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {




  
  login= new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.minLength(8)]),
     pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
  })
 
  show(){
    console.log(this.login.controls['uname'])
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
