import {
  Component,
  ChangeDetectionStrategy,
  ɵcreateInjector as createInjector,
  Injector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div #carousel></div>
    <button (click)="showCarousel()">Show carousel</button>
  `,
  styles: [
    `
      button {
        border: 2px solid crimson;
        background: transparent;
        font-size: 24px;
        font-family: monospace;
        padding: 10px;
        cursor: pointer;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('carousel', { read: ViewContainerRef, static: true })
  public carousel: ViewContainerRef;

  constructor(private injector: Injector) {}

  public showCarousel(): void {
    import('./carousel/carousel.module').then(({ CarouselModule }) => {
      const injector = createInjector(CarouselModule, this.injector);
      const carouselModule = injector.get(CarouselModule);
      carouselModule.renderCarousel(this.carousel);
    });
  }
}
