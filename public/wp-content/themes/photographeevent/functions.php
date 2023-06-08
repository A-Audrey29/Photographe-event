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



// intégration mention tx " tous droits réservé "

// function ajouter_texte_menu_footer($items, $args)
// {
//     if ($args->theme_location == 'Bas de page') {
//         $texte = '<li>Tous droits réservés</li>';
//         $items .= $texte;
//     }
//     return $items;
// }
// add_filter('wp_nav_menu_items', 'ajouter_texte_menu_footer', 10, 2);



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






// ajout du prtefolio dans ACF
// function photographeevent_register_post_types()
// {

//     // CPT Portfolio
//     $labels = array(
//         'name' => 'Portfolio',
//         'all_items' => 'Toutes les photos',  // affiché dans le sous menu
//         'singular_name' => 'Photo',
//         'add_new_item' => 'Ajouter une photo',
//         'edit_item' => 'Modifier la photo',
//         'menu_name' => 'Portfolio'
//     );

//     $args = array(
//         'labels' => $labels,
//         'public' => true,
//         'show_in_rest' => true,
//         'has_archive' => true,
//         'supports' => array('title', 'editor', 'thumbnail'),
//         'menu_position' => 5,
//         'menu_icon' => 'dashicons-admin-customizer',
//     );

//     register_post_type('portfolio', $args);
// }
// add_action('init', 'photographeevent_register_post_types'); // Le hook init lance la fonction

function galerie_filtres($cat_id = 9, $date = 'DESC', $format = 'paysage')
{
    $args = array(
        'post_type' => 'photo',
        // 'post__not_in' => array(get_the_ID()),
        'cat' => $cat_id,
        'posts_per_page' => 12,
        'order' => $date,
        'meta_key' => 'format',
        'meta_value' => $format

    );
    $query = new WP_Query($args);
    var_dump($query);
}
