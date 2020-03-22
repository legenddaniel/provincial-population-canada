import * as carousel from './carousel.js';

const cells = document.getElementsByClassName('cell');
for (let cell of cells) {
    cell.addEventListener('wheel', carousel.scrollCell);
}