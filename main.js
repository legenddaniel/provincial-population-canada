import { carousel, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2 } from './utils.js';

carousel.addEventListener('wheel', scrollCell);
carousel.addEventListener('wheel', getProvince);

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);