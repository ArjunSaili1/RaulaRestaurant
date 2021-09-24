import "./styles.css"
import { homePage } from "./home";
import { menuPage } from "./menu";
import { locationPage } from "./locations";
import { contactPage } from "./contact";
const content = document.querySelector('#content');
function createNav(){
    const container = document.createElement('div');
    container.id = 'container';
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = "Raula";
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    const nav = document.createElement('nav');
    navbar.appendChild(nav);
    const links = document.createElement('ul');
    const homeLink = document.createElement('li');
    const homeNav = document.createElement('a');
    homeNav.addEventListener('click', ()=>{navigateHome();});
    homeNav.textContent = 'Home';
    homeLink.appendChild(homeNav);
    const menuLink = document.createElement('li');
    const menuNav = document.createElement('a');
    menuNav.addEventListener('click', ()=>{navigateMenu();});
    menuNav.textContent = 'Menu';
    menuLink.appendChild(menuNav);
    const locLink = document.createElement('li');
    const locNav = document.createElement('a');
    locNav.addEventListener('click', ()=>{navigateLocations});
    locNav.textContent = 'Locations';
    locLink.appendChild(locNav);
    const contactLink = document.createElement('li');
    const contactNav = document.createElement('a');
    contactNav.addEventListener('click', ()=>{navigateContact});
    contactNav.textContent = 'Contact';
    contactLink.appendChild(contactNav);
    links.appendChild(homeLink);
    links.appendChild(menuLink);
    links.appendChild(locLink);
    links.appendChild(contactLink);
    nav.appendChild(links);
    container.appendChild(logo);
    container.appendChild(navbar);
    content.appendChild(container); 
}

function clearPage(){
    content.innerHTML = '';
}

function navigateHome(){
    clearPage();
    createNav();
    homePage(content);
}

function navigateMenu(){
    clearPage();
    createNav();
    menuPage(content);
}

function navigateLocations(){
    clearPage();
    createNav();
    locationPage(content);
}

function navigateContact(){
    clearPage();
    createNav();
    contactPage(content);
}


navigateHome();