import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Name=""
  Email=""
  Password=""
  constructor(private dataServices : DataServiceService) { 
    let user = JSON.parse(this.dataServices.getData("currentUser") as string )
    this.Name=user.username
    this.Email=user.email
    this.Password=user.password
    console.log(this.Name)
  }

  ngOnInit(): void {
  }

  showInputBox : boolean = false;
  inputPassword : string = "";
  onUpdatePass(){
    this.showInputBox = true;
  }

  onSubmit(info : any){
    let currUser = JSON.parse(this.dataServices.getCurrentUser() as string );
    currUser.password = info.form.value.passchange;
    console.log(info.form.value.passchange);

    this.dataServices.setcurrentUser(currUser);
    localStorage.setItem(currUser.email,JSON.stringify(currUser));
    this.Password = currUser.password;

    this.showInputBox=false
  }
  
  
}
