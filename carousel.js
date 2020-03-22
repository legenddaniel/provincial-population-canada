let deg = 0;
export const scrollCell = e => {
    const carousel = document.getElementsByClassName('carousel')[0];
    const dY = e.deltaY;
    deg = dY < 0 ? deg - 36 : deg + 36;
    
    e.preventDefault();
    carousel.style.transform = `rotateX(${deg}deg)`;
};
