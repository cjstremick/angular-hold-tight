import { Component, OnInit, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/zip';

import { InjectionToken } from '@angular/core';

export const HT_MESSAGES = new InjectionToken<string[]>('hold-tight-messages');
export const HT_DELAY = new InjectionToken<string[]>('hold-tight-delay');

export const DEFAULT_MESSAGES = [
    'Working on it...',
    'Reticulating splines...',
    'Sorting quarks...',
    'Dividing by zero!',
    'Calculating...'
];

export const DEFAULT_DELAY = 2000;

@Component({
    selector: 'app-hold-tight',
    template: `<div class="ht-container"><p class="ht-message">{{ message }}</p></div>`
})
export class HoldTightComponent implements OnInit {
    message = 'Please wait...';
    constructor( @Inject(HT_MESSAGES) private messages: string[], @Inject(HT_DELAY) private delay: number) { }

    ngOnInit() {
        this.shuffleArray(this.messages);
        this.messages.push('Please wait...');
        Observable.from(this.messages).zip(
            Observable.interval(this.delay), function (a, b) { return a; })
            .subscribe(message => this.message = message);
    }

    private shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
