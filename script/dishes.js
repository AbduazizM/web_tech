// dishes.js

const dishes = [
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "300 г",
        image: "/images/soups/gazpacho.jpg"
    },

    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "/images/soups/mushroom_soup.jpg"
    },

    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "/images/soups/norwegian_soup.jpg"
    },

    {
        keyword: "chickencutletsandmashedpotatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main-course",
        count: "250 г",
        image: "/images/main_course/chickencutletsandmashedpotatoes.jpg"
    },

    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main-course",
        count: "310 г",
        image: "/images/main_course/lasagna.jpg"
    },

    {
        keyword: "friedpotatoeswithmushrooms1",
        name: "Жаренная картошка с грибами",
        price: 150,
        category: "main-course",
        count: "250 г",
        image: "/images/main_course/friedpotatoeswithmushrooms1.jpg"
    },


    {
        keyword: "orangejuice",
        name: "Апельсиновый сок",
        price: 120,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/orangejuice.jpg"
    },

    {
        keyword: "applejuice",
        name: "Яблочный сок",
        price: 90,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/applejuice.jpg"
    },

    {
        keyword: "carrotjuice",
        name: "Морковный сок",
        price: 110,
        category: "beverage",
        count: "300 мл",
        image: "/images/beverages/carrotjuice.jpg"
    },
];

function sortDishesByName(dishes) {
    return dishes.sort((a, b) => a.name.localeCompare(b.name));
}

sortDishesByName(dishes);


export default dishes;
