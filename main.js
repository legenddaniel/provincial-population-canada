import { carousel, topPage, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2, scrollPage, btnArrow } from './utils.js';

window.addEventListener('beforeunload', topPage);

carousel.addEventListener('wheel', scrollCell);
carousel.addEventListener('wheel', getProvince);

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);

// btnArrow.addEventListener('wheel', scrollPage);