import { carousel, goTop, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2, scrollPage, btnArrow, hideArrow, ifResize, debounceResize } from './utils.js';

window.addEventListener('load', debounceResize(ifResize.restorePage));

window.addEventListener('beforeunload', goTop);
// window.addEventListener('resize', ifResize.restorePage);

carousel.addEventListener('wheel', scrollCell);
carousel.addEventListener('wheel', getProvince);

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);

btnArrow.addEventListener('click', scrollPage);
btnArrow.addEventListener('click', hideArrow);
// btnArrow.addEventListener('mouseup', () => {
//     window.addEventListener('animationend', ifResize.updatePageNum);
// });