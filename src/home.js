import fitty from 'fitty';
import backImage from './assets/images/backimage.jpg';
function homePage(content){
    const titleBacking = document.createElement('div')
    titleBacking.id = 'title-back';
    const mainLogo = document.createElement('div');
    mainLogo.id = 'main-logo';
    mainLogo.classList.add('title');
    mainLogo.textContent = 'Raula';
    titleBacking.appendChild(mainLogo);
    const subLogo = document.createElement('div');
    subLogo.id = 'subtitle';
    subLogo.textContent = 'Anti-Bland Food';
    titleBacking.appendChild(subLogo);
    const images = document.createElement('div');
    images.id = 'images';
    const homepageImg = new Image();
    homepageImg.src = backImage;
    homepageImg.id = 'homepage-img'
    images.appendChild(homepageImg);
    content.appendChild(images);
    content.appendChild(titleBacking);
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('backing');
    const aboutTitle = document.createElement('div');
    aboutTitle.id = 'about-title';
    aboutTitle.textContent = 'Our Story';
    aboutSection.appendChild(aboutTitle);
    const aboutText = document.createElement('div');
    aboutText.id = 'text-section';
    aboutSection.appendChild(aboutText);
    const mainAboutText = document.createElement('div');
    mainAboutText.classList.add('main-text');
    mainAboutText.textContent = "Inspired by both the American \
    Sports Bar and the Punjabi Road Side Restaurants \
    known as 'Dhabas', Raula encapsulates both chaos and flavour \
    in our wide variety of dishes.\rOur food is unapologetically\
    Indian with a modern American twist.\rFamily-owned since it's\
    inception, Raula was created from the dedication, dreams, and\
    diverse experiences of an Indo-Canadian Household.\rThe word \
    'Raula' is of Punjabi origin and roughly translates to chaos,\
    perfectly outlining the intense flavour profile of our \
    cuisine.\r\rHere at Raula, we pride ourselves on inclusivity,\
    cultural diversity and serving delicious food.";
    aboutText.appendChild(mainAboutText);
    content.appendChild(aboutSection);
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer);
}

export {homePage};