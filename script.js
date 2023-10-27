// JavaScript for dynamic content (e.g., menu items)

// Example menu items
const menuItems = [
    { name: "Orange Juice", price: 3.99 },
    { name: "Strawberry Smoothie", price: 4.99 },
    { name: "Green Detox", price: 5.99 },
];

const menu = document.getElementById("menu");

menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<h3>${item.name}</h3><p>$${item.price}</p>`;
    menu.appendChild(menuItem);
});