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


// navigation sur les flèches prev et next

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.querySelector('.lightbox');
    const prevButton = lightbox.querySelector('.lightbox-prev');
    const nextButton = lightbox.querySelector('.lightbox-next');
    const buttonlightbox = document.querySelectorAll('.lightbox-photo');

    // Fonction pour passer à la lightbox suivante
    function goToNextLightbox(e) {
        e.stopPropagation(); // Empêche la propagation de l'événement pour éviter la fermeture de la lightbox
        let currentIndex = parseInt(lightbox.getAttribute('data-current-index'));
        let nextButton = buttonlightbox[currentIndex + 1];
        if (nextButton) {
            nextButton.click();
            lightbox.setAttribute('data-current-index', currentIndex + 1);
        }
    }

    // Fonction pour passer à la lightbox précédente
    function goToPreviousLightbox(e) {
        e.stopPropagation(); // Empêche la propagation de l'événement pour éviter la fermeture de la lightbox
        let currentIndex = parseInt(lightbox.getAttribute('data-current-index'));
        let previousButton = buttonlightbox[currentIndex - 1];
        if (previousButton) {
            previousButton.click();
            lightbox.setAttribute('data-current-index', currentIndex - 1);
        }
    }

    // Ajouter un événement de clic à la flèche de droite
    nextButton.addEventListener('click', goToNextLightbox);

    // Ajouter un événement de clic à la flèche de gauche
    prevButton.addEventListener('click', goToPreviousLightbox);

    // Initialiser l'attribut data-current-index avec la valeur 0
    lightbox.setAttribute('data-current-index', 0);
});


// document.addEventListener('DOMContentLoaded', function() {
//     const lightbox = document.querySelector('.lightbox');
//     const prevButton = lightbox.querySelector('.lightbox-prev');
//     const nextButton = lightbox.querySelector('.lightbox-next');

//     // Fonction pour passer à la lightbox suivante
//     function goToNextLightbox() {
//         // Code pour passer à la lightbox suivante
//         // ...

//         console.log('Lightbox suivante');
//     }

//     // Fonction pour passer à la lightbox précédente
//     function goToPreviousLightbox() {
//         // Code pour passer à la lightbox précédente
//         // ...

//         console.log('Lightbox précédente');
//     }

//     // Ajouter un événement de clic à la flèche de droite
//     nextButton.addEventListener('click', goToNextLightbox);

//     // Ajouter un événement de clic à la flèche de gauche
//     prevButton.addEventListener('click', goToPreviousLightbox);
// });

// // const images = document.querySelectorAll('.lightbox-image'); // Sélectionne tous les éléments ayant la classe "lightbox-image" et les stocke dans la variable "images"
// let currentImage = 0; // Initialise l'index de l'image courante à 0
// // document.querySelectorAll('.icon-fullscreen').forEach((icon) => {
// //     icon.addEventListener('click', function(e) {
// document.querySelectorAll('.lightbox-image').forEach((lightbox) =>{
//     lightbox.addEventListener('click',function(event) { // Ajoute un écouteur d'événement sur l'objet "document" pour détecter les clics de souris
//     const target = event.target; // Récupère l'élément sur lequel le clic de souris a été effectué
  
//     if (target.classList.contains('lightbox-prev')) { // Si l'élément possède la classe "lightbox-prev" (bouton précédent)
//       currentImage--; // Décrémente l'index de l'image courante
//       if (currentImage < 0) { // Si l'index devient inférieur à 0, cela signifie que l'utilisateur a atteint la première image et il faut revenir à la dernière image
//         currentImage = images.length - 1; // L'index de l'image courante est mis à la valeur de l'index de la dernière image
//       }
//       updateLightbox(); // Met à jour la lightbox pour afficher l'image courante
//     } else if (target.classList.contains('lightbox-next')) { // Si l'élément possède la classe "lightbox-next" (bouton suivant)
//       currentImage++; // Incrémente l'index de l'image courante
//       if (currentImage >= images.length) { // Si l'index dépasse le nombre d'images disponibles, cela signifie que l'utilisateur a atteint la dernière image et il faut revenir à la première image
//         currentImage = 0; // L'index de l'image courante est mis à 0, représentant la première image
//       }
//       updateLightbox(); // Met à jour la lightbox pour afficher l'image courante
//     }
// })
//   });

  






// let flecheGauche = lightbox.querySelector('.lightbox-prev');
// flecheGauche.addEventListener('click', function(e) {
//   e.stopPropagation();
  
//   let currentIndex = parseInt(lightbox.getAttribute('data-current-index'));
//   let previousButton = buttonlightbox[currentIndex - 1];
//   if (previousButton) {
//     previousButton.click();
//     lightbox.setAttribute('data-current-index', currentIndex - 1);
//   }
// });

// let flecheDroite = lightbox.querySelector('.lightbox-next');
// flecheDroite.addEventListener('click', function(e) {
//   e.stopPropagation();
  
//   let currentIndex = parseInt(lightbox.getAttribute('data-current-index'));
//   let nextButton = buttonlightbox[currentIndex + 1];
//   if (nextButton) {
//     nextButton.click();
//     lightbox.setAttribute('data-current-index', currentIndex + 1);
//   }
// });





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


