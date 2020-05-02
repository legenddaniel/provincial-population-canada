// e.deltaY ios
// hover: none pointer: coarse ios9-

import { pageArrowConfig, ajaxConfig, provinceConfig } from './config.js';
import { carousel, btnArrow, debounce, ajax, isSafari, getRotateDeg, toggleArrows, changeImg } from './utils.js';

export const preloadImg = (...urls) => {
    const toolDiv = document.createElement('div');
    toolDiv.className = 'd-none';
    toolDiv.setAttribute('title', '<div> for async img preload as rel=preload && data attribute not working well');

    const load = url => {
        return new Promise(res => {
            const img = new Image();
            img.src = url;
            img.onload = () => res(img);
        });
    };
    const getImgs = imgs => {
        const promises = imgs.map(async url => {
            const img = await load(url);
            toolDiv.appendChild(img);
        });
        return Promise.all(promises);
    }
    getImgs(urls).then(() => {
        document.body.appendChild(toolDiv);
    });
};

export const setSectionHeight = debounce(() => {
    const match = mq => matchMedia(mq).matches;
    const chrome = (/Chrome.*Mobile/).test(navigator.userAgent);
    const mobile = match("(hover: none)") || match("(pointer: coarse)") || chrome;
    if (mobile) {
        const vh = window.innerHeight / 100;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    } else {
        document.documentElement.removeAttribute('style');
    }
}, 66);

export const goTop = () => {
    window.scrollTo(0, 0);
    toggleArrows('arrow-top', 'hide');
    toggleArrows('arrow-bot', 'show');
};

export const scrollCell = e => {
    const dY = e.deltaY;
    const deg = getRotateDeg();
    const newDeg = dY < 0 ? deg - 36 : deg + 36;

    carousel.style.transform = `rotateX(${newDeg}deg)`;
};

export const scrollCellMobile = (() => {
    let touchStart;
    const setTouchStart = e => {
        touchStart = e.changedTouches[0];
    };
    const getTouchEnd = e => {
        const deg = getRotateDeg();
        const touchEnd = e.changedTouches[0];
        const newDeg = touchEnd.pageY > touchStart.pageY ? deg - 36 : deg + 36;

        carousel.style.transform = `rotateX(${newDeg}deg)`;
    };
    return { setTouchStart, getTouchEnd };
})();

export const showResultNational = ajax.bind(null, ajaxConfig.national);

export const showResultProvincial = ajax.bind(null, ajaxConfig.provincial);

export const scrollPage = e => {
    const direction = e.target === btnArrow.firstElementChild ? '-' : '+';
    const innerHeight = window.innerHeight;
    // const ua = navigator.userAgent;
    // const isMFirefox = (/Android/).test(ua) && (/Firefox/).test(ua);
    // if (!isMFirefox) {
    //     window.scrollBy({
    //         top: +`${direction}${innerHeight}`,
    //         behavior: 'smooth'
    //     });
    // } else {
        window.scrollBy(0, +`${direction}${innerHeight}`);
    // }
    e.currentTarget.removeEventListener('click', scrollPage);
};

export const scrollEnd = debounce(() => {
    position.updatePageNum();
    btnArrow.addEventListener('click', scrollPage);
}, 66);

export const touchmoveMobile = debounce(scrollCellMobile.getTouchEnd, 66);

export const position = (() => {
    let pageNum = 0;
    const updatePageNum = () => {
        pageNum = Math.round(window.pageYOffset / window.innerHeight);
    };
    const restorePage = () => {
        const scrollY = pageNum * window.innerHeight;
        window.scrollTo(0, scrollY);
    };
    const toggleArrow = e => {
        const arrow = pageArrowConfig[pageNum];
        const currentPage = pageNum in pageArrowConfig;
        const isClicked = e.target === document.getElementsByClassName(arrow.arrowClicked)[0];

        if (currentPage && isClicked) toggleArrows(arrow.arrowHandled, arrow.method);
    };
    return { updatePageNum, restorePage, toggleArrow };
})();

export const restorePage = debounce(position.restorePage, 66);

export const safariRestorePage = () => {
    if (isSafari()) restorePage();
};

export const msCellDisplayBugFix = (setOverflowX = true) => {
    const ms = (/Edge/).test(navigator.userAgent);
    if (ms && setOverflowX) {
        document.body.style.overflowX = 'visible';
        return;
    }
    document.body.removeAttribute('style');
};

export const wheelEnd = debounce(() => {
    changeImg(provinceConfig);
    msCellDisplayBugFix(false);
}, 500);

export const backgroundClipText = () => {
    const txtRainbow = document.getElementsByClassName('txt-rainbow')[0];
    const supported = getComputedStyle(txtRainbow).backgroundClip === 'text';
    if (!supported) txtRainbow.classList.remove('txt-rainbow');
};

export const preventDefault = e => {
    e.preventDefault();
};

