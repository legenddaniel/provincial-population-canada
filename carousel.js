export const scrollProvince = function () {
    const transform = window.getComputedStyle(this, null).transform;
    const rotateX = +transform.match(/-*\d+/)[0];
    const newRotateX = this.deltaY < 0 ? rotateX - 36 : rotateX + 36;
    
    this.style.transform = `rotateX(${newRotateX}deg)`;
};
