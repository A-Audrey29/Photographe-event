// Sélectionner la lightbox et le bouton de fermeture
let lightboxModal = document.querySelector('.lightbox');
let btnCloseLightbox = document.querySelector('.lightbox-close');

// Fonction pour ouvrir la lightbox
// function openLightbox() {
//   lightboxModal.style.display = 'block';
// }

document.querySelectorAll('.icon-fullscreen').forEach((icon) => {
    icon.addEventListener('click', function(e) {
        let modal = document.querySelector('.lightbox');
        let selectedImage = e.target.closest('.galerie-img').querySelector('#img-fullscreen');
        let modalImage = modal.querySelector('.lightbox-container img');
    
        modalImage.src = selectedImage.src;
        modalImage.alt = selectedImage.alt;
        modal.style.display = 'block'
        modal.classList.add('active')
    })
})


// Fonction pour fermer la lightbox
function closeLightbox() {
    lightboxModal.style.display = 'none';
}

// Ajouter un événement de clic au bouton de fermeture
btnCloseLightbox.addEventListener('click', closeLightbox);


// slide sur les flèches prev et next






// const slide = document.querySelector(".lightbox-image")
// const previousSlide = document.querySelector(".lightbox-prev")
// const nextSlide = document.querySelector("lightbox-next")


// nextSlide(e)

// Récupérer les éléments HTML pour ajouter un événement au survol


// const slide = document.querySelector(".lightbox-image");
// const previousSlide = document.querySelector(".lightbox-prev");
// const nextSlide = document.querySelector(".lightbox-next");
// const images = document.querySelectorAll(".lightbox-image");

// let currentSlide = 0;

// // Add click event listeners to the previous and next buttons
// previousSlide.addEventListener("click", () => {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = images.length - 1;
//   }
//   slide.src = images[currentSlide].src;
// });

// nextSlide.addEventListener("click", () => {
//   currentSlide++;
//   if (currentSlide >= images.length) {
//     currentSlide = 0;
//   }
//   slide.src = images[currentSlide].src;
// });


