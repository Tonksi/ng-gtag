import { Component, OnInit, Renderer2 } from '@angular/core';
import { GoogleAnayticsService } from './google-anaytics.service';

@Component({
  selector: 'ng-gtag',
  template: '',
})
export class GoogleAnayticsComponent implements OnInit {
  constructor(
    private service: GoogleAnayticsService,
    private renderer: Renderer2
  ) {
    this.service.renderer = this.renderer;
  }

  ngOnInit(): void {
    this.service.startTracking();
  }
}
