const nthFromOrigin = 0;
export const scrollProvince = function (e) {
    // console.log(transform, rotateX, newRotateX, this);
    const carousel = document.getElementById('province');
    const carouselTransform = window.getComputedStyle(carousel, null).transform;
    // console.log(transform);
    const rotateX = +carouselTransform.match(/-*\d+/);
    const newRotateX = this.deltaY < 0 ? rotateX - 36 : rotateX + 36;
    
    e.preventDefault();
    this.style.transform = `rotateX(${newRotateX}deg) translateZ(5rem) scale(.6)`;
    
    // getComputedStyle结果是matrix，最好用实例的方法
};
