import { carousel, date, setSectionHeight, goTop, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2, scrollPage, btnArrow, position, scrollEnd, wheelEnd, preloadImg, scrollCellMobile, touchmoveMobile, restorePage } from './utils.js';
// import smoothscroll from 'smoothscroll-polyfill';

// smoothscroll.polyfill();

const imgs = ['img/bc.jpg', 'img/mn.jpg', 'img/nb.jpg', 'img/nl.jpg', 'img/ns.jpg', 'img/on.jpg', 'img/pe.jpg', 'img/qc.jpg', 'img/sk.jpg'];

window.addEventListener('load', preloadImg(...imgs));
window.addEventListener('scroll', scrollEnd);
window.addEventListener('beforeunload', goTop);
// window.addEventListener('unload', goTop);
window.addEventListener('resize', restorePage);
window.addEventListener('load', setSectionHeight);
window.addEventListener('resize', setSectionHeight);

window.addEventListener('scroll', e => e.preventDefault());
window.addEventListener('touchmove', e => e.preventDefault());

carousel.addEventListener('wheel', scrollCell);
// carousel.addEventListener('wheel', getProvince);
carousel.addEventListener('wheel', wheelEnd);
carousel.addEventListener('touchstart', scrollCellMobile.setTouchStart);
carousel.addEventListener('touchmove', touchmoveMobile);
carousel.addEventListener('touchend', wheelEnd);

for (let widget of date) {
    widget.addEventListener('focus', restorePage);
    widget.addEventListener('blur', restorePage);
};

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);

btnArrow.addEventListener('click', scrollPage);
btnArrow.addEventListener('click', position.toggleArrow);


