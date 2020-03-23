import { carousel, scrollCell, getProvince } from './utils.js';

carousel.addEventListener('wheel', scrollCell);
carousel.addEventListener('wheel', getProvince);

const btnGet = document.getElementsByClassName('btn-get');
// btnGet.addEventListener('click', () => { });