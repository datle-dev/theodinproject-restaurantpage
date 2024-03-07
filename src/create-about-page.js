const createAboutPage = () => {
    const wrapper = document.createElement('article');

    const heading = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const blurb1 = document.createElement('p');
    const blurb2 = document.createElement('p');

    heading.innerText = 'Our Cafe';
    subtitle.innerText = 'Family-owned since 2010';
    blurb1.innerText = 'We\'ve been in business for over 10 years, and we\'ve sold over 10,000 drinks since we started.';
    blurb2.innerText = 'We\'re looking forward to selling 10,000 more to you all!';

    wrapper.appendChild(heading);
    wrapper.appendChild(subtitle);
    wrapper.appendChild(blurb1);
    wrapper.appendChild(blurb2);

    return wrapper;
}

export default createAboutPage;