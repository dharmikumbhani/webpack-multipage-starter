import {Bar} from '../js/bar'
import '../css/main.css'
import './index.css'
import gsap from 'gsap';

console.log('this is index/home page');
const h1Tag = document.querySelector('h1')
gsap.from(h1Tag, {
    duration: 1,
    translateY: -20,
})

window.Bar = Bar()

console.log(window.Bar)