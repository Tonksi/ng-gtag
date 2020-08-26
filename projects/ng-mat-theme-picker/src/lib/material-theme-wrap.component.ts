import { Component, ViewEncapsulation } from '@angular/core';
import { StyleManager } from './style-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-mat-theme-wrap',
  templateUrl: 'material-theme-wrap.component.html',
  styleUrls: ['material-theme-wrap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThemeWrapComponent {
  theme$: Observable<string>;

  constructor(private readonly styleManager: StyleManager) {
    this.theme$ = this.styleManager.theme$;
  }
}
