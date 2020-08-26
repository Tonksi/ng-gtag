import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';

import { NgGtagEventService } from './google-analytics-events.service';

describe('GoogleAnalyticsEventsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        NgGtagEventService,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
      declarations: [],
    })
  );

  it('should be created', () => {
    const service: NgGtagEventService = TestBed.inject(NgGtagEventService);
    expect(service).toBeTruthy();
  });
});
