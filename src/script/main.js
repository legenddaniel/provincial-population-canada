import { on } from './utils.js';
import events from './events.js';

import '../style/main.css';

events.forEach(currentTarget => {
    currentTarget.events.forEach(e => {
        e.handlers.forEach(handler => {
            on(currentTarget.target, e.name, handler);
        });
    });
});



