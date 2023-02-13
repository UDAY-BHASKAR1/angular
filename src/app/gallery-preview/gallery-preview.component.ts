import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig
} from "primeng/api";



@Component({
  selector: 'app-gallery-preview',
  templateUrl: './gallery-preview.component.html',
  styleUrls: ['./gallery-preview.component.css']
})
export class GalleryPreviewComponent implements OnInit {
  imageData: any = {};
   delete:any;
  data: any;
  images:any=[];
  id:any;
  // checkBoxArray:any=[];
  // checkBoxName:any;
  buttonsDisplay:any;
  // confirmationService:any;
  // checks:any;
  // sharedService:any;
   noRecordsFound:any;
  service:any;
  LoadData:any;

  masterSelected:boolean;
  // checklist:any;
  checkedArray:any;
  sharedService:any;

  public gridData: any[] = this.images;
  responsiveOptions:any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  
  displayCustom: boolean;
  activeIndex: any = 0;
  constructor(private http: TestService,private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) { 
    // this.masterSelected = false;
  }
  
  ngOnInit(): void {
    this.http.getUser(this.imageData).subscribe(res => {
      this.data = res;
      console.log(this.data)
      this.images=this.data.photos;
      console.log(this.images);
      localStorage.setItem('session',JSON.stringify(this.images));
       this.getCheckedItemList();
    })

  }
    imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  public removeItem(id){
    this.images.splice(id,1);
    console.log(id)
  }

  
  checkUncheckAll() {
    for (var i = 0; i < this.images.length; i++) {
      this.images[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.images.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){        
    this.checkedArray = [];
    for (var i = 0; i < this.images.length; i++) {
      if(this.images[i].isSelected)
      this.checkedArray.push(this.images[i]);
    }
    //  this.checkedArray = JSON.stringify(this.checkedArray);
    console.log(this.checkedArray);
    
  }
  
  deleteAll() {
    console.log("uday");
    
    if (this.checkedArray.length > 0){
      console.log(this.images,'hello');
      for(var i=0;i<this.checkedArray.length;i++){

        var obj = this.checkedArray[i];
        console.log(obj);

        this.images.splice(this.images.indexOf(obj), 1);
       }
    
}
}




}

 
  
  
  
  
  

