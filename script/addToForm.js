document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-block');
    const soupSelect = document.getElementById('soup-select');
    const mainDishSelect = document.getElementById('main-dish-select');
    const saladsStarterSelect = document.getElementById('salads-select');
    const drinkSelect = document.getElementById('drink-select');
    const dessertSelect = document.getElementById('dessert-select');

    function updateSelect(){
        soupSelect.innerHTML = `<option value="" selected>--Выберите суп--</option>`;
        mainDishSelect.innerHTML = `<option value="" selected>--Выберите главное блюдо--</option>`;
        saladsStarterSelect.innerHTML = `<option value="" selected>--Выберите салат или стартер--</option>`;
        drinkSelect.innerHTML = `<option value="" selected>--Выберите напиток--</option>`;
        dessertSelect.innerHTML = `<option value="" selected>--Выберите дессерт--</option>`;
    }

    function createNotification(message) {
        // Удаляем старое уведомление, если оно существует
        const oldNotification = document.querySelector('.notification');
        if (oldNotification) {
            oldNotification.remove();
        }

        // Создаём новое уведомление
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.style.position = 'fixed';
        notification.style.top = '50%';
        notification.style.left = '50%';
        notification.style.width = '40rem';
        notification.style.height = '20rem';
        notification.style.transform = 'translate(-50%, -50%)';
        notification.style.padding = '2rem';
        notification.style.backgroundColor = 'white';
        notification.style.border = '1px solid #ddd';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        notification.style.textAlign = 'center';

        const divForP = document.createElement('div');
        divForP.style.marginTop = '3rem';
        divForP.style.marginBottom = '2rem';
        divForP.style.height = '5rem';
        notification.appendChild(divForP);

        const messageText = document.createElement('p');
        messageText.textContent = message;
        messageText.style.fontSize = '1.7rem';
        messageText.style.margin = '0 0 1rem';
        divForP.appendChild(messageText);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Окей 👌';
        closeButton.style.fontSize = '1.7rem';
        closeButton.style.padding = '10px 20px';
        closeButton.style.border = '2px solid black';
        closeButton.style.borderRadius = '1rem';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.cursor = 'pointer';
        closeButton.addEventListener('click', () => {
            notification.remove();
        });

        notification.appendChild(closeButton);
        document.body.appendChild(notification);
    }

    function validateOrder(event) {
        // Считываем выбранные блюда
        const soup = soupSelect.value;
        const mainDish = mainDishSelect.value;
        const saladStarter = saladsStarterSelect.value;
        const drink = drinkSelect.value;

        // Проверяем наличие выбора
        if (!soup && !mainDish && !saladStarter && !drink && !dessertSelect.value) {
            event.preventDefault();
            createNotification('Ничего не выбрано. Выберите блюда для заказа');
            return false;
        }

        // Проверяем, что не хватает, с использованием switch
        switch (true) {
            case saladStarter && !soup && !mainDish:
                createNotification('Выберите суп или главное блюдо');
                event.preventDefault();
                break;
            case soup && !mainDish && !saladStarter:
                createNotification('Выберите главное блюдо или салат/стартер');
                event.preventDefault();
                break;
            case (soup || mainDish || saladStarter) && !drink:
                createNotification('Выберите напиток');
                event.preventDefault();
                break;
            case (drink || dessertSelect) && !mainDish && !mainDish && !saladStarter:
                createNotification('Выберите главное блюдо');
                event.preventDefault();
                break;
            default:
                break;
        }

        // Если всё корректно, форма отправляется
        return false;
    }

    const timeInput = document.getElementById('delivery-time');
    const specifiedTimeRadio = document.getElementById('specified_time');
    const fasterRadio = document.getElementById('faster');

    timeInput.disabled = true;

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

    // Добавляем проверку на отправку формы
    form.addEventListener('submit', validateOrder);
});

