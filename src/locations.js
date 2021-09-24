import map from './assets/images/map.svg'
function locationPage(content) {
    const locationBack = document.createElement('div');
    locationBack.id = 'location-back';
    locationBack.classList.add('backing');
    const mapImage = document.createElement('img')
    mapImage.src = map;
    locationBack.appendChild(mapImage);
    mapImage.id = 'map-image';
    const locationText = document.createElement('div');
    locationText.id = 'location-text';
    const locationTitle = document.createElement('div');
    locationTitle.textContent = "In the Heart of Toronto";
    locationTitle.classList.add('location-line');
    locationTitle.id = "location-title";
    const locationLineOne = document.createElement('div');
    locationLineOne.classList.add('location-line');
    locationLineOne.id = "location-line-one";
    locationLineOne.textContent = "250 Duncan St";
    const locationLineTwo = document.createElement('div');
    locationLineTwo.textContent = "Toronto, ON M5V 1W4";
    locationLineTwo.classList.add('location-line');
    locationLineTwo.id = 'location-line-two';
    locationText.appendChild(locationTitle);
    locationText.appendChild(locationLineOne);
    locationText.appendChild(locationLineTwo);
    locationBack.appendChild(locationText);
    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(locationBack);
    content.appendChild(footer);
}

export { locationPage };