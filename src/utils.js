// e.deltaY ios
// find() includes() ie
// scrollBy options ie edge79-
// scrollBy ie 11-
// classList remove add ie10-
// setProperty ie9-
// hover: none pointer: coarse ios9-

import { provinceConfig, pageArrowConfig, ajaxConfig } from './config.js';

export const carousel = document.getElementsByClassName('carousel')[0];
export const btnNational = document.querySelector('#national .btn-txt');
export const btnProvincial = document.querySelector('#provincial .btn-txt');
export const btnArrow = document.getElementById('arrows');
export const datePicker = document.getElementsByClassName('date');

export const on = function (currentTarget, type, handler) {
    currentTarget.addEventListener(type, handler);
};

const ajax = option => {
    const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open(option.method, option.url, option.async);
    xhr.send();
    xhr.onload = option.fn;
};

const debounce = (fn, delay, immediate) => {
    let timer;
    return function () {
        const that = this;
        const args = arguments;

        clearTimeout(timer);

        if (immediate && !timer) fn.apply(that, args);

        timer = setTimeout(() => {
            timer = null;
            fn.apply(that, args);
        }, delay);
    };
};

const isSafari = () => {
    const ua = navigator.userAgent;
    const safari = (/Mac|iPhone|iPad/).test(ua);
    return safari;
};

const scrollBehavior = 'scrollBehavior' in document.documentElement.style;

const getValidDate = i => {
    const date = datePicker[i].value;
    const year = date.match(/^\d{4}-/);
    const monthNDay = date.match(/\d{2}-\d{2}$/);
    const validDate =
        monthNDay >= '10-01' ? '10-01' :
            monthNDay >= '07-01' ? '07-01' :
                monthNDay >= '04-01' ? '04-01' :
                    '01-01';
    return year + validDate;
};

const getRotateDeg = () => {
    const rotate = carousel.style.transform || '0';
    const deg = +rotate.match(/-*\d+/)[0];
    return deg;
};

const toggleArrows = (arrows, method) => {
    const arrow = document.getElementsByClassName(arrows)[0].classList;
    if (method === 'hide') {
        arrow.add('d-none');
    }
    if (method === 'show') {
        arrow.remove('d-none');
    }
};

const changeImg = () => {
    const img = getProvinceImg();
    const aside = document.getElementById('province-img');

    aside.className = `img ${img}`;
};

const getProvinceByIndex = () => {
    const deg = getRotateDeg() % 360;
    const index = (() => {
        for (let province of provinceConfig) {
            if (province.cellRotateDeg.includes(deg)) {
                return provinceConfig.indexOf(province);
            }
        }
    })();
    return provinceConfig[index];
};
export const getProvinceJSONIndex = () => getProvinceByIndex().jsonIndex;

const getProvinceImg = () => getProvinceByIndex().img;

export const getJSONPopulation = (responseText, section) => {
    const sectionList = ['national', 'provincial'];
    const data = JSON.parse(responseText).data;
    const id = sectionList.indexOf(section);
    const date = getValidDate(id);
    const population = data.find(i => i[8].includes(date)) || '';
    return population;
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
    const ua = navigator.userAgent;
    const isMFirefox = (/Android/).test(ua) && (/Firefox/).test(ua);
    if (scrollBehavior && !isMFirefox) {
        window.scrollBy({
            top: +`${direction}${innerHeight}`,
            behavior: 'smooth'
        });
    } else {
        window.scrollBy(0, +`${direction}${innerHeight}`);
    }
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
    changeImg();
    msCellDisplayBugFix(false);
}, 500);

export const preloadImg = (...urls) => {
    const toolDiv = document.createElement('div');
    toolDiv.className = 'd-none';
    toolDiv.setAttribute('title', '<div> for img preload as rel=preload && data-* not working well');

    urls.forEach(url => {
        const img = new Image();
        img.src = url;
        toolDiv.appendChild(img);
    })

    document.body.appendChild(toolDiv);
};

export const preventDefault = e => {
    e.preventDefault();
};

