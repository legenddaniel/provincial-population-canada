import { carousel, goTop, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2, scrollPage, btnArrow, position, debounceResize, scrollEnd, wheelEnd, preloadImg } from './utils.js';


const img = ['img/bc.jpg', 'img/mn.jpg', 'img/nb.jpg', 'img/nl.jpg', 'img/ns.jpg', 'img/on.jpg', 'img/pe.jpg', 'img/qc.jpg', 'img/sk.jpg'];

window.addEventListener('load', preloadImg(...img));
window.addEventListener('scroll', scrollEnd);
window.addEventListener('beforeunload', goTop);
window.addEventListener('resize', position.restorePage);

carousel.addEventListener('wheel', scrollCell);
// carousel.addEventListener('wheel', getProvince);
carousel.addEventListener('wheel', wheelEnd);

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);

btnArrow.addEventListener('click', scrollPage);
btnArrow.addEventListener('click', position.toggleArrow);
