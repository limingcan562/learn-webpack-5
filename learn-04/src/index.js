import './assets/index.less';


const img = new Image();
img.src = require('./assets/ecj-cli.png');
img.width = 500;
document.querySelector('#js_logo').append(img);