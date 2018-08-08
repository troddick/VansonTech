import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs';

@Directive({selector: '[screenBelowLarge]'})
export class ScreenBelowLarge implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private _viewContainer: ViewContainerRef, 
              private _template: TemplateRef<Object>,
              private _screenService: ScreenService) {

    this.screenSubscription = _screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenBelowLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this._screenService.screenWidth < this._screenService.largeBreakpoint;
    
    if (condition && !this.hasView) {
      this.hasView = true;
      this._viewContainer.createEmbeddedView(this._template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this._viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }
}
