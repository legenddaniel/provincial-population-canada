import { carousel, goTop, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2, scrollPage, btnArrow, position, debounceResize, scrollEnd } from './utils.js';


window.addEventListener('scroll', scrollEnd);
window.addEventListener('beforeunload', goTop);
window.addEventListener('resize', position.restorePage);

carousel.addEventListener('wheel', scrollCell);
carousel.addEventListener('wheel', getProvince);

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);

btnArrow.addEventListener('click', scrollPage);
btnArrow.addEventListener('click', position.toggleArrow);