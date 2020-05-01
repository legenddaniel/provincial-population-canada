export const carousel = document.getElementsByClassName('carousel')[0];
export const btnNational = document.querySelector('#national .btn-txt');
export const btnProvincial = document.querySelector('#provincial .btn-txt');
export const btnArrow = document.getElementById('arrows');
export const datePicker = document.getElementsByClassName('date');

export const on = function (currentTarget, type, handler) {
    currentTarget.addEventListener(type, handler);
};

export const ajax = option => {
    return new Promise(res => {
        const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open(option.method, option.url, option.async);
        xhr.send();
        xhr.onload = function () {
            res(this.responseText);
        };
    }).then(option.fn);
};

export const debounce = (fn, delay, immediate) => {
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

export const isSafari = () => {
    const ua = navigator.userAgent;
    const safari = (/Mac|iPhone|iPad/).test(ua);
    return safari;
};

export const scrollBehavior = 'scrollBehavior' in document.documentElement.style;

export const getRotateDeg = () => {
    const rotate = carousel.style.transform || '0';
    const deg = +rotate.match(/-*\d+/)[0];
    return deg;
};

export const toggleArrows = (arrows, method) => {
    const arrow = document.getElementsByClassName(arrows)[0].classList;
    if (method === 'hide') {
        arrow.add('d-none');
    }
    if (method === 'show') {
        arrow.remove('d-none');
    }
};

const getProvinceByIndex = provinces => {
    const deg = getRotateDeg() % 360;
    const index = (() => {
        for (let province of provinces) {
            if (province.cellRotateDeg.includes(deg)) {
                return provinces.indexOf(province);
            }
        }
    })();
    return provinces[index];
};
export const getProvinceJSONIndex = provinceConfig => getProvinceByIndex(provinceConfig).jsonIndex;

export const getJSONPopulation = (responseText, section) => {
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

    const sectionList = ['national', 'provincial'];
    const data = JSON.parse(responseText).data;
    const id = sectionList.indexOf(section);
    const date = getValidDate(id);
    const population = data.find(i => i[8].includes(date)) || '';
    return population;
};

export const changeImg = provinceImgs => {
    const getProvinceImg = () => getProvinceByIndex(provinceImgs).img;
    const img = getProvinceImg();
    const aside = document.getElementById('province-img');

    aside.className = `img ${img}`;
};