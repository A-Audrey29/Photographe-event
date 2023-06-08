// Sélectionner la lightbox et le bouton de fermeture
let lightboxModal = document.querySelector('.lightbox');
let btnCloseLightbox = document.querySelector('.lightbox-close');

// Fonction pour ouvrir la lightbox
// function openLightbox() {
//   lightboxModal.style.display = 'block';
// }
const iconFullscreenList = document.querySelectorAll(".icon-fullscreen")
iconFullscreenList.forEach(function(iconFullscreen){
iconFullscreen.addEventListener("click", function(e) {
    let modal = document.querySelector(".lightbox")
    let selectedImage = e.target.closest('.galerie-img').querySelector('#img-fullscreen')
    let modalImage = modal.querySelector(".lightbox-container img")

    modalImage.src = selectedImage.src
    modalImage.alt = selectedImage.alt
    modal.style.display = "block"
    modal.classList.add('active')
})
});

// Fonction pour fermer la lightbox
function closeLightbox() {
  lightboxModal.style.display = 'none'
}

// Ajouter un événement de clic au bouton de fermeture
btnCloseLightbox.addEventListener('click', closeLightbox);





// Get the lightbox modal



// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.getElementById('lightbox-close');
// var icFullScreen = document.getElementById('icon-fullscreen');

// // When the user clicks on the close button, hide the lightbox modal
// btnCloseLightbox.onclick = function() {
//     lightboxModal.style.display = "none";
// }

// // When the user clicks on the fullscreen icon, display the enlarged image
// icFullScreen.onclick = function() {
//     //image à récuperer 
//     var image = document.getElementById('galerie-img');
//     var imageSrc = image.getAttribute('src');
//     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
//     document.querySelector('.lightbox-img').innerHTML = img;
//     lightboxModal.style.display = 'block';
// }




// // Get the lightbox modal
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.getElementById('lightbox-close');
// var icFullScreen = document.getElementById('icon-fullscreen');

// // When the user clicks on the close button, hide the lightbox modal
// btnCloseLightbox.onclick = function() {
//     lightboxModal.style.display = "none";
// }

// // When the user clicks on the fullscreen icon, display the enlarged image
// icFullScreen.onclick = function() {
//     //image à récuperer . dans apparence.php et ds single.pgp
//     var image = document.getElementById('galerie-img');
//     var imageSrc = image.getAttribute('src');
//     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
//     document.querySelector('.lightbox-img').innerHTML = img;
//     lightboxModal.style.display = 'block';
    
// }

// // When the user clicks anywhere outside of the lightbox modal, close it
// // window.onclick = function(event) {
// //     if (event.target == lightboxModal) {
// //         lightboxModal.style.display = "none";
// //     }
// // }


// var lightBox = document.querySelector('.lightbox');

// // Get the button that opens the modal
// var iconFullscreen = document.querySelector('.icon-fullscreen');

// // When the user clicks on the button, open the modal
// iconFullscreen.onclick = function() {
//     lightBox.style.display = "block";
//     // var input = document.querySelector('#wpforms-61-field_3');
//     // //ajout de la référence photo
//     // var referenceText = document.querySelector('#reference').textContent;
//     // input.value = referenceText
// }





// // // When the user clicks anywhere outside of the lightbox modal, close it
// // window.onclick = function(event) {
// //     if (event.target == lightboxModal) {
// //         lightboxModal.style.display = "none";
// //     }
// // }


// // Récupérer les éléments de la lightbox
// var lightboxContainer = document.getElementById('lightbox-container');
// var btnCloseLightbox = document.querySelector('.lightbox-close');
// var lightboxImg = document.querySelector('.lightbox-img');
// var img = lightboxImg.querySelector('img');

// // Fonction pour ouvrir la lightbox
// function openLightbox(imageSrc) {
//   img.src = imageSrc;
//   lightboxContainer.style.display = 'block';
// }

// // Fonction pour fermer la lightbox
// function closeLightbox() {
//   lightboxContainer.style.display = 'none';
// }

// // Écouter le clic sur le bouton de fermeture
// btnCloseLightbox.addEventListener('click', closeLightbox);

// // // Exemple de l'utilisation de la fonction openLightbox avec un lien ou un bouton
// // var exampleLink = document.getElementById('example-link');
// // exampleLink.addEventListener('click', function(event) {
// //   event.preventDefault(); // Empêcher le comportement par défaut du lien
// //   var imageSrc = this.getAttribute('href'); // Récupérer l'URL de l'image depuis l'attribut href
// //   openLightbox(imageSrc);
// // });

