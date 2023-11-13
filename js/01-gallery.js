import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

for (const image of galleryItems) {
  const item = `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
  gallery.insertAdjacentHTML('beforeend', item);
};

const handleClick = (event) => {
  event.preventDefault();
  function onEscape(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }
  const instance = basicLightbox.create(`
    <img src= ${event.target.dataset.source}>
    `,
    {
      onShow: () => window.addEventListener("keydown", onEscape),
      onClose: () => window.removeEventListener("keydown", onEscape),
    },)
  instance.show();
}

gallery.addEventListener('click', handleClick);