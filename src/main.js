import { on } from './utils.js';
import events from './events.js';

events.forEach(currentTarget => {
    currentTarget.events.forEach(e => {
        e.handlers.forEach(handler => {
            on(currentTarget.target, e.name, handler);
        });
    });
});

// for (let widget of datePicker) {
//     widget.addEventListener('focus', safariRestorePage);
//     widget.addEventListener('blur', safariRestorePage);
// }



