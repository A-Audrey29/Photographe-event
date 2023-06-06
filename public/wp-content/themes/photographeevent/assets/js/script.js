


    // intégration du bouton contact dans le menu

// Sélectionner le bouton et la div
var btn = document.getElementById("myBtn");
var menuContainer = document.querySelector(".navbar");

// Déplacer le bouton dans la div
menuContainer.appendChild(btn);


        // MENU BURGER

//   toggleMenu()

// récupérez le bouton du menu hamburger et la liste des liens
const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.open_nav');

// quand l'utilisateur clique sur le bouton, la liste des liens s'ouvre ou se ferme
menuBtn.addEventListener('click', function() {
  menu.classList.toggle('open');
});


// fermeture du menu burger
function toggleMenu () {  
    const navbar = document.querySelector('.main-navigation')
    const burger = document.querySelector('.menu-toggle')
    
    burger.addEventListener('click', () => {    
      navbar.classList.toggle('open-nav')
    })
  }
  toggleMenu()

  // // récupérez le bouton du menu hamburger et la liste des liens
// const menuBtn = document.querySelector('.menu-toggle');
// const menuList = document.querySelector('.open_nav');

// // quand l'utilisateur clique sur le bouton, la liste des liens s'ouvre ou se ferme
// menuBtn.addEventListener('click', function() {
//   menuList.classList.toggle('open');
//   menu.classList.toggle('open');
// });


//     // ouverture du menu burger 

// const menuToggle = document.querySelector('.menu-toggle');
// const menu = document.querySelector('.open_nav');

// menuToggle.addEventListener('click', function() {
//   menuToggle.classList.toggle('open')
//   menu.classList.toggle('open')
// })


//     // fermeture du menu burger
// function toggleMenu () {  
//     const navbar = document.querySelector('.main-navigation')
//     const burger = document.querySelector('.menu-toggle')
    
//     burger.addEventListener('click', () => {    
//       navbar.classList.toggle('open-nav')
//     })
//   }
// //   $('.menu-toggle').on('click', function() {
// //     $(this).parent().closest('.navbar-links').hide();
// // });


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


// // Get the lightbox modal
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.querySelector('lightbox-close');
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


// Sélectionner la lightbox et le bouton de fermeture
// var lightboxModal = document.querySelector('.lightbox');
// var btnCloseLightbox = document.querySelector('.lightbox-close');

// // Fonction pour ouvrir la lightbox
// // function openLightbox() {
// //   lightboxModal.style.display = 'block';
// // }
// document.getElementById("icon-fullscreen").addEventListener("click", function() {
//   var modal = document.querySelector(".lightbox");
//   var selectedImage = this.src;
//   var modalImage = modal.querySelector(".lightbox-container img");

//   modalImage.src = selectedImage;
//   modal.style.display = "block";
// });

// // Fonction pour fermer la lightbox
// function closeLightbox() {
//   lightboxModal.style.display = 'none';
// }

// // Ajouter un événement de clic au bouton de fermeture
// btnCloseLightbox.addEventListener('click', closeLightbox);

// // Utilisation de l'icône en plein écran (optionnel)
// // var icFullScreen = document.getElementById('icon-fullscreen');
// // icFullScreen.addEventListener('click', openLightbox);

