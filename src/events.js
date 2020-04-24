import { carousel, setSectionHeight, goTop, scrollCell, btnNational, btnProvincial, showResultNational, showResultProvincial, scrollPage, btnArrow, position, scrollEnd, msCellDisplayBugFix, wheelEnd, preloadImg, scrollCellMobile, touchmoveMobile, restorePage, preventDefault } from './utils.js';

import { imgPreloadConfig } from './config.js'

export const events = [{
    target: window,
    events: [{
        name: 'load',
        handlers: [preloadImg(...imgPreloadConfig), setSectionHeight]
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
}, {
    target: btnNational,
    events: [{
        name: 'click',
        handlers: [showResultNational]
    }]
}, {
    target: btnProvincial,
    events: [{
        name: 'click',
        handlers: [showResultProvincial]
    }]
}];