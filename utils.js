export const carousel = document.getElementsByClassName('carousel')[0];

const getRotateDeg = () => {
    const rotate = carousel.style.transform || '0';
    const deg = +rotate.match(/-*\d+/)[0];
    return deg;
};

export const scrollCell = e => {
    const dY = e.deltaY;
    const deg = getRotateDeg();
    const newDeg = dY < 0 ? deg - 36 : deg + 36;

    e.preventDefault();
    // e.stopPropagation();
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
    console.log(province);
    return province;
};

const showResult = () => {
    const date = document.getElementsByClassName('date')[0].value;
    const province = getProvince();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", '/data.json', true);
    xhr.send();
    xhr.onload = () => {
        
    }
}
