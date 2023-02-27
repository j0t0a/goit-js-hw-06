const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = document.getElementById('ingredients')

ingredients.forEach( item => {
  const ingredient = document.createElement("li");
  ingredient.textContent = item;
  element.append(ingredient)
})


