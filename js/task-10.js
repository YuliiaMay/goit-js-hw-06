function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'), 
}

// стоврення елементів
const createBoxes = (amount) => {
  const divArray = [];

	for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');

    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    divArray.push(divEl);
	}
  return divArray;
}

// фукція створення елементів
const onButtonCreateClick = () => {
  let boxesSet = createBoxes(refs.input.value);
  refs.boxes.append(...boxesSet);
}

// фукція видалення елементів
const onButtonDestroyClick = () => {
  refs.boxes.innerHTML = '';
}

// виклик подій
refs.buttonCreate.addEventListener('click', onButtonCreateClick);
refs.buttonDestroy.addEventListener('click', onButtonDestroyClick);