// icFullScreen.onclick = function() {
//     //image à récuperer 
//     var image = document.getElementById('lightbox-img');
//     // var imageSrc = image.getAttribute('src');
//     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
//     document.querySelector('.lightbox-img').innerHTML = img;
//     lightboxModal.style.display = 'block';
//     console.log(image);
// }




//   //cursor

// // // Récupérer l'icône de plein écran
// // var iconFullscreen = document.getElementById('icon-fullscreen');

// // // Ajouter un événement de clic à l'icône de plein écran
// // iconFullscreen.addEventListener('click', function(event) {
// //     // Empêcher le comportement par défaut du lien
// //     event.preventDefault();

// //     // Récupérer l'URL de l'image en grand
// //     var imageUrl = '<?php echo $thumbnail_url[0]; ?>';

// //     // Créer un élément d'image pour l'image en grand
// //     var image = new Image();
// //     image.src = imageUrl;

// //     // Créer un élément de lightbox pour l'image en grand
// //     var lightbox = document.createElement('div');
// //     lightbox.classList.add('lightbox');
// //     lightbox.appendChild(image);

// //     // Ajouter la lightbox à la page
// //     document.body.appendChild(lightbox);
// // });

// // Get the lightbox modal
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.getElementById('lightbox-close');
// var icFullScreen = document.getElementById('icon-fullscreen');

// // When the user clicks on the close button, hide the lightbox modal
// btnCloseLightbox.onclick = function() {
//     lightboxModal.style.display = "none";
// }

// // When the user clicks on the fullscreen icon, display the enlarged image
// icFullScreen.onclick = function() {
//     //image à récuperer 
//     var image = document.getElementById('galerie-img');
//     var imageSrc = image.getAttribute('src');
//     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
//     document.querySelector('.lightbox-img').innerHTML = img;
//     lightboxModal.style.display = 'block';
// }

// // When the user clicks anywhere outside of the lightbox modal, close it
// window.onclick = function(event) {
//     if (event.target == lightboxModal) {
//         lightboxModal.style.display = "none";
//     }
// }

// // Récupérer l'image
// var image = document.getElementById('img-fullscreen');

// // Ajouter un événement de clic à l'image
// image.addEventListener('click', function(event) {
//     // Empêcher le comportement par défaut du lien
//     event.preventDefault();

//     // Récupérer l'URL de l'image en grand
//     var imageUrl = '<?php echo $thumbnail_url[0]; ?>';

//     // Créer un élément d'image pour l'image en grand
//     var fullImage = new Image();
//     fullImage.src = imageUrl;

//     // Créer un élément de lightbox pour l'image en grand
//     var lightbox = document.createElement('div');
//     lightbox.classList.add('lightbox');
//     lightbox.appendChild(fullImage);

//     // Ajouter la lightbox à la page
//     document.body.appendChild(lightbox);
// });


// // Récupérer l'image
// var image = document.getElementById('img-fullscreen');

// // Ajouter un événement de clic à l'image
// image.addEventListener('click', function(event) {
//     // Empêcher le comportement par défaut du lien
//     event.preventDefault();

//     // Récupérer l'URL de l'image en grand
//     var imageUrl = '<?php echo $thumbnail_url[0]; ?>';

//     // Créer un élément d'image pour l'image en grand
//     var fullImage = new Image();
//     fullImage.src = imageUrl;

//     // Créer un élément de lightbox pour l'image en grand
//     var lightbox = document.createElement('div');
//     lightbox.classList.add('lightbox');
//     lightbox.appendChild(fullImage);

//     // Ajouter la lightbox à la page
//     document.body.appendChild(lightbox);
// });
// class lightbox {
//   static init() {
// // Récupérer le bouton de plein écran
// var iconFullscreen = document.querySelectorAll('.icon-fullscreen');
//     array.forEach(iconFullscreen => {iconFullscreen.addEventListener('click', function(e) {
//       // Empêcher le comportement par défaut du lien
//       e.preventDefault();
  
//       // Récupérer l'image
//       // var image = this.parentNode.parentNode.previousElementSibling;
//   new lightbox(e.currentTarget.getAttribute('href'))
//       // Récupérer l'URL de l'image en grand
//       var urlImage = image.getAttribute('src');
  
//       // Créer un élément d'image pour l'image en grand
//       var fullImage = new Image();
//       fullImage.src = urlImage;
//       fullImage.alt = 'Image agrandie';
  
