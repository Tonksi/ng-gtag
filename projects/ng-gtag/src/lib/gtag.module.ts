import { CommonModule } from '@angular/common';
import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf,
} from '@angular/core';
import { NG_GTAG_CONFIG } from './gtag.token';
import { NgGtag, NgGtagList } from './gtag.interface';
import { GoogleAnayticsComponent } from './google-anaytics/google-anaytics.component';
import { GoogleAnalyticsEventsDirective } from './google-analytics-events/google-analytics-events.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [GoogleAnayticsComponent, GoogleAnalyticsEventsDirective],
  exports: [GoogleAnayticsComponent, GoogleAnalyticsEventsDirective],
})
export class GtagModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: GtagModule
  ) {
    if (parentModule) {
      throw new Error(
        'ng-gtag should only be loaded in one module, preferably your root or core module.'
      );
    }
  }
  static forRoot(
    options: NgGtag | NgGtagList
  ): ModuleWithProviders<GtagModule> {
    return {
      ngModule: GtagModule,
      providers: [
        {
          provide: NG_GTAG_CONFIG,
          useValue: options,
        },
      ],
    };
  }
}
