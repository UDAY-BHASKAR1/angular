import { Component, OnInit } from '@angular/core';


interface products {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public product: products[] = [
    {
      sno: "AA101",
      name: "Titan",
      image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 8000,
      qty: 1
    },
    {
      sno: "AA102",
      name: "Fossil",
      image: 'https://images.pexels.com/photos/9423289/pexels-photo-9423289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      price: 9000,
      qty: 1
    },
    {
      sno: "AA103",
      name: "Diesel",
      image: 'https://images.pexels.com/photos/9423289/pexels-photo-9423289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=3',
      price: 9000,
      qty: 1
    },
    {
      sno: "AA104",
      name: "Rolex",
      image: 'https://images.pexels.com/photos/9878606/pexels-photo-9878606.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 9000,
      qty: 1
    },
    {
      sno: "AA105",
      name: "Hublot",
      image: 'https://images.pexels.com/photos/9423289/pexels-photo-9423289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 9000,
      qty: 1
    }
  ];
  
  
  constructor() { }
  ngOnInit(): void {
  }
 
 
   incrqty(productId:string): void{
    this.product = this.product.map((product: products) => {
      if (product.sno === productId) {
        return {
          ...product,
          qty:product.qty+1
        }
      }
      return product
    })
  }
   decrqty(productId:string): void{
    this.product = this.product.map((product: products) => {
      if (product.sno === productId) {
        return {
          ...product,
          qty: product.qty - 1 < 0 ?product.qty -1:1
        }
      }
      return product
    })
  }
   totalcal() {
    let total: number = 0;
    for (let products of this.product) {
      total += (products.qty*products.price)
    }
    return total;
  }
}

 

