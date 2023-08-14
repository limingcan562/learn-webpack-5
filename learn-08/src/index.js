import './assets/style/index.less';

const loadImage = src => {
    return new Promise(r => {
        const img = new Image();
        img.src = src;
        img.onload = () => r(img);
    })
};


loadImage('./logo.png').then(img => {
    console.log('I am from index.js');
    img.width = 120;
    document.querySelector('#js_content .img_content').append(img);
});