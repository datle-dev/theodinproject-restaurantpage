import './style.css';
import createHomePage from './create-home-page';
import createAboutPage from './create-about-page';
import createMenuPage from './create-menu-page';

(function TabDisplay() {

    const homeTab = createHomePage();
    const aboutTab = createAboutPage();
    const menuTab = createMenuPage();

    const homeTabBtn = document.querySelector('#home-tab')
    const aboutTabBtn = document.querySelector('#about-tab')
    const menuTabBtn = document.querySelector('#menu-tab')

    const content = document.querySelector('#content');
    console.log(homeTabBtn);
    console.log(content);
    console.log(homeTab);

    const assignEventListeners = () => {
        homeTabBtn.addEventListener('click', showHomePage);
        aboutTabBtn.addEventListener('click', showAboutPage);
        menuTabBtn.addEventListener('click', showMenuPage);
    };

    const init = () => {
        content.appendChild(homeTab);
        assignEventListeners();
    };


    const clearContents = () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    };

    const showHomePage = () => {
        clearContents();
        content.appendChild(homeTab);
    };

    const showAboutPage = () => {
        clearContents();
        content.appendChild(aboutTab);
    };

    const showMenuPage = () => {
        clearContents();
        content.appendChild(menuTab);
    };

    // initiailziation on page load
    init();

})();






