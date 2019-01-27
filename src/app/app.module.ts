import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { KindOfBooksComponent } from './kind-of-books/kind-of-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    KindOfBooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatIconModule, MatButtonModule, MatToolbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
