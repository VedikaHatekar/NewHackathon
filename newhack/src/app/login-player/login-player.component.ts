import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-player',
  templateUrl: './login-player.component.html',
  styleUrls: ['./login-player.component.css']
})
export class LoginPlayerComponent implements OnInit {


  constructor() { }


  ngOnInit() {
  }
  onClickSubmit(result:any) {
    console.log("You have entered : " + result.username + "password is" + result.password);
  }

}
