import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Feedback } from '../model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],

})
export class FeedbackComponent {

  constructor(private _snackBar: MatSnackBar){}

  feedbackForm:Feedback = {
    id: 0,
    firstName: 'Hunts Ville',
    lastName: 'Spring Dale',
    email: 'Orlando',
    phone: 0,
    location: 'Augusta',
    comments: 'New York',
    rating: 0
  }

  ngOnInit(): void {
  }
  locations = ["Hunts Ville", "Spring Dale", "Orlando", "Augusta", "New York"]
  PriorityOrder=[{id:1,priority:"Low"},{id:2,priority:"Medium"},{id:3,priority:"High"},{id:4,priority:"Critical"}]

  onSubmit(_feedbackForm: any){
    this._snackBar.open('Feedback submitted successfully', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
      })

  }


  }