//       // Créer un élément de lightbox pour l'image en grand
//       var lightbox = document.createElement('div');
//       lightbox.classList.add('lightbox');
//       lightbox.appendChild(fullImage);
  
//       // Ajouter la lightbox à la page
//       document.body.appendChild(lightbox);
//   });
      
//     });
// // Ajouter un événement de clic au bouton de plein écran

// }
// }
// // $(document).on('click', '.btn-plein-ecran', function() {
// //   var image = $(this).parent().parent().prev();
// //   var urlImage = image.attr('src');
// //   var creerImage = '<img src="' + urlImage + '" alt="Image agrandie">';
// //   $('.lightbox__image').html(creerImage);
// //   transitionPopup($('.lightbox'), 1);
// // });


// Get the lightbox modal
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.querySelector('lightbox-close');
// var icFullScreen = document.getElementById('icon-fullscreen');

// // When the user clicks on the close button, hide the lightbox modal
// if (btnCloseLightbox){
// btnCloseLightbox.onclick = function() {
//     lightboxModal.style.display = "none";
// }}

// // When the user clicks on the fullscreen icon, display the enlarged image
// icFullScreen.onclick = function() {
//     //image à récuperer . dans apparence.php et ds single.pgp
//     var image = document.getElementById('img-fullscreen');
//     var imageSrc = image.getAttribute('src');
//     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
//     document.querySelector('.lightbox-img').innerHTML = img;
//     lightboxModal.style.display = 'block';
    
//}

// When the user clicks anywhere outside of the lightbox modal, close it
// window.onclick = function(event) {
//     if (event.target == lightboxModal) {
//         lightboxModal.style.display = "none";
//     }
// }


// var lightBox = document.querySelector('.lightbox');

// // Get the button that opens the modal
// var iconFullscreen = document.querySelector('.icon-fullscreen');

// // When the user clicks on the button, open the modal
// iconFullscreen.onclick = function() {
//     lightBox.style.display = "block";
//     // var input = document.querySelector('#wpforms-61-field_3');
//     // //ajout de la référence photo
//     // var referenceText = document.querySelector('#reference').textContent;
//     // input.value = referenceText
// }

// // Sélectionner la lightbox et le bouton de fermeture
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.querySelector('.lightbox-close');

// // Fonction pour ouvrir la lightbox
// function openLightbox() {
//   lightboxModal.style.display = 'block';
// }

// // Fonction pour fermer la lightbox
// function closeLightbox() {
//   lightboxModal.style.display = 'none';
// }

// // Ajouter un événement de clic au bouton de fermeture
// btnCloseLightbox.addEventListener('click', closeLightbox);

// // Utilisation de l'icône en plein écran (optionnel)
// var icFullScreen = document.getElementById('icon-fullscreen');
// icFullScreen.addEventListener('click', openLightbox);





// // Sélectionner la lightbox et le bouton de fermeture
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.querySelector('.lightbox-close');

// // Fonction pour ouvrir la lightbox
// function openLightbox() {
//   lightboxModal.style.display = 'block';
//   document.body.style.overflow = 'hidden'; // Empêcher le défilement de la page principale
// }

// // Fonction pour fermer la lightbox
// function closeLightbox() {
//   lightboxModal.style.display = 'none';
//   document.body.style.overflow = 'auto'; // Rétablir le défilement de la page principale
// }

// // Ajouter un événement de clic au bouton de fermeture
// btnCloseLightbox.addEventListener('click', closeLightbox);

// // Utilisation de l'icône en plein écran (optionnel)
// var icFullScreen = document.getElementById('icon-fullscreen');
// icFullScreen.addEventListener('click', openLightbox);




// // Sélectionner la lightbox et le bouton de fermeture
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.querySelector('.lightbox-close');
// var icFullScreen = document.getElementById('icon-fullscreen');

// // Fonction pour ouvrir la popup
// function openPopup() {
//   lightboxModal.style.display = 'block';
//   document.body.style.overflow = 'hidden'; // Empêcher le défilement de la page principale
// }

// // Fonction pour fermer la popup
// function closePopup() {
//   lightboxModal.style.display = 'none';
//   document.body.style.overflow = 'auto'; // Rétablir le défilement de la page principale
// }

// // Ajouter un événement de clic au bouton de fermeture
// btnCloseLightbox.addEventListener('click', closePopup);

// // Utilisation de l'icône en plein écran (optionnel)
// icFullScreen.addEventListener('click', openPopup);
