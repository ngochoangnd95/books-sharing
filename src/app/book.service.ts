import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBook(id: number): Observable<Book> {
    let url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }

}
