import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createGalleryItem = ({ preview, original, description }) => `
 <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
`;

const rootGallery = document.querySelector('.gallery');
const imageGallery = galleryItems.map(createGalleryItem).join('');
rootGallery.innerHTML = imageGallery;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
  overlay: true,
  showCounter: false,
  fadeSpeed: 200,
  close: true,
});

console.log(galleryItems);
