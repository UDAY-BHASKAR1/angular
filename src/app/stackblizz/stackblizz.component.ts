import { Component, OnInit,VERSION } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-stackblizz',
  templateUrl: './stackblizz.component.html',
  styleUrls: ['./stackblizz.component.css']
})
export class StackblizzComponent implements OnInit {




  // name = 'Angular ' + ,VERSION.major;
  formSubmitted = false;
  registrationFormGroup = new FormGroup({
    // name: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(5),
    //   Validators.maxLength(50),
    // ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})'
      ),
    ]),
  });

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.registrationFormGroup.valid) {
      return;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
