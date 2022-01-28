import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService:DataServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(loginInfo : any){
    let emailId : string = loginInfo.form.value.email;
    let password : string = loginInfo.form.value.psw;
    console.log(emailId,password);

    if(this.validate(emailId,password) === true)
    {
      console.log("Correct")
      this.router.navigateByUrl("/dash");
    }
    else
    {
      console.log("Wrong Credentials");
    }

  }

  validate(emailId : string,password : string)
  {
    let user = JSON.parse(this.dataService.getData(emailId) as string )
    if(user!=null)
    {
      if(user.email == emailId && user.password == password)
      {
        this.dataService.setcurrentUser(user);
        return true;
      }
      else{
        return false
      }
    }
    /*for(let i=0;i<this.dataService.usersArr.length;i++)
    {
      if(emailId === this.dataService.usersArr[i].email)
      {
        if(password === this.dataService.usersArr[i].password)
        {
          this.dataService.currentUser = this.dataService.usersArr[i];
          return true;
        }
      }
    }*/
    return false;
  }

}
