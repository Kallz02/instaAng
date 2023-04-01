import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  username = '';
  loading = false;
  status: string | 'real' | 'fake' | 'error' = '';

  constructor(private userService: UserService) { }

  checkStatus() {
    this.loading = true;
    this.userService.getUser(this.username)
      .subscribe(
        user => {
          this.status = user.prediction ? 'fake' : 'real';
          this.loading = false;
        },
        error => {
          console.error(error);
          this.status = 'error';
          this.loading = false;
        }
      );
  } 

}
