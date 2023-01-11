const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
  galleryRef.style.display = 'flex';
  galleryRef.style.flexDirection = 'row';
  galleryRef.style.justifyContent = 'center';
  galleryRef.style.gap = '15px';
  galleryRef.style.listStyle = 'none';
  galleryRef.style.paddingLeft = '0px';

const itemsRef = document.createElement('li');
const imgRef = document.createElement('img');

const elements = images
  .map((image) =>
    `<li>
        <img src="${image.url}" alt="${image.alt}" width='380px' height='250px'>
    </li>`)
  .join("");

galleryRef.insertAdjacentHTML("beforeend", elements);