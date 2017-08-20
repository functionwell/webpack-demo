import _ from 'lodash';
import './style.css';
import Logo from './webpack-logo.svg'

function component() {
  var element = document.createElement('div');

  // 通过import引入lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myLogo = new Image();
  myLogo.src = Logo;
  document.body.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());
