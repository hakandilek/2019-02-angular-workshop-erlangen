import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Test',
      description: 'Test',
      rating: 3
    };
  });

  it(' should always return a new instance', () => {
    const ratedBook = service.rateUp(book);

    expect(ratedBook).toBeTruthy();
    expect(ratedBook).not.toBe(book);
  });

  it('should rate up a book by one', () => {
    const ratedBook = service.rateUp(book);

    expect(ratedBook).toBeTruthy();
    expect(ratedBook.rating).toBe(4);
  });

  it('should not be allowed to rate up more than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);

    expect(ratedBook).toBeTruthy();
    expect(ratedBook.rating).toBe(5);
  });

  it('should rate down a book by one', () => {
    const ratedBook = service.rateDown(book);

    expect(ratedBook).toBeTruthy();
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to rate down less than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);

    expect(ratedBook).toBeTruthy();
    expect(ratedBook.rating).toBe(1);
  });



});
