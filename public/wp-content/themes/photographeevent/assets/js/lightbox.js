// // // Get the lightbox modal
// // var lightboxModal = document.querySelector('.lightbox');
// // var btnCloseLightbox = document.getElementById('lightbox-close');
// // var icFullScreen = document.getElementById('icon-fullscreen');

// // // When the user clicks on the close button, hide the lightbox modal
// // btnCloseLightbox.onclick = function() {
// //     lightboxModal.style.display = "none";
// // }

// // // When the user clicks on the fullscreen icon, display the enlarged image
// // icFullScreen.onclick = function() {
// //     //image à récuperer 
// //     var image = document.getElementById('galerie-img');
// //     var imageSrc = image.getAttribute('src');
// //     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
// //     document.querySelector('.lightbox-img').innerHTML = img;
// //     lightboxModal.style.display = 'block';
// // }

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

// Récupérer l'image
var image = document.getElementById('img-fullscreen');

// Ajouter un événement de clic à l'image
image.addEventListener('click', function(event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Récupérer l'URL de l'image en grand
    var imageUrl = '<?php echo $thumbnail_url[0]; ?>';

    // Créer un élément d'image pour l'image en grand
    var fullImage = new Image();
    fullImage.src = imageUrl;

    // Créer un élément de lightbox pour l'image en grand
    var lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.appendChild(fullImage);

    // Ajouter la lightbox à la page
    document.body.appendChild(lightbox);
});
