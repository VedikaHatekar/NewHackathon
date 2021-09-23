import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-team',
  templateUrl: './login-team.component.html',
  styleUrls: ['./login-team.component.css']
})
export class LoginTeamComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  onClickSubmit(result:any) {
     console.log("You have entered : " + result.username + "password is" + result.password);
  }

}
