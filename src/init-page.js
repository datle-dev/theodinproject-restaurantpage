const initPage = () => {
    const content = document.querySelector('#content');

    const heading = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const blurb1 = document.createElement('p');
    const blurb2 = document.createElement('p');

    heading.innerText = 'Cafe Page';
    subtitle.innerText = 'Where people go to eat sometimes';
    blurb1.innerText = 'This cafe has tasty food and delicious drinks that you won\'t be able to find anywhere else!';
    blurb2.innerText = 'Visit us and try our milk teas made with organic milk and homemade tapioca pearls!'

    content.appendChild(heading);
    content.appendChild(subtitle);
    content.appendChild(blurb1);
    content.appendChild(blurb2);
}

export default initPage;