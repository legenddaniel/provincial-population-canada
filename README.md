# Provincial Population Data

See the demo on [Github Pages](https://legenddaniel.github.io/provincial-population-canada/)

This application provides the statistics of population of Canada from 1946 to 2015. Both national and provincial population data are included. The purpose of this project is to practice <strong>vanilla Javascript APIs</strong>, <strong>asynchronous programming</strong> and to exercise <strong>front-end engineering (configurization, modularization, normalization and automation)</strong>. In this application the styles are written by CSS instead of SCSS or CSS lib, in a Bootstrap-style OOCSS. This application is adaptive for various devices and display orientations.

On the provincial population section (the last page), use mousewheel/touchmove to switch provinces.

---

## Tested browsers (lowest versions, stars for experience):

- Chrome 80, ☆☆☆☆☆

- Firefox 75, ☆☆☆☆☆

- Opera 68, ☆☆☆☆☆

- Edge 18, ☆☆☆

- ~~IE 11~~ ☆

- Android Chrome 62, ☆☆☆☆☆

- Android Firefox 68, ☆☆☆

- IOS Safari 13 ☆☆☆

---

<blockquote>

Since IEs do not support `transform-style: preserve-3d` in any way and the function of provincial population getter is based on the rotate degree of the 3d carousel, it is not recommended to visit this page by IE. A possible fallback is to use traditional `<select>` and `<option>` html tags on IE but that is too much extra work on it and totally destroying the aethetics.

Due to the layout setting, no keyboard navigation. Use pointers to reach the elements.

Due to a solution conflict, now the page will go back to top after resize, orientation change and refresh.

On IE due to browser support and no polyfill the `.txt-rainbow` is replaced by regular text.

On IE due to browser support the restriction on `<input type="date">` (i.e. `min` and `max` attributes) not working even polyfilled.

</blockquote>

---

## Bugs:

- On IE the style might not be loaded at the first time, try resize it.

- On Chrome and IE the province images are not fully stretching across the viewport.

- On IOS Safari pagehide event not triggered.

- On IOS Safari the address/menu bar are counted as window.innerHeight leading to a layout mess-up.

- On IOS Safari when changing orientation the layout might be messed up, try refreshing and then use full screen or portrait mode, or double tap the page to restore to normal.

- On Mobile Firefox smooth scroll failed even polyfilled, replaced by regular scroll without animation.
    
- On Mobile Firefox the province images keep flickering despite preload, decode and cache.

- On Edge the slot machine widget (province selector) might have a flicker. Partially fixed by a forced repainting when rolling the widget to make it look better.


<figure>
    <img src="qr-page.png" alt="QR-code for mobile visit">
    <figcaption>Scan the QR code to visit the Github page on phone</figcaption>
</figure>
