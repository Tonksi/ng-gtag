export interface NgGtag {
  trackingId: string;
  options?: any;
}

export interface NgGtagList {
  [index: number]: {
    trackingId: string;
    options?: any;
  };
}

export interface NgGtagEvent {
  trackingId?: string;
  action: string;
  options: any;
}
