// pagination

jQuery(document).ready(function($) {
  // Add event listener to the click of links with class "ajax"
  $('#load-more').on('click', function(event) {
    let currentIndex = parseInt($('#load-more').attr('data-current-index'));

    event.preventDefault(); // Prevent the default behavior of the link
    // Send an AJAX request to the server
    $.ajax({
      url: 'wp-admin/admin-ajax.php', // URL to send the request to
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
});


//filtres









  
