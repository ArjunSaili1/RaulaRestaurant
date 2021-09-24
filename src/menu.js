import tandooriChickenBites from './assets/images/tandoorichickenbites.jpeg';
import samosa from './assets/images/samosa.jpg';
import nachos from './assets/images/IndianNachos.jpg'
import biryani from './assets/images/biryani.jpeg';
import butterChicken from './assets/images/butterchicken.jpg';
import palakPaneer from './assets/images/palakpaneer.jpg';
import tandooriChicken from './assets/images/backimage.jpg';
import indianMacAndCheese from './assets/images/indianmacandcheese.jpeg';
import indianBurger from './assets/images/indianburger.jpeg';
import rasMalai from './assets/images/rasmalai.jpg';
import cheeseCake from './assets/images/cheesecake.jpg';
import gulabJamun from './assets/images/gulabjamun.jpg';
import { create } from 'yallist';

const createMenuItem = (itemPhoto, itemName, description, calories, price) => {
    const menuItem = document.createElement('div');
    menuItem.id = 'menu-item';
    const imgFlex = document.createElement('div');
    imgFlex.classList.add('img-flex');
    const itemImage = document.createElement('img');
    itemImage.src = itemPhoto;
    itemImage.classList.add('item-img');
    menuItem.appendChild(itemImage);
    const textFlex = document.createElement('div');
    textFlex.classList.add('text-flex');
    const itemTitle = document.createElement('div');
    itemTitle.textContent = itemName;
    itemTitle.classList.add('item-title');
    const itemCalories = document.createElement('div');
    itemCalories.textContent = `${calories} calories`;
    itemCalories.classList.add('calories');
    const itemDescription = document.createElement('div');
    itemDescription.textContent = description;
    itemDescription.classList.add('item-description');
    const itemPrice = document.createElement('div');
    itemPrice.textContent = `$${price}`;
    itemPrice.classList.add('item-price');
    textFlex.appendChild(itemTitle);
    textFlex.appendChild(itemDescription);
    textFlex.appendChild(itemCalories);
    textFlex.appendChild(itemPrice);
    menuItem.appendChild(textFlex);
    return menuItem;
}

function menuPage(content){
    const menuBackground = document.createElement('div');
    menuBackground.id = "menu-back";
    menuBackground.classList.add('backing');
    const menuTitleFlex = document.createElement('div');
    menuTitleFlex.classList.add('flex-center');
    const appetizersTitle = document.createElement('div');
    appetizersTitle.textContent = 'Appetizers';
    appetizersTitle.classList.add('menu-title');
    menuTitleFlex.appendChild(appetizersTitle);
    menuBackground.appendChild(menuTitleFlex);
    const appetizersGrid = document.createElement('div');
    appetizersGrid.id = 'appetizer-grid';
    appetizersGrid.classList.add('menu-grid');
    menuBackground.appendChild(appetizersGrid);
    appetizersGrid.appendChild(createMenuItem(tandooriChickenBites, "Tandoori Chicken Bites", '"These Tandoori Chicken\
    bites will spice up your life!"', 340, 10));
    appetizersGrid.appendChild(createMenuItem(samosa, "Mini Samosas", "A yummy potato-filled vegetarian snack!", 400, 7));
    appetizersGrid.appendChild(createMenuItem(nachos, "Indian Style Nachos", "A classic Mexo-American Snack with an \
    Indian Twist!", 600, 12));
    const mainsTitle = document.createElement('div');
    mainsTitle.textContent = "Mains"
    mainsTitle.classList.add('menu-title');
    const mainsTitleFlex = document.createElement('div');
    mainsTitleFlex.classList.add('flex-center');
    const mainsGrid = document.createElement('div');
    mainsGrid.id = 'mains-grid';
    mainsGrid.classList.add('menu-grid');
    mainsGrid.appendChild(createMenuItem(biryani, "Biryani", "Seasoned Basamti Rice with authentic Indian Spices", 1000, 17));
    mainsGrid.appendChild(createMenuItem(butterChicken, "Butter Chicken", "Juicy Tandoori Chicken tossed in a creamy and spicy\
    Indian gravy", 1200, 16));
    mainsGrid.appendChild(createMenuItem(palakPaneer, "Palak Paneer", "Indian soft cheese braised in a flavourful spinach sauce", 800, 15));
    mainsGrid.appendChild(createMenuItem(tandooriChicken, "Tandoori Chicken", "Marinated Chicken Pieces cooked in a traditional Indian Clay Oven",
    700, 20));
    mainsGrid.appendChild(createMenuItem(indianMacAndCheese, "Indian Mac and Cheese", "Spicy Mac and Cheese with an Indian Creamy Gravy",
    1200, 19));
    mainsGrid.appendChild(createMenuItem(indianBurger, "Indian Burger", "An Indian spiced patty made with Lamb served on a whole grain bun",
    700, 15));
    const dessertTitle = document.createElement('div');
    dessertTitle.textContent = "Desserts";
    dessertTitle.classList.add('menu-title');
    const dessertTitleFlex = document.createElement('div');
    dessertTitleFlex.classList.add("flex-center");
    dessertTitle.id = "dessert-title";
    const dessertGrid = document.createElement('div');
    dessertGrid.id = 'dessert-grid';
    dessertGrid.classList.add('menu-grid');
    dessertGrid.appendChild(createMenuItem(rasMalai, "Ras Malai", "A sweet, fragrant, spongy dessert flooded in milk", 600, 7));
    dessertGrid.appendChild(createMenuItem(gulabJamun, "Gulab Jamun", "A sweet spongy ball in a sticky sugar syrup", 700, 7));
    dessertGrid.appendChild(createMenuItem(cheeseCake, "Strawberry Cheese Cake", "A classic American Dessert", 700, 9));
    mainsTitleFlex.appendChild(mainsTitle);
    menuBackground.appendChild(mainsTitleFlex);
    menuBackground.appendChild(mainsGrid);
    dessertTitleFlex.appendChild(dessertTitle);
    menuBackground.appendChild(dessertTitleFlex);
    menuBackground.appendChild(dessertGrid);
    content.appendChild(menuBackground);

}

export {menuPage};