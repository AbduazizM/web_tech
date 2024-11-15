// dishes.js

const dishes = [
    //soups
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "300 г",
        image: "/images/soups/gazpacho.jpg",
        kind: 'veg'
    },

    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "/images/soups/mushroom_soup.jpg",
        kind: 'veg'
    },

    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "/images/soups/norwegian_soup.jpg",
        kind: 'fish'
    },

    {
        keyword: "ramen",
        name: "Рамен",
        price: 375,
        category: "soup",
        count: "425 г",
        image: "/images/soups/ramen.jpg",
        kind: 'meat'
    },

    {
        keyword: "tomyum",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "/images/soups/tomyum.jpg",
        kind: 'fish'
    },

    {
        keyword: "chicken",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "/images/soups/chicken.jpg",
        kind: 'meat'
    },


    //main_course
    {
        keyword: "chickencutletsandmashedpotatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main-course",
        count: "250 г",
        image: "/images/main_course/chickencutletsandmashedpotatoes.jpg",
        kind: 'meat'
    },

    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main-course",
        count: "310 г",
        image: "/images/main_course/lasagna.jpg",
        kind: 'meat'
    },

    {
        keyword: "friedpotatoeswithmushrooms1",
        name: "Жаренная картошка с грибами",
        price: 150,
        category: "main-course",
        count: "250 г",
        image: "/images/main_course/friedpotatoeswithmushrooms1.jpg",
        kind: 'veg'
    },

    {
        keyword: "fishrice",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main-course",
        count: "270 г",
        image: "/images/main_course/fishrice.jpg",
        kind: 'fish'
    },

    {
        keyword: "pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main-course",
        count: "470 г",
        image: "/images/main_course/pizza.jpg",
        kind: 'veg'
    },

    {
        keyword: "shrimppasta",
        name: "Паста с креветками",
        price: 340,
        category: "main-course",
        count: "280 г",
        image: "/images/main_course/shrimppasta.jpg",
        kind: 'fish'
    },

    //salads_starters
    {
        keyword: "saladwithegg",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salads_starter",
        count: "250 мл",
        image: "/images/salads_starters/saladwithegg.jpg",
        kind: 'veg'
    },

    {
        keyword: "caesar",
        name: "Цезарь с цыпленком",
        price: 370,
        category: "salads_starter",
        count: "250 мл",
        image: "/images/salads_starters/caesar.jpg",
        kind: 'meat'
    },

    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salads_starter",
        count: "235 мл",
        image: "/images/salads_starters/caprese.jpg",
        kind: 'veg'
    },

    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 480,
        category: "salads_starter",
        count: "250 мл",
        image: "/images/salads_starters/tunasalad.jpg",
        kind: 'fish'
    },

    {
        keyword: "friesketchup",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salads_starter",
        count: "235 мл",
        image: "/images/salads_starters/frenchfries2.jpg",
        kind: 'veg'
    },

    {
        keyword: "friesceasar",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salads_starter",
        count: "235 мл",
        image: "/images/salads_starters/frenchfries1.jpg",
        kind: 'veg'
    },

    //beverages
    {
        keyword: "orangejuice",
        name: "Апельсиновый сок",
        price: 120,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/orangejuice.jpg",
        kind: 'cold'
    },

    {
        keyword: "applejuice",
        name: "Яблочный сок",
        price: 90,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/applejuice.jpg",
        kind: 'cold'
    },
    
    {
        keyword: "carrotjuice",
        name: "Морковный сок",
        price: 110,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/carrotjuice.jpg",
        kind: 'cold'
    },

    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/cappuccino.jpg",
        kind: 'hot'
    },

    {
        keyword: "greentea",
        name: "Зеленый чай",
        price: 100,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/greentea.jpg",
        kind: 'hot'
    },

    {
        keyword: "tea",
        name: "Черный чай",
        price: 90,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/tea.jpg",
        kind: 'hot'
    },

    //desserts
    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "dessert",
        count: "300 г",
        image: "/images/desserts/baklava.jpg",
        kind: 'middle'
    },

    {
        keyword: "cheesecake",
        name: "Чизкейк",
        price: 240,
        category: "dessert",
        count: "125 г",
        image: "/images/desserts/checheesecake.jpg",
        kind: 'small'
    },

    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "dessert",
        count: "125 г",
        image: "/images/desserts/chocolatecheesecake.jpg",
        kind: 'small'
    },

    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 270,
        category: "dessert",
        count: "140 г",
        image: "/images/desserts/chocolatecake.jpg",
        kind: 'small'
    },

    {
        keyword: "donuts3",
        name: "Пончики (3 шт)",
        price: 410,
        category: "dessert",
        count: "350 г",
        image: "/images/desserts/donuts2.jpg",
        kind: 'middle'
    },

    {
        keyword: "donuts6",
        name: "Пончики (6 шт)",
        price: 650,
        category: "dessert",
        count: "700 г",
        image: "/images/desserts/donuts.jpg",
        kind: 'big'
    },
];

function sortDishesByName(dishes) {
    return dishes.sort((a, b) => a.name.localeCompare(b.name));
}

sortDishesByName(dishes);


export default dishes;
