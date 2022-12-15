import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-operators',
  templateUrl: './crud-operators.component.html',
  styleUrls: ['./crud-operators.component.css']
})
export class CrudOperatorsComponent implements OnInit {


  
   
 data=null;
 inboundClick = true;
 outboundClick = true;

  constructor(private http:HttpClient) { }



  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data)=>{
        this.data=data
        console.log(data)
        
      }
    )
  }


  delete(data,i){
    this.data=this.http
  }

  // Add(){
  //   let data=this.get('data') as FormArray
  //   data.push(new FormControl(null,Validators.required))
  // }


  // remove(i:number){
    
  // this.data.get()
  //    data.removeAt(i)
  //    console.log(data,i)
  // }

 


  ngOnInit() {
   
  }
  remove(i:number){
    this.data.deleteData(i)
    .subscribe(response => {
      console.log(response);
    })
    // console.log(value)
  }
}


  // this.http.get=("https://jsonplaceholder.typicode.com/users")

    
    
  


