import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {


  minimizeSidebarStatus = false;
  @Output() minimizeSideBar = new EventEmitter<boolean>();

  minimizeSidebar() {
    this.minimizeSidebarStatus = !this.minimizeSidebarStatus;
      this.minimizeSideBar.emit(this.minimizeSidebarStatus);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
