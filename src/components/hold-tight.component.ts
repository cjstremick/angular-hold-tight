import { Component, OnInit, Inject, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/zip';

import { InjectionToken } from '@angular/core';

export const HT_MESSAGES = new InjectionToken<string[]>('hold-tight-messages');

export const DEFAULT_MESSAGES = [
    'Working on it...',
    'Reticulating splines...',
    'Sorting quarks...',
    'Dividing by zero!',
    'Calculating...'
];

@Component({
    selector: 'hold-tight',
    template: `<div class="ht-container"><p class="ht-message">{{ message }}</p></div>`
})
export class HoldTightComponent implements OnInit {
    message: string;
    @Input() initialMessage: string = 'Please wait...';
    @Input() finalMessage: string = 'This is taking a really long time...';
    @Input() delay = 2500;

    constructor( @Inject(HT_MESSAGES) private messages: string[]) { }

    ngOnInit() {
        this.shuffleArray(this.messages);
        this.messages.push(this.initialMessage);
        Observable.from(this.messages).zip(
            Observable.interval(this.delay), function (a, b) { return a; })
            .subscribe(
            message => this.message = message,
            error => console.log(error),
            () => this.message = this.finalMessage);
    }

    private shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
