import { Component, Input, SkipSelf, OnInit } from '@angular/core';
import { ControlContainer,NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'review-info',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class ReviewComponent {

  @Input() modelGroupName: string;

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    return;
  }

  onClick(form: NgForm): void {
    const json = JSON.stringify(form.value);
    console.log(json);

    this._snackBar.open('Form Submit', 'OK', {
      announcementMessage: 'Request Submitted Successfully!'
    });
  }
}
