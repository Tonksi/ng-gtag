import { TestBed } from '@angular/core/testing';

import { GoogleAnayticsService } from './google-anaytics.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NG_GTAG_CONFIG } from '../gtag.token';

describe('GoogleAnayticsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        GoogleAnayticsService,
        {
          provide: NG_GTAG_CONFIG,
          useValue: '{ trackingId: "UA-24362456" }',
        },
      ],
      imports: [RouterTestingModule],
    })
  );

  it('should be created', () => {
    const service: GoogleAnayticsService = TestBed.inject(
      GoogleAnayticsService
    );
    expect(service).toBeTruthy();
  });
});
