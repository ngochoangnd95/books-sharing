import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getTopBooks();
  }

  topBooks: Book[];
  getTopBooks() {
    this.bookService.getBooks().subscribe(data => this.topBooks = data.slice(0, 5));
  }

}
