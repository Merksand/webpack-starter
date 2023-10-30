import {saludar} from './js/componentes.js';
import './style.css'

//import img from './assets/webpack.png'
const img = document.createElement('img')
img.src = 'assets/webpack.png'
img.style.width = '300px'
document.body.append(img)
const nombre = 'Fernando';
const nombre1 = 'sergio';

saludar(nombre);
saludar(nombre1);
