import _ from 'lodash';
// import './style.css';
// import Logo from './webpack-logo.svg';
// import Data from './data.xml';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // 通过import引入lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // var myLogo = new Image();
  // myLogo.src = Logo;
  // document.body.appendChild(myLogo);

  // console.log(Data);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
