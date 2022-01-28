import { Injectable } from '@angular/core';
import { Info } from './info';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  usersArr : Info[] = [];
  currentUser : Info = new Info();

  setData(){
    let userData = JSON.stringify(this.currentUser)
    localStorage.setItem(this.currentUser.email, userData)
  }
  getData(email: string){
    return localStorage.getItem(email)
  }

  getCurrentUser(){
    return localStorage.getItem("currentUser");
  }

  setcurrentUser(x:Info)
  {
    let currUser = JSON.stringify(x);
    console.log(currUser)
    localStorage.setItem("currentUser", currUser)
  }
}
