import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgGtagEvent } from '../gtag.interface';
declare var gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GtagEventService {
  constructor(@Inject(PLATFORM_ID) private platform) {}

  event(event: NgGtagEvent): void {
    if (isPlatformBrowser(this.platform)) {
      try {
        gtag('event', event.action, event.options);
      } catch (err) {
        console.error('Error occured with google analytics event', err);
      }
    }
  }
}
