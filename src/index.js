import './style.css';
import HeroImg from './assets/cafe.jpg';

console.log('hello world');

const content = document.querySelector('#content');
const heroDiv = document.createElement('div');

const heroImg = new Image();

heroDiv.id = 'hero';

heroImg.src = HeroImg;
heroImg.alt = 'cafe with seating';

heroDiv.appendChild(heroImg);
content.appendChild(heroDiv);

