import '../css/main.css'
import './about.css'
import gsap from 'gsap';

console.log('this is about page');
const h1TagAbout = document.querySelector('h1')

gsap.from(h1TagAbout, {
    duration: 1,
    translateY: -20,
})