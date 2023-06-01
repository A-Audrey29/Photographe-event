      // FORMULAIRE DE CONTACT

// Get the modals
var modal = document.getElementById('myModal');
var lightboxModal = document.querySelector('.lightbox');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnCta = document.querySelector(".btn-CTA");

var btnCloseLightbox = document.getElementById('close-lightbox');

var icFullScreen = document.getElementById('icon-fullscreen');


// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btnCta.onclick = function() {
    modal.style.display = "block";
    var input = document.querySelector('#wpforms-61-field_3');
    var referenceText = document.querySelector('#reference').textContent;
    input.value = referenceText;
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        var input = document.querySelector('#wpforms-61-field_3');
        input.value = '';
        modal.style.display = "none";
    }

    if (event.target == lightboxModal) {
        lightboxModal.style.display = "none";
    }
}

btnCloseLightbox.onclick = function() {
    lightboxModal.style.display = "none";
}


icFullScreen.onclick = function() {
    //image à récuperer 
    var image = document.getElementById('main-photo');
    var imageSrc = image.getAttribute('src');
    var img = '<img src="' + imageSrc + '" alt="Image agrandie">';
    document.querySelector('.lightbox__image').innerHTML = img;
    lightboxModal.style.display = 'block';
}