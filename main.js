import { carousel, date, setSectionHeight, goTop, scrollCell, getProvince, btnGet1, btnGet2, showResult1, showResult2, scrollPage, btnArrow, position, scrollEnd, msCellDisplayBugFix, wheelEnd, preloadImg, scrollCellMobile, touchmoveMobile, restorePage, safariRestorePage, preventDefault } from './utils.js';
// import smoothscroll from 'smoothscroll-polyfill';

// smoothscroll.polyfill();

const imgs = ['img/bc.jpg', 'img/mn.jpg', 'img/nb.jpg', 'img/nl.jpg', 'img/ns.jpg', 'img/on.jpg', 'img/pe.jpg', 'img/qc.jpg', 'img/sk.jpg'];

const eventConfig = [
    {
        target: window,
        events: [{
            name: 'load',
            handlers: [preloadImg(...imgs), setSectionHeight]
        }, {
            name: 'beforeunload',
            handlers: [goTop]
        }, {
            name: 'scroll',
            handlers: [scrollEnd, preventDefault]
        }, {
            name: 'touchmove',
            handlers: [preventDefault]
        }, {
            name: 'orientationchange',
            handlers: [goTop]
        }, {
            name: 'resize',
            handlers: [restorePage, setSectionHeight]
        }]
    }, {
        target: carousel,
        events: [{
            name: 'wheel',
            handlers: [scrollCell, msCellDisplayBugFix, wheelEnd]
        }, {
            name: 'touchstart',
            handlers: [scrollCellMobile.setTouchStart]
        }, {
            name: 'touchmove',
            handlers: [touchmoveMobile]
        }, {
            name: 'touchend',
            handlers: [wheelEnd]
        }]
    }, {
        target: btnArrow,
        events: [{
            name: 'click',
            handlers: [scrollPage, position.toggleArrow]
        }]
    }
];

const on = function (currentTarget, type, handler) {
    currentTarget.addEventListener(type, handler);
};

eventConfig.forEach(currentTarget => {
    currentTarget.events.forEach(e => {
        e.handlers.forEach(handler => {
            on(currentTarget.target, e.name, handler);
        });
    });
});

// window.addEventListener('load', preloadImg(...imgs));
// window.addEventListener('scroll', scrollEnd);
// window.addEventListener('beforeunload', goTop);
// window.addEventListener('orientationchange', goTop);
// window.addEventListener('resize', restorePage);
// window.addEventListener('load', setSectionHeight);
// window.addEventListener('resize', setSectionHeight);
// window.addEventListener('orientationchange', setSectionHeight);
// window.addEventListener('scroll', preventDefault);
// window.addEventListener('touchmove', preventDefault);

// carousel.addEventListener('wheel', scrollCell);
// carousel.addEventListener('wheel', msCellDisplayBugFix);
// // carousel.addEventListener('wheel', getProvince);
// carousel.addEventListener('wheel', wheelEnd);
// carousel.addEventListener('touchstart', scrollCellMobile.setTouchStart);
// carousel.addEventListener('touchmove', touchmoveMobile);
// carousel.addEventListener('touchend', wheelEnd);

for (let widget of date) {
    widget.addEventListener('focus', safariRestorePage);
    widget.addEventListener('blur', safariRestorePage);
};

btnGet1.addEventListener('click', showResult1);
btnGet2.addEventListener('click', showResult2);

// btnArrow.addEventListener('click', scrollPage);
// btnArrow.addEventListener('click', position.toggleArrow);


