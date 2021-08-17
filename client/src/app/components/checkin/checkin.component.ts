import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { bookingCodeValidation } from '../../validators/custom.validators';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  checkinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: MessageService
  ) {
    this.checkinForm = this.fb.group({
      bookingCode: [
        null,
        [
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(5),
          bookingCodeValidation,
        ],
      ],
      familyName: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (!this.checkinForm?.invalid) {
      this.message.setData(this.checkinForm.value);
      this.router.navigate(['/booking-details']);
    }
  }
}
