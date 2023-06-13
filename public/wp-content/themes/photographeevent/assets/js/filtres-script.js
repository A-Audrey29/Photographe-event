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

function ajaxRequest(filtreRésultat) {
  // Sélectionner l'élément avec l'id "categories" et récupérer la valeur de l'option sélectionnée
  const cat = $('#categories');
  const categorieSelection = cat.find('option:selected').val();

  // Sélectionner l'élément avec l'id "format" et récupérer la valeur de l'option sélectionnée
  const format = $('#format');
  const formatSelection = format.find('option:selected').val();

  // Sélectionner l'élément avec l'id "ordre" et récupérer la valeur de l'option sélectionnée
  const ordre = $('#ordre').find('option:selected').val();

  // Effectuer une requête AJAX
  $.ajax({
    type: 'POST', // Utiliser la méthode POST pour envoyer les données
    url: ajaxurl, // L'URL de l'endpoint AJAX
    dataType: 'html', // Spécifier le type de données attendu dans la réponse (HTML)
    data: {
      action: 'filtrer_par_categorie', // Utiliser le nom de l'action AJAX que vous souhaitez appeler
      cat_id: categorieSelection, // Envoyer l'ID de catégorie en tant que paramètre
      format: formatSelection, // Envoyer la sélection de format en tant que paramètre
      order: ordre // Envoyer l'ordre en tant que paramètre
    },
    success: function(resultat) {
      // Callback en cas de succès de la requête AJAX

      if (filtreRésultat) {
        // Si "filtreRésultat" est vrai, ajouter le résultat à la fin de l'élément avec la classe "galerie-container"
        $('.galerie-container').append(resultat);
      } else {
        // Sinon, remplacer le contenu de l'élément avec la classe "galerie-container" par le résultat
        $('.galerie-container').html(resultat);
      }
    },
    error: function(result) {
      // Callback en cas d'erreur lors de la requête AJAX
      console.warn(result); // Afficher l'erreur dans la console du navigateur
    }
  });
}







  
