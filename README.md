# angular-hold-tight
Rotate messages to help time pass while waiting for work to happen.

## Installation
From your Angular 5 project
`npm i angular-hold-tight`

## Use
Import the HoldTightModule into one of your Angular modules

    import {HoldTightModule} from 'angular-hold-tight';

    @NgModule({
       ...
       imports: [
           ...
           HoldTightModule,
           ...
       ],
       ...

Now you can use the component where you like:

    <hold-tight></hold-tight>

## Optional configuration
Pass a 'delay' property to the control to change the default delay of 2500 millisends.

    <hold-tight [delay]="1000"></hold-tight>

The component has a few default messages.  You can supply a new list of messages to the component like this:

    const customMessages = [
      'Doing something...',
      'Doing somehting else...',
      'Doing more things...',
      'So many messages...',
      'TODO: Be creative...'
    ];

    @NgModule({
        ...
        providers: [{ provide: HT_MESSAGES, useValue: customMessages }],
        ...
