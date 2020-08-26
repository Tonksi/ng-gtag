import {
  Directive,
  Renderer2,
  Input,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { GtagEventService } from './google-analytics-events.service';

@Directive({
  selector: '[ngGtagEvent]',
})
export class GoogleAnalyticsEventsDirective implements AfterViewInit {
  @Input() gtagOn!: string;
  @Input() gtagTrackingId!: string;
  @Input() gtagAction!: string;
  @Input() gtagOptions: any;

  constructor(
    private ngGtagEventService: GtagEventService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngAfterViewInit(): void {
    try {
      this.renderer.listen(this.el.nativeElement, this.gtagOn, () => {
        this.ngGtagEventService.event({
          action: this.gtagAction || this.gtagOn,
          options: { ...this.gtagOptions },
        });
      });
    } catch (err) {
      console.error(err);
    }
  }
}
