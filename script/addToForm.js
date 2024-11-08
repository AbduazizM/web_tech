import dishes from './dishes.js';

document.addEventListener('DOMContentLoaded', () => {
    const orderStatus = document.getElementById('order-status');
    const orderDetails = document.getElementById('order-details');
    const orderTotal = document.getElementById('order-total');
    const soupSelect = document.getElementById('soup-select');
    const mainDishSelect = document.getElementById('main-dish-select');
    const drinkSelect = document.getElementById('drink-select');

    let totalAmount = 0;
    const selectedDishes = { soup: null, "main-course": null, beverage: null };

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
        // orderDetails.style.display = 'none';
        totalAmount = 0;
        updateOrderTotal();
    }
    
    

    function addDishToOrder(dish) {
        showOrderDetails();

        // Subtract the price of the previously selected dish in this category, if any
        if (selectedDishes[dish.category]) {
            totalAmount -= selectedDishes[dish.category].price;
        }

        // Add the new dish to the selected dishes and update the order form
        selectedDishes[dish.category] = dish;

        switch (dish.category) {
            case 'soup':
                soupSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
            case 'main-course':
                mainDishSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
            case 'beverage':
                drinkSelect.innerHTML = `<option value="${dish.keyword}" selected>${dish.name} ${dish.price}₽</option>`;
                break;
        }

        // Add the price of the new dish
        totalAmount += dish.price;
        updateOrderTotal();
    }

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

    // Initialize with default message
    if (totalAmount === 0) {
        hideOrderDetails();
    }


    const timeInput = document.getElementById('delivery-time');
    const specifiedTimeRadio = document.getElementById('specified_time');
    const fasterRadio = document.getElementById('faster');

    // Отключаем поле времени доставки по умолчанию
    timeInput.disabled = true;

    // Функция для включения/отключения поля времени
    function toggleTimeInput() {
        if (specifiedTimeRadio.checked) {
            timeInput.disabled = false; // Включаем поле времени
        } else {
            timeInput.disabled = true;  // Отключаем поле времени
            timeInput.value = '';       // Сбрасываем значение времени
        }
    }

    // Отслеживаем изменения в выборе радио-кнопок
    specifiedTimeRadio.addEventListener('change', toggleTimeInput);
    fasterRadio.addEventListener('change', toggleTimeInput);
});
