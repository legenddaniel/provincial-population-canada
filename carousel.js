export const scrollProvince = function () {
    // console.log(transform, rotateX, newRotateX, this);
    const transform = window.getComputedStyle(this, null).transform;
    // console.log(transform);
    const rotateX = +transform.match(/-*\d+/);
    const newRotateX = this.deltaY < 0 ? rotateX - 36 : rotateX + 36;
    
    this.style.transform = `rotateX(${newRotateX}deg)`;
    
};
