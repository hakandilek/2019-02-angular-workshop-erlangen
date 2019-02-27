import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, HostListener } from '@angular/core';

import { RatingDirective } from './rating.directive';

@Component({
  template: '<p *brRating="rating">test</p>'
})
class TestComponent {
  rating = 3;

  constructor() { }

}

describe('RatingDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        RatingDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});
