import HeroImg from './assets/cafe.jpg';

const createHomePage = () => {
    const wrapper = document.createElement('article');

    const heading = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const heroDiv = document.createElement('div');
    const heroImg = new Image();
    const blurb1 = document.createElement('p');
    const blurb2 = document.createElement('p');

    heading.innerText = 'Cafe Page';
    subtitle.innerText = 'Where people go to eat sometimes';
    blurb1.innerText = 'This cafe has tasty food and delicious drinks that you won\'t be able to find anywhere else!';
    blurb2.innerText = 'Visit us and try our milk teas made with organic milk and homemade tapioca pearls!'

    heroDiv.id = 'hero';
    heroImg.src = HeroImg;
    heroImg.alt = 'cafe with seating';

    wrapper.appendChild(heading);
    wrapper.appendChild(subtitle);
    heroDiv.appendChild(heroImg);
    wrapper.appendChild(heroDiv);
    wrapper.appendChild(blurb1);
    wrapper.appendChild(blurb2);

    return wrapper;
}

export default createHomePage;