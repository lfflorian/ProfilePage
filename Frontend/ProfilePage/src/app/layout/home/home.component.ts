import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  User: string;
  message: string;
  showMessage: boolean = false;
  showLoader: boolean = false;
  
  constructor(private router: Router,
              private userService : UserService) { }

  ngOnInit(): void {
  }

  goToProfile() {
    this.showLoader = true;
    this.showMessage = false;

    this.userService.getUser(this.User).subscribe(user => {
      this.showLoader = false;
      this.router.navigateByUrl(`profile/user/${this.User}`)
    }, (error : HttpErrorResponse) => {
      switch (error.status) {
        case 404:
          this.message = "User not found, please try again!";
          break;
        case 500:
          this.message = "There its an error from the server, please try again later";
          break;
        default:
          this.message = "There its an error, please try again later";
          break;
      }

      this.showLoader = false;
      this.showMessage = true;
    })
  }
}
