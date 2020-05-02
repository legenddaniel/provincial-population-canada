import { on } from './utils.js';
import events from './events.js';

import '../style/main.css';

import 'date-input-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
 
smoothscroll.polyfill();

events.forEach(currentTarget => {
    currentTarget.events.forEach(e => {
        e.handlers.forEach(handler => {
            on(currentTarget.target, e.name, handler);
        });
    });
});



