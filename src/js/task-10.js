function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

// console.log(refs.boxes);

const createBoxes = (amount) => {
  // const numberOfDiv = amount;
  const divArray = [];

	for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');

    // console.log(divEl.innerHTML);

    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    divArray.push(divEl);
    // refs.boxes.insertAdjacentHTML('beforeend', divEl)

	}
  return divArray;
}

// console.log(divEl);
console.log(createBoxes(2));

const onButtonCreateClick = () => {
  // refs.boxes.textContent = refs.input.currentTarget.value;

  let boxesSet = createBoxes(refs.input.value)
	refs.boxes.append(...boxesSet)
    // refs.boxes.insertAdjacentHTML('beforeend',  ...boxesSet)

}

const onButtonDestroyClick = (event) => {
  event.currentTarget.reset();
  // refs.boxes.innerHTML = '';
}

refs.buttonCreate.addEventListener('click', onButtonCreateClick);
refs.buttonDestroy.addEventListener('click', onButtonDestroyClick);
