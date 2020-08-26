import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable()
export class ThemeCacheService {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  get cachedTheme(): string {
    return this.isBrowser
      ? localStorage.getItem('aeonyx-page-theme')
      : undefined;
  }

  set cachedTheme(val: string | null) {
    if (val !== null) {
      localStorage.setItem('aeonyx-page-theme', val);
    } else {
      localStorage.removeItem('aeonyx-page-theme');
    }
  }
}
