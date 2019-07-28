import {
  NgModule,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ApplicationRef,
  ComponentRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomPortalHost, ComponentPortal } from '@angular/cdk/portal';

import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent]
})
export class CarouselModule {
  constructor(
    private resolver: ComponentFactoryResolver,
    private app: ApplicationRef,
    private injector: Injector
  ) {}

  public renderCarousel(viewContainerRef: ViewContainerRef): ComponentRef<CarouselComponent> {
    const host = new DomPortalHost(
      viewContainerRef.element.nativeElement,
      this.resolver,
      this.app,
      this.injector
    );

    const portal = new ComponentPortal(
      CarouselComponent,
      viewContainerRef,
      this.injector,
      this.resolver
    );

    const componentRef = portal.attach(host);
    componentRef.changeDetectorRef.markForCheck();
    return componentRef;
  }
}
