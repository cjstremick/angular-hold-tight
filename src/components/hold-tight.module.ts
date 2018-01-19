import { NgModule, InjectionToken } from '@angular/core';

import { HoldTightComponent, HT_MESSAGES, DEFAULT_MESSAGES } from './hold-tight.component';

export * from './hold-tight.component';

@NgModule({
  imports: [],
  declarations: [HoldTightComponent],
  exports: [HoldTightComponent],
  providers: [
    { provide: HT_MESSAGES, useValue: DEFAULT_MESSAGES }
  ],
})
export class HoldTightModule { }
