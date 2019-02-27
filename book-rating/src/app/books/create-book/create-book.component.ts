import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  created = new EventEmitter<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('👀')
  });

  isInvalid(field: string) {
    const control = this.bookForm.get(field);
    return control.invalid && control.dirty;
  }

  submitForm() {
    const book = {
      ...this.bookForm.value,
      rating : 1,
      price : 10
    };

    this.created.emit(book);
    this.bookForm.reset();
  }
}
