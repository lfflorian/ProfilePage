import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResult } from 'src/app/model/usersFromSearch';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  @Input() user: UserResult;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile(username: string) {
    this.router.navigateByUrl(`profile/user/${username}`)
  }
}
