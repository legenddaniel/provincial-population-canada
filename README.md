# Provincial Population Data

This statistics was done at Jan, Apr, Jul, Oct every year from 1946 to 2015.
The provincial statistics starts from 1951-07-01.

Bootstrap-style OOCSS

Since ie does not support `transform-style: preserved-3d` in any way and the function of provincial population getter is based on the rotate degree of the 3d carousel, it is not recommended to visit this page by ie. A possible fallback is to use traditional `<select>` and `<option>` html tags on ie but that is too much extra work on it and totally destroying the aethetics.

`<input type="month">` bad browser support

No sprites due to the complicated calculation of the background-position for calc() without preprocessor

Due to the normal concensus that larger screen should display more content, small font size issue on some models of mobile phones would not be fixed

Due to the layout setting, no keyboard navigation. Use pointers to reach the elements.

Due to a solution conflict, now the page will go back to top after resize, orientation change and refresh.

On ie due to browser support and no polyfill the `.txt-rainbow` is replaced by regular text
On ie due to browser support the restriction on `<input type="date">` (i.e. `min` and `max` attributes) not working even polyfilled

Bugs:

1. On ie the style might not be loaded at the first time, try resize it.

1. On chrome and ie the province images are not fully stretching across the viewport.

1. On IOS Safari pagehide event not triggered.

1. On IOS Safari the address/menu bar are counted as window.innerHeight leading to a layout mess-up.

1. On IOS Safari when changing orientation the layout might be messed up,
        try refreshing and then use full screen or portrait mode,
        or double tap the page to restore to normal.

1. On Mobile Firefox smooth scroll failed even polyfilled
    
1. On Mobile Firefox the province images keep flickering despite preload, decode and cache

1. On Edge the slot machine widget (province selector) might have a flicker. Partially fixed by a forced repaint when rolling the widget to make it look better.

<img src="qr-page.png">