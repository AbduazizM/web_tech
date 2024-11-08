// renderDishes.js

import dishes from './dishes.js';

function createDishCard(dish) {
    const dishCard = document.createElement('div');
    dishCard.classList.add('card');
    dishCard.setAttribute('data-dish', dish.keyword);

    const image = document.createElement('img');
    image.src = dish.image;
    image.alt = dish.name;
    image.classList.add('img_card');
    dishCard.appendChild(image);
    
    const price = document.createElement('p');
    price.textContent = `${dish.price}₽`;
    dishCard.appendChild(price);

    const name = document.createElement('p');
    name.textContent = dish.name;
    dishCard.appendChild(name);
    
    const entire_div = document.createElement('div');
    entire_div.classList.add('entire_div');
    dishCard.appendChild(entire_div);

    const count = document.createElement('p');
    count.textContent = `${dish.count}`;
    count.classList.add('weight');
    entire_div.appendChild(count);

    const add_dish = document.createElement('button');
    add_dish.textContent = 'Добавить';
    add_dish.classList.add('button-arounder');
    entire_div.appendChild(add_dish);

    return dishCard;
}

function renderDishes() {
    dishes.forEach(dish => {
        const sectionId = `${dish.category}s`;
        const section = document.getElementById(sectionId);
        
        if (section) {
            const dishCard = createDishCard(dish);
            section.appendChild(dishCard);
        }
    });
}

document.addEventListener('DOMContentLoaded', renderDishes);
