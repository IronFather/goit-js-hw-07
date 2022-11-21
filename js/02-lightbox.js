import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery (arr) {
    return arr
    .map(({preview, original, description}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join("");
}; //1+

const marcupGalleryItems = createMarkupGallery(galleryItems);
galleryEl.innerHTML = marcupGalleryItems;//1+

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }); //3,4+