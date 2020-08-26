import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { StyleManager } from './style-manager.service';
import { MatIconRegistry } from '@angular/material/icon';
import { Subscription, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ng-mat-theme-picker',
  templateUrl: 'material-theme-picker.component.html',
  styleUrls: ['material-theme-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemePickerComponent implements OnDestroy {
  public readonly currentTheme$: Observable<string>;
  private queryParamSubscription = Subscription.EMPTY;
  themes: any[] = [
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Standard',
      name: 'standard',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#673AB7',
      accent: '#FFC107',
      displayName: 'Deep Purple & Amber',
      name: 'deeppurple-amber',
      isDark: false,
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      displayName: 'Indigo & Pink',
      name: 'indigo-pink',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      displayName: 'Pink & Blue-grey',
      name: 'pink-bluegrey',
      isDark: true,
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      displayName: 'Purple & Green',
      name: 'purple-green',
      isDark: true,
    },
  ];

  constructor(
    public styleManager: StyleManager,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'theme-example',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/theme-demo-icon.svg')
    );

    this.currentTheme$ = this.styleManager.theme$;
  }

  //   ngOnInit() {
  //     this._queryParamSubscription = this._activatedRoute.queryParamMap
  //       .pipe(map((params: ParamMap) => params.get('theme')))
  //       .subscribe((themeName: string | null) => {
  //         if (themeName) {
  //           this.selectTheme(themeName);
  //         }
  //       });
  //   }

  ngOnDestroy(): void {
    this.queryParamSubscription.unsubscribe();
  }

  selectTheme(themeName: string): void {
    this.styleManager.theme = themeName;
  }
}
