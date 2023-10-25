import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isSubmitted = false;

  Services = ['Content Creation',
    'Social Media Management',
    'Paid Ad Campaigns',
    'Building My Brand',
    'Updating My Brand\'s Social Media',
    'Video and Photography Services',
    'Everything'
  ]

  Referrals = ['Saw our work',
    'Advertisement',
    'A friend/family member',
    'Google Search',
    'A Business Recommendation',
    'Other'
  ]

  form = this.fb.group ({
    firstName: new FormControl(undefined, [Validators.required]),
    lastName: new FormControl(undefined, [Validators.required]),
    email: new FormControl(undefined, [Validators.required]),
    companyName: new FormControl(''),
    serviceOfInterest: new FormControl(undefined, [Validators.required]),
    referred: new FormControl(''),
  })

  constructor(public fb: FormBuilder) { }

  clearForm() {
    this.form.reset()
  }

  submitInquiry() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      return false
    } else {
      alert("Thank you for your interest! We look forward to working with you.")
      this.form.reset()
      return true
    }
  }
}
