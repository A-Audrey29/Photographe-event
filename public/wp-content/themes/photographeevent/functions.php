<?php

require_once('assets/inc/supports.php');
require_once('assets/inc/assets.php');
require_once('assets/inc/apparence.php');


function register_my_menus()
{
    register_nav_menus(
        array(
            'main' => __('Menu principal'),
            'footer' => __('Bas de page'),
        )
    );
}
add_action('after_setup_theme', 'register_my_menus');

// wp_nav_menu(array(
//     'theme_location' => 'main',
// ));



//déclaration des 2 emplacements des menu cf supports
// register_nav_menus(array(
//     'main' => 'Menu principal',
//     'footer' => 'Bas de page'
// ));

// intégration de l'item CONTACT dans le menu

// function add_last_nav_item($items)
// {
//     return $items .= '<li class="menu-item nav-item"><a href="#" id="myBtn" role="button" data-toggle="modal">CONTACT</a></li>';
// }
// add_filter('wp_nav_menu_items', 'add_last_nav_item');




//intégration mention tx " tous droits réservé "

function add_last_nav_item($items, $args)
{
    // Vérifiez si le menu correspond au menu principal
    if ($args->theme_location == 'footer') {
        $items .= '<li class="menu-item">TOUS DROITS RÉSERVÉS</li>';
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'add_last_nav_item', 10, 2);



// gestion des class : rajout de nav-item
function photographeevent_menu_class($classes)
{
    $classes[] = 'nav-item';
    return $classes;
}
add_filter('nav_menu_css_class', 'photographeevent_menu_class');


// gestion de la class des liens des items
function photographeevent_menu_link_class($attrs)
{
    $attrs['class'] = 'nav-link';
    return $attrs;
}
add_filter('nav_menu_link_attributes', 'photographeevent_menu_link_class');


// ajout des taxonomies

$terms = get_terms(array(
    'taxonomy'   => 'post_tag',
    'hide_empty' => false,
));





// requete ajax pour les filtres

function galerie_filtres($cat_id = 9, $format = 'paysage', $date = 'DESC')
{
    $args = array(
        'post_type' => 'photo',
        // 'post__not_in' => array(get_the_ID()),
        'cat' => $cat_id,
        'posts_per_page' => 12,
        'order' => $date,
        'meta_key' => 'format',
        'meta_value' => $format,
        'field' => 'slug'

    );
    $query = new WP_Query($args);
    // var_dump($query);
    // $response = '';
    // if ($query->have_posts()) {
    //     while ($query->have_posts()) : $query->the_post();
    //         $response .= get_template_part('parts/card', 'publication');
    //     endwhile;
    // } else {
    //     $response = '';
    // }
    // wp_reset_postdata();
    // echo $response;
    // exit;
}

if (isset($_POST['action']) && $_POST['action'] === 'filtrer_par_categorie') {
    // Récupérer la valeur de cat_id envoyée depuis la requête Ajax
    $catId = $_POST['cat_id'];

    // Appeler la fonction galerie_filtres avec la catégorie filtrée
    echo galerie_filtres($catId);

    // Terminer le script PHP
    exit();
}

// Hook pour connecter la fonction à la requête Ajax
add_action('wp_ajax_filtrer_photos_par_categorie', 'galerie_filtres');
add_action('wp_ajax_nopriv_filtrer_photos_par_categorie', 'galerie_filtres');




// requête pagination

function weichie_load_more()
{
    $ajaxposts = new WP_Query([
        'post_type' => 'photo',
        'posts_per_page' => 12,
        'orderby' => 'date',
        'order' => 'DESC',
        'paged' => $_POST['paged'],
    ]);

    $response = '';

    if ($ajaxposts->have_posts()) {
        while ($ajaxposts->have_posts()) : $ajaxposts->the_post();
            $response .= get_template_part('parts/card', 'publication');
        endwhile;
    } else {
        $response = '';
    }

    echo $response;
    exit;
}
add_action('wp_ajax_weichie_load_more', 'weichie_load_more');
add_action('wp_ajax_nopriv_weichie_load_more', 'weichie_load_more');
