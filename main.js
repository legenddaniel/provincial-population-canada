import { scrollCell, getProvince } from './utils.js';

const cells = document.getElementsByClassName('cell');
for (let cell of cells) {
    cell.addEventListener('wheel', scrollCell);
    cell.addEventListener('wheel', getProvince);
}

const btnGet = document.getElementsByClassName('btn-get');
btnGet.addEventListener('click', () => { });