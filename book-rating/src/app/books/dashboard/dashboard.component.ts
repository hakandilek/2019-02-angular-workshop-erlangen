import { Component, OnInit, OnDestroy } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(
    public ratingService: BookRatingService,
    private bookStore: BookStoreService,
  ) {
  }

  ngOnInit() {
    this.bookStore.getAll().subscribe(books => {
      this.books = books
        .sort(this.order);
    });
  }

  doRateDown(book: Book) {
    const ratedBook = this.ratingService.rateDown(book);
    this.updateList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.ratingService.rateUp(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort(this.order);
  }

  private order(b1: Book, b2: Book) {
    return b2.isbn.localeCompare(b1.isbn);
  }

  newBook(book: Book) {
    this.books = [
      ...this.books,
      book
    ]
      .sort(this.order);
  }
}
