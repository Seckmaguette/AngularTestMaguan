import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-fils',
  templateUrl: './user-fils.component.html',
  styleUrls: ['./user-fils.component.css']
})
export class UserFilsComponent implements OnInit {

  user!: User
  constructor(private userFils:UserService, private route: ActivatedRoute ){

  }
  ngOnInit(): void {
      const id = +this.route.snapshot.params['id'];

      this.userFils.getUserById(id).subscribe(
        data => {
          this.user = data
        }
      )
  }

}
