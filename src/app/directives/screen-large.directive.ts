import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs';

@Directive({selector: '[screenLarge]'})
export class ScreenLarge implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private _viewContainer: ViewContainerRef, private _template: TemplateRef<Object>,
                private _screenService: ScreenService) {
    this.screenSubscription = _screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this._screenService.screenWidth >= this._screenService.largeBreakpoint;
    // if we are on a large screen and there is no view  then create the view
    if (condition && !this.hasView) {
      this.hasView = true;
      // viewcontainer is view this element is placed on. createembeddedview will add template to dom
      this._viewContainer.createEmbeddedView(this._template); 
    } else if (!condition && this.hasView) {
      // else we are on a small screen and we already created the view
      this.hasView = false;
      this._viewContainer.clear(); //remove element from dom
    }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }
  
  onResize() {
    // trigger the setter. false doesn't mean anything, just used to trigger the setter
    this.screenLarge = false;
  }
}
