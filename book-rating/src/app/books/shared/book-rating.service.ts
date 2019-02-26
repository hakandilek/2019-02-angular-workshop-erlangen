import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateDown(book: Book): any {
    const newBook = { ...book, rating: Math.max(book.rating - 1, this.minRating) };
    return newBook;
  }

  rateUp(book: Book): any {
    const newBook = { ...book, rating: Math.min(book.rating + 1, this.maxRating) };
    return newBook;
  }

  constructor() { }
}
