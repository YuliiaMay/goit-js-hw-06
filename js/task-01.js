const categories = document.querySelectorAll('li.item');
const numberOfCategories = categories.length;

console.log(`Number of categories: ${numberOfCategories}`);


categories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});