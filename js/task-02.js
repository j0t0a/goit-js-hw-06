const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = document.getElementById('ingredients')
const cont = [];

ingredients.forEach( item => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  cont.push(ingredient)
  // element.append(ingredient)
})
element.append(...cont)

