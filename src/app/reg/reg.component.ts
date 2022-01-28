import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Info } from '../info';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private DataService:DataServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  info : Info = new Info();

  onSubmit(regInfo : any){
    let name : string = regInfo.form.value.username;
    let email : string = regInfo.form.value.email;
    let password : string = regInfo.form.value.psw;
    
    this.info.email = email;
    this.info.username = name;
    this.info.password = password;
    this.DataService.usersArr.push(this.info);
    this.DataService.currentUser = this.info;
    this.DataService.setData()
    this.info = new Info();
    //alert("Registration Successful");
    

    console.log(this.DataService.usersArr);
    this.router.navigateByUrl("/log")
  }

}
