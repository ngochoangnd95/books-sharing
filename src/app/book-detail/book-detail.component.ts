import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();
  }

  book: Book;
  getBook() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(data => this.book = data);
  }

}
