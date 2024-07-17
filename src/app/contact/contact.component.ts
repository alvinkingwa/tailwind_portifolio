import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  links = {
    LinkedIn:
      'https://www.linkedin.com/in/alvin-king-wa-276974231/?trk=people_directory&originalSubdomain=ke',
    github: 'https://github.com/alvinkingwa',
    twitter: 'https://twitter.com/alvinkingwa',
  };

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: 'Alvin',
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  successMessage: string = '';

  constructor(private fb: FormBuilder) {}

  async send() {
    if (this.form.valid) {
      emailjs.init('GuAOdBFHY4isa5MEy');
      try {
        let response = await emailjs.send('service_d84e4o9', 'template_48zqpmf', {
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          subject: this.form.value.subject,
          message: this.form.value.message
        });

        this.successMessage = 'Message has been sent successfully!';
        this.form.reset();

       
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      } catch (error) {
        console.error('Error sending email:', error);
        this.successMessage = 'Failed to send message. Please try again.';
      }
    }
  }
}