import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formContact } from '../../../models/contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  public contactForm!: FormGroup;
  public submitted: boolean= false;

  //formBuilder es privada porque solo se puede usar dentro de mi elemento
  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      surname: ['', [Validators.required, Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
      gender: ['', [Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      // Creamos un Usuario y lo emitimos
      const user: formContact = {
        name: this.contactForm.get('name')?.value,
        surname: this.contactForm.get('surname')?.value,
        age: this.contactForm.get('age')?.value,
        email: this.contactForm.get('email')?.value,
        gender: this.contactForm.get('gender')?.value,
      };
      console.log(user);
      this.contactForm.reset();
      this.submitted= false;
    }
  }
}
