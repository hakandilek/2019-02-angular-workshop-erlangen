import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[brRating]'
})
export class RatingDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set brRating(rating: number) {
    this.viewContainer.clear();
    for (let i = 0; i < rating; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
