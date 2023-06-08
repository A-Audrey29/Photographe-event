// Sélectionner la lightbox et le bouton de fermeture
let lightboxModal = document.querySelector('.lightbox');
let btnCloseLightbox = document.querySelector('.lightbox-close');

// Fonction pour ouvrir la lightbox
// function openLightbox() {
//   lightboxModal.style.display = 'block';
// }
document.querySelector(".icon-fullscreen").addEventListener("click", function(e) {
    let modal = document.querySelector(".lightbox");
    let selectedImage = e.target.closest('.galerie-img').querySelector('#img-fullscreen');
    let modalImage = modal.querySelector(".lightbox-container img");

    modalImage.src = selectedImage.src;
    modalImage.alt = selectedImage.alt;
    modal.style.display = "block"
    modal.classList.add('active')
});

// Fonction pour fermer la lightbox
function closeLightbox() {
    lightboxModal.style.display = 'none';
}

// Ajouter un événement de clic au bouton de fermeture
btnCloseLightbox.addEventListener('click', closeLightbox);


