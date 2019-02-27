import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  template: 'test book ',
})
export class TestBookComponent {

  @Input()
  book: Book;

  @Input()
  maxRating: number;

  @Input()
  minRating: number;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let book: Book;

  beforeEach(async(() => {

    book = {
      isbn: 'test',
      title: 'test',
      description: 'test book',
      rating: 1
    };

    const bookRatingMock = {
      rateUp: () => book,
      rateDown: () => book,
      maxRating: 5,
      minRating: 1
    };

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        TestBookComponent
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doRateUp should delegate method call', () => {
    const ratingService = TestBed.get(BookRatingService);
    spyOn(ratingService, 'rateUp').and.callThrough();

    component.doRateUp(book);

    expect(ratingService.rateUp).toHaveBeenCalledWith(book);
  });

  /*
  it('doRateDown should delegate method call', () => {
    const ratingService = TestBed.get(BookRatingService);
    spyOn(ratingService, 'rateDown').and.callThrough();

    component.doRateDown(book);

    expect(ratingService.doRateDown).toHaveBeenCalledWith(book);
  });
*/
});
