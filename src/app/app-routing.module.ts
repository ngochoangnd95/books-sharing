import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KindOfBooksComponent } from './kind-of-books/kind-of-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: KindOfBooksComponent},
  {path: 'books/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
