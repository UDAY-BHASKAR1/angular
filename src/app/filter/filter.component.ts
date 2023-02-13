import { Component, OnInit } from '@angular/core';


interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  
  
  tableData: People[] = [];
  cols: any[] = [];
  constructor() { }

  ngOnInit() {
      this.cols = [
          { field: 'firstname', header: 'First Name' },
          { field: 'lastname', header: 'Last Name' },
          { field: 'age', header: 'Age' },
      ];
      this.tableData = [
          {
              firstname: 'David',
              lastname: 'ace',
              age: '40',
          },
          {
              firstname: 'AJne',
              lastname: 'west',
              age: '40',
          },
          {
              firstname: 'Mak',
              lastname: 'Lame',
              age: '40',
          },
          {
              firstname: 'Peter',
              lastname: 'raw',
              age: '40',
          },
          {
              firstname: 'Kane',
              lastname: 'James',
              age: '40',
          },
          {
              firstname: 'Peter',
              lastname: 'raw',
              age: '40',
          },
          {
              firstname: 'Kane',
              lastname: 'James',
              age: '40',
          },
          {
              firstname: 'Peter',
              lastname: 'raw',
              age: '40',
          },
          {
              firstname: 'Kane',
              lastname: 'James',
              age: '40',
          },
          {
              firstname: 'Peter',
              lastname: 'raw',
              age: '40',
          },
          {
              firstname: 'Kane',
              lastname: 'James',
              age: '40',
          },
          {
              firstname: 'Peter',
              lastname: 'raw',
              age: '40',
          },
          {
              firstname: 'Kane',
              lastname: 'James',
              age: '40',
          },
      ];
  }

  changeSideBarScreenWidthStatus:boolean=false;
  minimizeSideBarStatus(minimizeSideBar:boolean)
  {
      //  console.log(minimizeSideBar);
        
      this.changeSideBarScreenWidthStatus = minimizeSideBar;
      
  } 
}
