import { Component, OnInit } from '@angular/core';
import { Items } from '../items';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.css']
})
export class MenuCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isCartOpen = false;
  isProductOpen = true;
  totalAmt = 0;

  itemObj1 : Items = new Items(0,"Pizza","Italian",350,1);
  itemObj2 : Items = new Items(1,"Burger","Snacks",120,1);
  itemObj3 : Items = new Items(2,"Noodles","Chinese",100,1);

  homeItems : Items[] = [this.itemObj1,this.itemObj2,this.itemObj3];
  cartItems : Items[] = [];

  openCart(){
    this.isCartOpen = true;
    this.isProductOpen = false;
  }

  openHome(){
    this.isCartOpen = false;
    this.isProductOpen = true;
  }

  increase(itemObj : Items){
    itemObj.qnt++;
    this.totalAmt = this.totalAmt + itemObj.price;
  }

  decrease(itemObj : Items){
    
    itemObj.qnt--;
    this.totalAmt = this.totalAmt - itemObj.price;
    if(itemObj.qnt === 0)
    {
      let idx = this.cartItems.indexOf(itemObj);
      if(idx !== -1)
      {
        this.cartItems.splice(idx,1);
      }
    }
  }

  addToCart(itemObj : Items){
    console.log(itemObj);
    let flag : boolean = true;
    for(let i=0;i<this.cartItems.length;i++)
    {
      if(this.cartItems[i].id === itemObj.id && this.cartItems[i].Name=== itemObj.Name)
      {
        this.cartItems[i].qnt++;
        this.totalAmt = this.totalAmt + itemObj.price;
        flag = false;
        break;
      }
    }
    if(flag === true)
    {
      if(itemObj.qnt === 0)
      {
        itemObj.qnt = 1;
      }
      this.totalAmt = this.totalAmt + itemObj.price;
      this.cartItems.push(itemObj);
    }
    // console.log(this.cartItems);
    console.log(this.totalAmt);
  }
}
