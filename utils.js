export const carousel = document.getElementsByClassName('carousel')[0];
export const btnGet1 = document.querySelector('#national .btn-get');
export const btnGet2 = document.querySelector('#provincial .btn-get');
export const btnArrow = document.getElementById('arrows');

const getValidDate = i => {
    const date = document.getElementsByClassName('date')[i].value;
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

export const goTop = () => {
    window.scrollTo(0, 0);
};

export const scrollCell = e => {
    const dY = e.deltaY;
    const deg = getRotateDeg();
    const newDeg = dY < 0 ? deg - 36 : deg + 36;
    e.preventDefault();
    carousel.style.transform = `rotateX(${newDeg}deg)`;
};

export const getProvince = () => {
    const deg = getRotateDeg();
    let province;
    switch (deg % 360) {
        case 36:
        case -324:
            province = "British Columbia";
            break;
        case 72:
        case -288:
            province = "Manitoba";
            break;
        case 108:
        case -252:
            province = "New Brunswick";
            break;
        case 144:
        case -216:
            province = "Newfoundland And Labrador";
            break;
        case 180:
        case -180:
            province = "Nova Scotia";
            break;
        case 216:
        case -144:
            province = "Ontario";
            break;
        case 252:
        case -108:
            province = "Prince Edward Island";
            break;
        case 288:
        case -72:
            province = "Quebec";
            break;
        case 324:
        case -36:
            province = "Saskatchewan";
            break;
        default:
            province = "Alberta";
            break;
    }
    // console.log(province);
    return province;
};

export const showResult1 = () => {
    const date = getValidDate(0);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", '/data.json', true);
    xhr.send();
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText).data;
        const population = data.find(i => i[8].includes(date)) || '';
        const result = population[11] || 'Select a date';
        btnGet1.textContent = result;
    };
};

export const showResult2 = () => {
    const date = getValidDate(1);
    const province = getProvince();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", '/data.json', true);
    xhr.send();
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText).data;
        const population = data.find(i => i[8].includes(date)) || '';
        const provinceData = {
            'Alberta': 9,
            'British Columbia': 10,
            'Manitoba': 12,
            'New Brunswick': 13,
            'Newfoundland And Labrador': 14,
            'Nova Scotia': 15,
            'Ontario': 16,
            'Prince Edward Island': 17,
            'Quebec': 18,
            'Saskatchewan': 19,
        };
        const getResult = () => {
            const index = provinceData[province];
            const populationData = population[index] || 'Select a date';
            return populationData;
        };
        const result = getResult();
        btnGet2.textContent = result;
    };
};

export const scrollPage = e => {
    const direction = e.target === btnArrow.firstElementChild ? '-' : '+';
    const innerHeight = window.innerHeight;
    window.scrollBy({
        top: +`${direction}${innerHeight}`,
        behavior: 'smooth'
    });
};

export const hideArrow = e => {
    const that = e.target;
    const position = e.pageY;
    const innerHeight = window.innerHeight;
    if (that === btnArrow.firstElementChild) {
        that.nextElementSibling.classList.remove('d-none');
        if (position < 1.5 * innerHeight) {
            that.classList.add('d-none');
        }
    } else {
        that.previousElementSibling.classList.remove('d-none');
        if (position > 2.5 * innerHeight) {
            that.classList.add('d-none');
        }
    }
};
