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

document.querySelectorAll('.filter-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.getAttribute('data-category');
        const filter = event.target.getAttribute('data-filter');

        document.querySelectorAll(`.filter-links a[data-category="${category}"]`).forEach(link => {
            link.classList.remove('active');
        });

        // Добавляем класс "active" к текущему фильтру, если он не был активным
        if (activeFilter.category !== category || activeFilter.filter !== filter) {
            event.target.classList.add('active');
        }
        else if (activeFilter.category == category || activeFilter.filter == filter){
            event.target.classList.remove('active');
        }


        renderFilteredDishes(category, filter);
    });
});

let activeFilter = { category: null, filter: null }; // Отслеживаем активный фильтр

function renderFilteredDishes(category, filter) {
    const section = document.getElementById(`${category}s`);
    
    // Проверяем, активен ли уже этот фильтр
    if (activeFilter.category === category && activeFilter.filter === filter) {
        // Если фильтр активен, сбрасываем его
        activeFilter = { category: null, filter: null };
        section.innerHTML = ""; // Очищаем секцию
        dishes.filter(dish => dish.category === category).forEach(dish => {
            const dishCard = createDishCard(dish);
            section.appendChild(dishCard);
        });
    } else {
        // Если фильтр новый, применяем его
        activeFilter = { category, filter };
        const filteredDishes = dishes.filter(dish => 
            dish.category === category && dish.kind === filter
        );

        section.innerHTML = ""; // Очищаем секцию
        filteredDishes.forEach(dish => {
            const dishCard = createDishCard(dish);
            section.appendChild(dishCard);
        });
    }

    // Повторно назначаем события кнопкам
    reapplyAddButtonListeners();
}


function reapplyAddButtonListeners() {
    document.querySelectorAll('.button-arounder').forEach(button => {
        button.addEventListener('click', event => {
            const dishCard = event.target.closest('.card');
            const dishKeyword = dishCard.getAttribute('data-dish');
            const selectedDish = dishes.find(dish => dish.keyword === dishKeyword);

            if (selectedDish) {
                addDishToOrder(selectedDish);
            }
        });
    });
}


const orderStatus = document.getElementById('order-status');
    const orderDetails = document.getElementById('order-details');
    const orderTotal = document.getElementById('order-total');
    const soupSelect = document.getElementById('soup-select');
    const mainDishSelect = document.getElementById('main-dish-select');
    const saladsStarterSelect = document.getElementById('salads-select');
    const drinkSelect = document.getElementById('drink-select');
    const dessertSelect = document.getElementById('dessert-select');

    let totalAmount = 0;
    const selectedDishes = { soup: null, "main-course": null, beverage: null, salads_starter: null, dessert: null };

    function updateOrderTotal() {
        orderTotal.textContent = totalAmount;
    }

    function showOrderDetails() {
        orderStatus.style.display = 'none';
        orderDetails.style.display = 'block';
    }

    function hideOrderDetails() {
        orderStatus.style.display = 'block';
        orderStatus.textContent = 'Ничего не выбрано';
        totalAmount = 0;
        updateOrderTotal();
    }
    
    

    function addDishToOrder(dish) {
        showOrderDetails();
        if (selectedDishes[dish.category]) {
            totalAmount -= selectedDishes[dish.category].price;
        }

        selectedDishes[dish.category] = dish;

        switch (dish.category) {
            case 'soup':
                soupSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
            case 'main-course':
                mainDishSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
            case 'salads_starter':
                saladsStarterSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
            case 'beverage':
                drinkSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
            case 'dessert':
                dessertSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
        }

        totalAmount += dish.price;
        updateOrderTotal();
    }

document.addEventListener('DOMContentLoaded', () => {
    renderDishes();
    reapplyAddButtonListeners();
});
