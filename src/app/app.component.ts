import { Component } from '@angular/core';
import { User } from 'app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user = new User()
  users:Array<User> = []
  onSubmit(){
    this.users.push(this.user)
    console.log(this.users)
    this.user = new User()
  }
}
