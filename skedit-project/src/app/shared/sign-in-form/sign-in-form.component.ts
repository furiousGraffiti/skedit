import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent{

  constructor() { }

  email = new FormControl('');
  password = new FormControl('');

}
