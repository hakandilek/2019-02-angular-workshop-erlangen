import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`https://api.angular.schule/books`);
  }

  getOne(isbn: string): Observable<Book[]> {
    return this.http.get<Book[]>(`https://api.angular.schule/books/${isbn}`);
  }

  create(book: Book): Observable<any> {
    return this.http.post(`https://api.angular.schule/books`, book, { responseType: 'text' });
  }

  update(isbn: string, book: Book): Observable<any> {
    return this.http.put(`https://api.angular.schule/books/${isbn}`, book, { responseType: 'text' });
  }

  delete(isbn: string): Observable<any> {
    return this.http.delete(`https://api.angular.schule/books/${isbn}`, { responseType: 'text' });
  }

}
