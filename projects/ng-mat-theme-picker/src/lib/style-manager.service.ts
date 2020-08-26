import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { def } from 'defaulto';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeCacheService } from './theme-cache.service';

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable()
export class StyleManager {
  private currentTheme!: string;
  private currentTheme$: BehaviorSubject<string>;

  constructor(
    private readonly overlayContainer: OverlayContainer,
    private themeCache: ThemeCacheService
  ) {
    this.currentTheme = def(this.themeCache.cachedTheme).to('standard');
    this.currentTheme$ = new BehaviorSubject(this.currentTheme);

    this.applyOverlayThemes();
  }

  set theme(theme: string) {
    this.themeCache.cachedTheme = theme;
    this.currentTheme$.next(theme);
  }

  get theme$(): Observable<string> {
    return this.currentTheme$.asObservable();
  }

  private applyOverlayThemes(): void {
    this.theme$.subscribe((theme) => {
      this.overlayContainer
        .getContainerElement()
        .classList.remove(this.currentTheme);

      this.currentTheme = theme;

      this.overlayContainer
        .getContainerElement()
        .classList.add(this.currentTheme);
    });
  }
}
