import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;

  rateDown(book: Book): any {
    return { ...book, rating: Math.max(book.rating - 1, this.minRating) };
  }

  rateUp(book: Book): any {
    return { ...book, rating: Math.min(book.rating + 1, this.maxRating) };
  }

}
