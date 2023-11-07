import { galleryItems } from './gallery-items.js';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

const galleryList = document.querySelector('.gallery');
let instance = null;

galleryItems.forEach(item => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.setAttribute('data-source', item.original);
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const source = e.target.dataset.source;

    instance = basicLightbox.create(
      `<img src="${source}" width="800" height="600" />`
    );
    instance.show();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && instance) {
    instance.close();
  }
});
console.log(galleryItems);
