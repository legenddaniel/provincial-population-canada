export const scrollProvince = function (e) {
    const deg = 0;
    const carousel = document.querySelector('.carousel');
    const newRotateX = this.deltaY < 0 ? rotateX - 36 : rotateX + 36;
    
    e.preventDefault();
    this.style.transform = `rotateX(${newRotateX}deg) translateZ(5rem) scale(.6)`;
    
    // getComputedStyle结果是matrix，最好用实例的方法
};
