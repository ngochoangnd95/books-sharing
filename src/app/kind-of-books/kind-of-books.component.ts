import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-kind-of-books',
  templateUrl: './kind-of-books.component.html',
  styleUrls: ['./kind-of-books.component.css']
})
export class KindOfBooksComponent implements OnInit {

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  kindOfBooks = ['VH-VN', 'VH-NN', 'KH', 'LS', 'KN'];

  books: Book[];
  getBooks() {
    this.bookService.getBooks()
      .subscribe(data => this.books = data);
  }

}
