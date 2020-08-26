import { Injectable, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NG_GTAG_CONFIG } from '../gtag.token';
import { NgGtag } from '../gtag.interface';
import { Observable } from 'rxjs';

declare const gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnayticsService {
  trackingId!: string;
  renderer!: Renderer2;

  constructor(
    private router: Router,
    @Inject(NG_GTAG_CONFIG) private config: NgGtag,
    @Inject(DOCUMENT) private document,
    @Inject(PLATFORM_ID) private platform
  ) {}

  startTracking(): void {
    if (isPlatformBrowser(this.platform)) {
      if (Array.isArray(this.config)) {
        this.config.forEach((conf: NgGtag) => {
          conf.options = {};
          const s1 = this.renderer.createElement('script');
          s1.src = `https://www.googletagmanager.com/gtag/js?id='${conf.trackingId}'`;
          this.renderer.appendChild(this.document.head, s1);
        });
      } else if (this.config.options === undefined) {
        this.config.options = {};
        const s1 = this.renderer.createElement('script');
        s1.src = `https://www.googletagmanager.com/gtag/js?id='${this.config.trackingId}'`;
        this.renderer.appendChild(this.document.head, s1);
      }

      const s2 = this.renderer.createElement('script');
      const text = this.renderer.createText(
        `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());`
      );

      this.renderer.appendChild(s2, text);
      this.renderer.appendChild(this.document.head, s2);

      const observable = this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ) as Observable<NavigationEnd>;

      observable.subscribe((navEnd: NavigationEnd) => {
        if (Array.isArray(this.config)) {
          this.config.forEach((conf: NgGtag) => {
            conf.options.page_path = navEnd.urlAfterRedirects;
            gtag('config', conf.trackingId, conf.options);
          });
        } else {
          this.config.options.page_path = navEnd.urlAfterRedirects;
          gtag('config', this.config.trackingId, this.config.options);
        }
      });
    }
  }
}
