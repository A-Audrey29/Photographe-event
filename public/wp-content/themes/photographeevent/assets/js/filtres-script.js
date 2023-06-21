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

  // Filtre Catégories

  
  jQuery(document).ready(function($) {
    // Écouteur d'événement pour le changement de filtres
    $('#category-select, #format-select, #date-select').change(function() {
        // Obtenez les valeurs des filtres sélectionnés
        let cat = $('#category-select').val();
        let photoFormat = $('#format-select').val();
        let date = $('#date-select').val();
        
        // Faites la requête Ajax
        $.ajax({
            url: 'wp-admin/admin-ajax.php', // L'URL de l'action Ajax
            method: 'POST',
            data: {
                action: 'galerie_filtres', // L'action à appeler dans functions.php
                cat_id: cat, // Valeur du filtre de catégorie
                format: photoFormat // Valeur du filtre de format
            },
            success: function(res) {
                // Mettez à jour la galerie avec les résultats
                $('.galerie-container').html(res);
            },
            error: function(xhr, status, error) {
                // Gérer les erreurs
                console.log(error, xhr, status);
            }
        });
    });
});



//   $('#category-select').on('change', function() {
//       let cat_slug = $(this).val();
//       let format_slug = $('#format-select').val();
//       let date_order = $('#date-select').val();
//       galerie_filtres(cat_slug, format_slug, date_order);
//       console.log(cat_slug);
//   });
//   // Filtre Formats
//   $('#format-select').on('change', function() {
//       let cat_slug = $('#category-select').val();
//       let format_slug = $(this).val();
//       let date_order = $('#date-select').val();
//       galerie_filtres(cat_slug, format_slug, date_order);
//   });

//   // Tri des photos
//   $('#date-select').on('change', function() {
//       let cat_slug = $('#category-select').val();
//       let format_slug = $('#format-select').val();
//       let date_order = $(this).val();
//       galerie_filtres(cat_slug, format_slug, date_order);
//   });
  
//   jQuery('#cat, #format, #date').on('change', function() {
//     let categorie = jQuery('#cat').val();
//     let format = jQuery('#format').val();
//     let date = jQuery('#date').val();
  
//     let data = {
//       action: 'filter_post',
//       categorie: categorie,
//       format: format,
//       date: date 
//     };
  
//     jQuery.ajax({
//       type: 'POST',
//       url: '/wp-admin/admin-ajax.php',
//       data: data,
//       success: function(res) {
//         $('.photo_toutephoto').html(res);
//         $('.chargerplus').empty();
//       }
//     });
// });

});
