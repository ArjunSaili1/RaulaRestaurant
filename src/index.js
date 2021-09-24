import "./styles.css"
import { homePage } from "./home";
import { menuPage } from "./menu";
import { locationPage } from "./locations";
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
    homeNav.id = 'home-nav';
    homeLink.appendChild(homeNav);
    const menuLink = document.createElement('li');
    const menuNav = document.createElement('a');
    menuNav.addEventListener('click', ()=>{navigateMenu();});
    menuNav.textContent = 'Menu';
    menuNav.id = 'menu-nav';
    menuLink.appendChild(menuNav);
    const locLink = document.createElement('li');
    const locNav = document.createElement('a');
    locNav.addEventListener('click', (e)=>{navigateLocations(e)});
    locNav.id = 'loc-nav'
    locNav.textContent = 'Locations';
    locLink.appendChild(locNav);
    links.appendChild(homeLink);
    links.appendChild(menuLink);
    links.appendChild(locLink);
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
    document.querySelector('#home-nav').style.color = '#e77a59';
}

function navigateMenu(){
    clearPage();
    createNav();
    menuPage(content);
    document.querySelector('#menu-nav').style.color = '#e77a59';
}

function navigateLocations(e){
    clearPage();
    createNav();
    locationPage(content);
    document.querySelector('#loc-nav').style.color = '#e77a59';
}

navigateHome();