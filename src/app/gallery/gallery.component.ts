import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  
  imageSrc:any='';
  clickedimage:any='';
  imageNameObject:any='';
  chuck:any='';
  image;any='';
  
  
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

  
  ngOnInit(): void {
  }

}
