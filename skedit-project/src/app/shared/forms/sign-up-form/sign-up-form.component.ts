import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor() { }

  email = new FormControl('');
  password = new FormControl('');
  passwordRepeated = new FormControl('');

  ngOnInit() {
  }

}
