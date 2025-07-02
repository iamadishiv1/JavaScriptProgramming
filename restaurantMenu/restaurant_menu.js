const breakfastMenu = ['Pancakes', 'Omelette', 'French Toast'];
const mainCourseMenu = ['Burger', 'Salad', 'Pasta'];
const dessertMenu = ['Ice Cream', 'Cake', 'Pie'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index +1}: ${item}</p>`;
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = "";
for(let i=0; i<dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;