import { User } from './../models/user';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[]

  constructor(private userService: UserService, private router: Router){

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      value=> {
        this.users = value
        console.log(this.users)
      }
    )
  }

  showUserDetails(id: number){
    this.router.navigateByUrl("/user/"+id)
  }


}
