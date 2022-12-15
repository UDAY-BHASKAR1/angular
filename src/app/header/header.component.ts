import { Component,  Input, OnInit} from '@angular/core';
// import { FormControl ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 
  
  
  show(fn,p,grp){
    console.log(fn)
    console.log(p)
    console.log(grp)
  }
  
  

 

 
  constructor() { }

  ngOnInit(): void {
  
  }
  

  
}
