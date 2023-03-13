import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from '../../../models/note';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

  passFormControl = new FormControl('', [
    Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
]);
// confirmFormControl = new FormControl('', [
//     Validators.required,
//     ]);



  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    gender: [''],
    age: ['',[Validators.required,Validators.min(18)]],
    phone: ['', [Validators.required,Validators.pattern(/^[789]\d{9,9}$/)]],

    address:this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',[Validators.required,Validators.pattern(/^\d{5}$/)]]
    })
  });


  get firstName() { return this.profileForm.get("firstName") }

  get lastName() { return this.profileForm.get("lastName") }

  get email() { return this.profileForm.get("email") }

  get phone() { return this.profileForm.get("phone"); }

  get age() { return this.profileForm.get("age"); }

  get password() { return this.profileForm.get("password"); }

  get confirmPassword() { return this.profileForm.get("confirmPassword"); }

  get state() { return this.profileForm.get("address")?.get("state"); }

  get street() { return this.profileForm.get("address")?.get("street"); }

  get city() { return this.profileForm.get("address")?.get("city"); }

  get zip() { return this.profileForm.get("address")?.get("zip"); }



  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;

    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    alert(confirmPasswordValue)
    if (!passwordValue || !confirmPasswordValue) {

      return null;
    }
    if (passwordValue != confirmPasswordValue) {

        return { mustMatch: false }
    }
    return null;
  }

  constructor(private fb: FormBuilder,private noteService:NoteService, private _snackBar: MatSnackBar) { }

  note:Note={

  };

  // @Output()
  // addNote:EventEmitter<Note> =new EventEmitter<Note>();

  // user={

  // }



  onSubmit(){
   alert("Hii Registration completed successfully")

    this.noteService.addNote(this.profileForm.value).subscribe({
      next:data=>{
        // this.addNote.emit(this.note);
        this._snackBar.open('Registration successfull!', 'success', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
          })
        this.note={};
      },
      error:e=>{
        alert("Unable to load the Blog due to Network Error");
      }
    });


  }

}
