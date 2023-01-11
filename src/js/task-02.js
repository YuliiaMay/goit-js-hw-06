const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
const list = ingredients.map((ingredient) => {
  const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList.add('item');
    ingredientsRef.append(liEl);

  return liEl;
})