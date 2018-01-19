import { NgModule, InjectionToken } from '@angular/core';

import { HoldTightComponent, HT_MESSAGES, DEFAULT_MESSAGES, HT_DELAY, DEFAULT_DELAY } from './hold-tight.component';

export * from './hold-tight.component';

@NgModule({
  imports: [],
  declarations: [HoldTightComponent],
  exports: [HoldTightComponent],
  providers: [
    { provide: HT_MESSAGES, useValue: DEFAULT_MESSAGES },
    { provide: HT_DELAY, useValue: DEFAULT_DELAY }
  ],
})
export class HoldTightModule { }
