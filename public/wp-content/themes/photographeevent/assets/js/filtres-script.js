// pagination

jQuery(document).ready(function($) {
  // Add event listener to the click of links with class "ajax"
  $('#load-more').on('click', function(event) {
      let currentIndex = parseInt($('#load-more').attr('data-current-index'));

      event.preventDefault(); // Prevent the default behavior of the link
      // Send an AJAX request to the server
      $.ajax({
          url: 'wp-admin/admin-ajax.php', // Use the global ajaxurl variable provided by WordPress
          method: 'POST', // HTTP method to use
          data: {
              action: 'weichie_load_more',
              paged: currentIndex + 1,
          },
          success: function(res) {
              // console.log(res);
              $('.galerie-container').append(res);
              $('#load-more').attr('data-current-index', currentIndex + 1);
          },
          error: function(res) {
              console.log('Error');

          }
      });
  });

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
  // Fonction de filtrage des photos
  function filtrerPhotos(cat_slug, format_slug, date_order) {
   
    console.log('hello')

     console.log(cat_slug, format_slug, date_order);
      $.ajax({
          url: 'wp-admin/admin-ajax.php', // Use the global ajaxurl variable provided by WordPress
          type: 'POST',
          data: {
              action: 'filtrer_photos',
              cat_slug: cat_slug,
              format_slug: format_slug,
              date_order: date_order,
          },
          beforeSend: function() {
              // Afficher un indicateur de chargement
              $('.galerie-container').addClass('loading');
          },
          success: function(response) {
              // Mettre à jour le contenu de la galerie avec les photos filtrées
              $('.galerie-container').html(response);
          },
          complete: function() {
              // Enlever l'indicateur de chargement
              $('.galerie-container').removeClass('loading');
          },
         
      });
  }
});

    
      



      

// (function($) {
//   $(document).ready(function() {

//     // Fonction pour filtrer les photos
//     function filtrerPhotos(categorie, format, date) {
//       var data = {
//         action: 'filtrer_photos',
//         categorie: categorie,
//         format: format,
//         date: date
//       };

//       $.ajax({
//         url: ajaxurl,
//         type: 'POST',
//         data: data,
//         beforeSend: function() {
//           // Afficher un indicateur de chargement ou masquer les résultats précédents si nécessaire
//         },
//         success: function(response) {
//           // Mettre à jour la section des photos avec les nouvelles photos filtrées
//           $('.galerie-photos').html(response);
//         },
//         error: function(xhr, status, error) {
//           // Gérer les erreurs de la requête AJAX
//         },
//         complete: function() {
//           // Cacher l'indicateur de chargement si nécessaire
//         }
//       });
//     }

//     // Événement de changement de catégorie
//     $('.categorie-dropdown').on('change', function() {
//       var categorie = $(this).val();
//       var format = $('.format-dropdown').val();
//       var date = $('.date-dropdown').val();

//       filtrerPhotos(categorie, format, date);
//     });

//     // Événement de changement de format
//     $('.format-dropdown').on('change', function() {
//       var categorie = $('.categorie-dropdown').val();
//       var format = $(this).val();
//       var date = $('.date-dropdown').val();

//       filtrerPhotos(categorie, format, date);
//     });

//     // Événement de changement de date
//     $('.date-dropdown').on('change', function() {
//       var categorie = $('.categorie-dropdown').val();
//       var format = $('.format-dropdown').val();
//       var date = $(this).val();

//       filtrerPhotos(categorie, format, date);
//     });

//   });
// })(jQuery);


// jQuery(document).ready(function($) {
//   // Filter by category
//   $('.category-dropdown').on('change', function() {
//     var selectedCategory = $(this).val(); // Get the selected category

//     // Send an AJAX request to filter the photos by category
//     $.ajax({
//       url: 'wp-admin/admin-ajax.php', // URL to send the request to
//       method: 'POST', // HTTP method to use
//       data: {
//         action: 'filtrer_par_categorie',
//         cat_id: selectedCategory
//       },
//       success: function(res) {
//         // Display the filtered photos
//         $('.galerie-container').html(res);
//       },
//       error: function(res) {
//         console.log('Error');
//       }
//     });
//   });

//   // Filter by format
//   $('.format-dropdown').on('change', function() {
//     var selectedFormat = $(this).val(); // Get the selected format

//     // Send an AJAX request to filter the photos by format
//     $.ajax({
//       url: 'wp-admin/admin-ajax.php', // URL to send the request to
//       method: 'POST', // HTTP method to use
//       data: {
//         action: 'filtrer_par_format',
//         format: selectedFormat
//       },
//       success: function(res) {
//         // Display the filtered photos
//         $('.galerie-container').html(res);
//       },
//       error: function(res) {
//         console.log('Error');
//       }
//     });
//   });
// });




// jQuery(document).ready(function($) {
//   // Add event listener to the change event of the category dropdown
//   $('.category-dropdown').on('change', function() {
//     var selectedCategory = $(this).val(); // Get the selected category

//     // Send an AJAX request to filter the photos by category
//     $.ajax({
//       url: 'wp-admin/admin-ajax.php', // URL to send the request to
//       method: 'POST', // HTTP method to use
//       data: {
//         action: 'filtrer_par_categorie',
//         cat_id: selectedCategory
//       },
//       success: function(res) {
//         // Display the filtered photos
//         $('.galerie-container').html(res);
//       },
//       error: function(res) {
//         console.log('Error');
//       }
//     });
//   });

//   // Add event listener to the change event of the format dropdown
//   $('.format-dropdown').on('change', function() {
//     var selectedFormat = $(this).val(); // Get the selected format

//     // Send an AJAX request to filter the photos by format
//     $.ajax({
//       url: 'wp-admin/admin-ajax.php', // URL to send the request to
//       method: 'POST', // HTTP method to use
//       data: {
//         action: 'filtrer_par_format',
//         format: selectedFormat
//       },
//       success: function(res) {
//         // Display the filtered photos
//         $('.galerie-container').html(res);
//       },
//       error: function(res) {
//         console.log('Error');
//       }
//     });
//   });
// });

