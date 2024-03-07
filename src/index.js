import './style.css';
import initPage from './init-page';


const homePage = initPage();

const content = document.querySelector('#content');

content.appendChild(homePage);
