import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'AngularJS',
        description: 'gutes buch',
        rating: 4
      },
      {
        isbn: '001',
        title: 'React',
        description: 'naja',
        rating: 3
      },
      {
        isbn: '002',
        title: 'Angular',
        description: 'super buch',
        rating: 5
      }];
  }

}