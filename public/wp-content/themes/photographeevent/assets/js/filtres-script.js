// pagination

jQuery(document).ready(function($) {
  let currentPage = 1;
  // Add event listener to the click of links with class "ajax"
  $('#load-more').on('click', function(event) {
      currentPage++;
      // Send an AJAX request to the server
      $.ajax({
          url: 'wp-admin/admin-ajax.php', // Use the global ajaxurl variable provided by WordPress
          method: 'POST', // HTTP method to use
          data: {
              action: 'weichie_load_more',
              paged: currentPage,
          },
          success: function(res) {
              console.log(res);
              $('.galerie-container').append(res);
          },
          error: function(res) {
              console.log('Error');

          }
      });
  });



// julien

// // Attacher un événement "change" à chaque select
// jQuery('#cat-filter, #for-filter, #for-date').on('change', function() {

//   // Récupérer la valeur de chaque select
//   var cat = jQuery('#cat-filter').val();
//   var format = jQuery('#for-filter').val();
//   var tri = jQuery('#for-date').val();

//   // Créer un objet de données pour la requête AJAX
//   var data = {
//     action: 'filter_photos'
//   };

//   // Ajouter chaque valeur qui n'est pas vide à l'objet de données
//   if (cat) {
//     data.cat = cat;
//   }
//   if (format) {
//     data.format = format;
//   }
//   if (tri) {
//     data.tri = tri;
//   }

//   // Effectuer une requête AJAX vers le fichier PHP approprié
//   jQuery.ajax({
//     url: '/NathalieMota/wp-admin/admin-ajax.php',
//     type: 'POST',
//     data: data,
//     success: function(response) {
//       $('.container_thumbnail_block').html(response); // Remplacer le contenu
//     }
//   });
// });









  // Filtre Catégories
  $('#category-select').on('change', function() {
      let cat_slug = $(this).val();
      let format_slug = $('#format-select').val();
      let date_order = $('#date-select').val();
      filtrerPhotos(cat_slug, format_slug, date_order);
  });
  // Filtre Formats
  $('#format-select').on('change', function() {
      let cat_slug = $('#category-select').val();
      let format_slug = $(this).val();
      let date_order = $('#date-select').val();
      filtrerPhotos(cat_slug, format_slug, date_order);
  });

  // Tri des photos
  $('#date-select').on('change', function() {
      let cat_slug = $('#category-select').val();
      let format_slug = $('#format-select').val();
      let date_order = $(this).val();
      filtrerPhotos(cat_slug, format_slug, date_order);
  });
  
  jQuery('#cat1, #format1, #date1').on('change', function() {
    var categorie = jQuery('#cat1').val();
    var format = jQuery('#format1').val();
    var date = jQuery('#date1').val();
  
    var data = {
      action: 'filter_post',
      categorie: categorie,
      format: format,
      date: date // Ajout de la clé 'date' avec la valeur sélectionnée
    };
  
    jQuery.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: data,
      success: function(res) {
        $('.photo_toutephoto').html(res);
        $('.chargerplus').empty();
      }
    });
});

});
