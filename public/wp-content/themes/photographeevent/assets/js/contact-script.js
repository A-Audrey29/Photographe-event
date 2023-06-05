      // FORMULAIRE DE CONTACT

    
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    var input = document.querySelector('#wpforms-61-field_3');
    //ajout de la référence photo
    var referenceText = document.querySelector('#reference').textContent;
    input.value = referenceText
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






// // Get the modals
// var modal = document.getElementById('myModal');
// var lightboxModal = document.querySelector('.lightbox');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btnCta = document.querySelector(".btn-CTA");

// var btnCloseLightbox = document.getElementById('lightbox-close');

// var icFullScreen = document.getElementById('icon-fullscreen');


// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// btnCta.onclick = function() {
//     modal.style.display = "block";
//     var input = document.querySelector('#wpforms-61-field_3');
//     var referenceText = document.querySelector('#reference').textContent;
//     input.value = referenceText;
// }


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         var input = document.querySelector('#wpforms-61-field_3');
//         input.value = '';
//         modal.style.display = "none";
//     }

//     if (event.target == lightboxModal) {
//         lightboxModal.style.display = "none";
//     }
// }


// btnCloseLightbox.onclick = function() {
//     lightboxModal.style.display = "none";
// }


// icFullScreen.onclick = function() {
//     //image à récuperer 
//     var image = document.getElementById('galerie-img');
//     var imageSrc = image.getAttribute('src');
//     var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
//     document.querySelector('.lightbox-img').innerHTML = img;
//     lightboxModal.style.display = 'block';
// }


// Get the modals
// var modal = document.getElementById('myModal');
// var lightboxModal = document.querySelector('.lightbox');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btnCta = document.querySelector(".btn-CTA");

// var btnCloseLightbox = document.getElementById('lightbox-close');

// var icFullScreen = document.getElementById('icon-fullscreen');


// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// btnCta.onclick = function() {
//     modal.style.display = "block";
//     var input = document.querySelector('#wpforms-61-field_3');
//     var referenceText = document.querySelector('#reference').textContent;
//     input.value = referenceText;
// }


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         var input = document.querySelector('#wpforms-61-field_3');
//         input.value = '';
//         modal.style.display = "none";
//     }

//     if (event.target == lightboxModal) {
//         lightboxModal.style.display = "none";
//     }
// }


// btnCloseLightbox.onclick = function() {
//     lightboxModal.style.display = "none";
// }


// // icFullScreen.onclick = function() {
// //     //image à récuperer 
// //     var image = document.getElementById('galerie-img');
// //     var imageSrc = image.getAttribute('src');
// //     var img = '<img src="' + imageSrc + '" alt="#">';
// //     document.querySelector('.lightbox-img').innerHTML = img;
// //     lightboxModal.style.display = 'block';
// // }

// // Sélectionnez tous les éléments avec la classe "open-lightbox"
// const openLightboxButtons = document.querySelectorAll('.icon-fullscreen');

// // Parcourez chaque bouton et ajoutez un écouteur d'événement pour l'ouverture de la lightbox
// openLightboxButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Sélectionnez la lightbox et affichez-la en modifiant son style
//     const lightbox = document.querySelector('.lightbox');
//     lightbox.style.display = 'block';
//   });
// });