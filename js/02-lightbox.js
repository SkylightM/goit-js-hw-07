import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const image of galleryItems) {
    const item = `<li>
    <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
</li>`
    gallery.insertAdjacentHTML('beforeend', item);
};

const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionDelay: 250,
    });