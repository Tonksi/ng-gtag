import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StyleManager } from './style-manager.service';
import { ThemePickerComponent } from './material-theme-picker.component';
import { ThemeWrapComponent } from './material-theme-wrap.component';
import { ThemeCacheService } from './theme-cache.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule
  ],
  exports: [ThemePickerComponent, ThemeWrapComponent],
  declarations: [ThemePickerComponent, ThemeWrapComponent],
  providers: [StyleManager, ThemeCacheService]
})
export class ThemePickerModule {}
