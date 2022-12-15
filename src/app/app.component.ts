import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  imageSrc:any='';
  clickedimage:any='';
  imageNameObject:any='';
  
  
  inputText: string = 'Hi...have a nice day - message from parent';
  
  
  
  inboundClick = true;
  outboundClick = true;
  constructor(private http:HttpClient){

  }

 

data:any;
  
  getData(){
    this.http.get('https://unsplash.com/napi/landing_pages/wallpapers/desktop/pc?page=1&per_page=100')
    .subscribe((data)=>{
      this.data=data
      console.log(data)
      console.log("wert")
      
    })
  }
  


showsImageBig(imageNameObject):void{
    this.data?.photos?.urls?.small;
     console.log(imageNameObject);
    this.clickedimage=imageNameObject
  }


selectArrow(imageNameObject) :void{
  this.imageNameObject+=1
  console.log(imageNameObject)
  
}




}



