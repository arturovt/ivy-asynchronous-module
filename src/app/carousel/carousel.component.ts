import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="carousel">
      <ng-template ngFor [ngForOf]="numbers" let-number let-index="index">
        <div class="number" *ngIf="activeIndex === index">{{ number }}</div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .carousel {
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      }

      .number {
        height: 380px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: crimson;
        color: white;
        font-size: 48px;
        font-family: monospace;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  public numbers = ['1', '2', '3', '4'];

  public activeIndex = 0;

  @HostListener('document:keyup.ArrowLeft')
  public previous(): void {
    this.activeIndex--;

    if (this.activeIndex < 0) {
      this.activeIndex = this.numbers.length - 1;
    }
  }

  @HostListener('document:keyup.ArrowRight')
  public next(): void {
    this.activeIndex++;

    if (this.activeIndex > this.numbers.length - 1) {
      this.activeIndex = 0;
    }
  }
}
