import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';

import { GtagEventService } from './google-analytics-events.service';

describe('GoogleAnalyticsEventsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        GtagEventService,
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
      declarations: [],
    })
  );

  it('should be created', () => {
    const service: GtagEventService = TestBed.inject(GtagEventService);
    expect(service).toBeTruthy();
  });
});
