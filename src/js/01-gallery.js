// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('ul.gallery');

function createGallery(galleryItems) {
  const images = galleryItems
    .map(({ preview, original, description }) => {
      return `<li style="list-style:none;"><a class="gallery__item simpleLightbox" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a></li>`;
    })
    .join('');
  return images;
}

gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));

new SimpleLightbox('.simpleLightbox', {
  captionsData: 'alt',
  captionDelay: 250,
});
