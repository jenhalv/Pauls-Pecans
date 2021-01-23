import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  // @ViewChild('contactForm') contactForm: NgForm;
  // @ViewChild('contactForm', { static: false }) contactForm: FormGroup;
  // contactForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('', [Validators.required, Validators.minLength(2)]);
  // message = new FormControl('', [Validators.required, Validators.minLength(10)]);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
      floatLabel: this.floatLabelControl,
    });
  }
   ngOnInit(): void {
    }

    // tslint:disable-next-line:typedef
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter an email address.';
      }
      return this.email.hasError('email') ? 'This is not a valid email.' : '';
    }

    onSubmit(): void {
      // this.router.navigate(['']);
      console.log('test');
    }

    reset(): void {
      this.contactForm.reset();
      console.log('error');
    }

  }
