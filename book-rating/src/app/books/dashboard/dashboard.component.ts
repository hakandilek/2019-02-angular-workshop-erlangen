import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { pipeBind1 } from '@angular/core/src/render3';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(public ratingService: BookRatingService) {
  }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'AngularJS',
        description: 'gutes buch',
        rating: 4,
        price: 10
      },
      {
        isbn: '001',
        title: 'React',
        description: 'naja',
        rating: 3,
        price: 1
      },
      {
        isbn: '002',
        title: 'Angular',
        description: 'super buch',
        rating: 5,
        price: 34.99
      }].sort(this.order);
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
}
