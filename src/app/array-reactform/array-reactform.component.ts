import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-reactform',
  templateUrl: './array-reactform.component.html',
  styleUrls: ['./array-reactform.component.css']
})
export class ArrayReactformComponent implements OnInit {


  testForm= new FormGroup({
    mobiles:new FormArray(
      [
          new FormControl(null,Validators.required),
         
      ]
    )
  })

  Add(){
    let mobiles=this.testForm.get('mobiles') as FormArray
    mobiles.push(new FormControl(null,Validators.required))
  }


  remove(i:number){
    
    let mobiles=this.testForm.get('mobiles') as FormArray;
     mobiles.removeAt(i)
     console.log(mobiles,i)
  }
  
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
