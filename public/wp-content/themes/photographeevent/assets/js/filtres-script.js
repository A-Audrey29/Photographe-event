// function filtrerParCategorie(catId) {
//     let xhr = new XMLHttpRequest();
//     const url = "/wp-admin/admin-ajax.php";

//     let data = new FormData();
//     data.append('action', 'filtrer_photos_par_categorie');
//     data.append('cat_id', catId);

//     xhr.open("POST", url, true);

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             let response = xhr.responseText;
//             let galeriePhotosElement = document.getElementById("galerie-photos");
// galeriePhotosElement.innerHTML = response;
//         }
//     };

//     xhr.send(data);
// }


//   const filterBtns = document.querySelectorAll('.filter-btn');
//   const gallery = document.querySelector('.gallery');
//   const loader = document.querySelector('.loader');
//   let catId = 0;
  
//   filterBtns.forEach(btn => {
//     btn.addEventListener('click', function() {
//       catId = this.dataset.catId;
//       filterPosts();
//     });
//   });
  
//   function filterPosts() {
//     loader.style.display = 'block';
//     gallery.innerHTML = '';
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', ajaxurl, true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.onload = function() {
//       if (this.status === 200) {
//         gallery.innerHTML = this.responseText;
//         loader.style.display = 'none';
//       }
//     }
//     xhr.send(`action=galerie_filtres&cat_id=${catId}`);
//   }


  //cours OC

//   document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('#ajax_call').addEventListener('click', function() {
//       let formData = new FormData();
//       formData.append('action', 'request_recettes');
   
   
//       fetch(cookinfamily_js.ajax_url, {
//         method: 'POST',
//         body: formData,
//       }).then(function(response) {
//         if (!response.ok) {
//           throw new Error('Network response error.');
//         }
   
   
//         return response.json();
//       }).then(function(data) {
//         data.posts.forEach(function(post) {
//           document.querySelector('#ajax_return').insertAdjacentHTML('beforeend', '<div class="col-12 mb-5">' + post.post_title + '</div>');
//         });
//       }).catch(function(error) {
//         console.error('There was a problem with the fetch operation: ', error);
//       });
//     });
//    });


// function fetchResults() {
//     // Récupère les valeurs des filtres sélectionnés
//     let category = $('#category-select').val();
//     let format = $('#format-select').val();
//     let date = $('#date-select').val();
  
//     // Effectue la requête AJAX
//     $.ajax({
//       type: 'POST',
//       url: '/wp-admin/admin-ajax.php', // L'URL vers le fichier "admin-ajax.php" de WordPress
//       data: {
//         action: 'fetch_results',
//         category: category,
//         format: format,
//         date: date
//       },
//       success: function(response) {
//         // Traitement de la réponse, par exemple, mettre à jour la section des résultats avec les nouvelles données
//         $('.results').html(response);
//       },
//       error: function(xhr, status, error) {
//         console.error(error);
//         console.log(category);
//       }
//     });
//   }

// let filtres = document.querySelector('.galerie-photo')
// let xhr = new XMLHttpRequest()

// xhr.onreadystatechange = function() {
//     console.log(this)
//   if (this.readyState == 4 && this.status == 200){
//     filtres.innerHTML = this.responseText


//   }
// }

// // on envoie la requete
// xhr. open('GET', '/wp-admin/admin-ajax.php', true)
// xhr.send()


// $(document).on('click', 'a.ajax', function() {
//   const catId = $(this).data('cat-id');
//   $.ajax({
//     url: '/wp-admin/admin-ajax.php', // Use the global variable ajaxurl to point to the admin-ajax.php file
//     method: 'POST',
//     data: {
//       action: 'galerie_filtres', // Use the name of the AJAX action that you want to call
//       cat_id: catId // Send the category ID as a parameter
//     },
//     success: function(data) {
//       // Insert the filtered posts into the gallery element
//       $('.gallery').html(data);
//     },
//     error: function(data) {
//       console.log('Error');
//     }
//   });
// });

function ajaxRequest(chargerPlus) {
  const cat = $('#categories');
  const categorieSelection = cat.find('option:selected').val();
  const format = $('#format');
  const formatSelection = format.find('option:selected').val();
  const ordre = $('#ordre').find('option:selected').val();
  $.ajax({
    type: 'POST',
    url: ajaxurl,
    dataType: 'html',
    data: {
      action: 'filtrer_par_categorie', // Use the name of the AJAX action that you want to call
      cat_id: categorieSelection, // Send the category ID as a parameter
      format: formatSelection,
      order: ordre
    },
    success: function(resultat) {
      if (chargerPlus) {
        $('.galerie-container').append(resultat);
      } else {
        $('.galerie-container').html(resultat);
      }
    },
    error: function(result) {
      console.warn(result);
    }
  });
}






  
