import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RatingDirective } from './shared/rating.directive';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    RatingDirective,
    CreateBookComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
