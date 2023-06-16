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


// fonction pour afficher les photos page d'accueil et "vous aimeriez aussi" de la single

function galeriePhotos($ajaxposts)
{
    while ($ajaxposts->have_posts()) :
        $ajaxposts->the_post();

        // Récupérer l'image mise en avant de l'article
        add_image_size('custom-size', 500, 500, true);

        get_template_part('template-parts/content', 'image');

    endwhile;
}


// Utilisation de la fonction pour afficher les articles
// galeriePhotos();



// requete ajax pour les filtres
// function filtrer_photos()
// {
//     $cat = isset($_POST['categorie']) ? sanitize_text_field($_POST['categorie']) : '';
//     $format = isset($_POST['format']) ? sanitize_text_field($_POST['format']) : '';
//     $date = isset($_POST['date']) ? sanitize_text_field($_POST['date']) : '';

//     $args = array(
//         'post_type' => 'photo',
//         'posts_per_page' => 8,
//         'paged' => 1,
//         'tax_query' => array(
//             'relation' => 'AND',
//             array(
//                 'taxonomy' => 'categorie',
//                 'field' => 'slug',
//                 'terms' => ($cat == -1 ? get_terms('categorie', array('fields' => 'slugs')) : $cat)
//             ),
//             array(
//                 'taxonomy' => 'format',
//                 'field' => 'slug',
//                 'terms' => ($format == -1 ? get_terms('format', array('fields' => 'slugs')) : $format)
//             )
//         ),
//         'orderby' => ($date === 'anciens') ? 'date' : 'date',
//         'order' => ($date === 'anciens') ? 'ASC' : 'DESC',
//     );

//     $ajaxfilter = new WP_Query($args);

//     if ($ajaxfilter->have_posts()) {
//         ob_start();

//         while ($ajaxfilter->have_posts()) {
//             $ajaxfilter->the_post();
// 

//         }

//         wp_reset_postdata(); // Réinitialise les données de la publication
//         $response = ob_get_clean(); // Récupère le contenu de la mise en mémoire tampon
//     } else {
//         $response = '';
//     }

//     echo $response;
//     exit;
// }

// add_action('wp_ajax_filtrer_photos', 'filtrer_photos');
// add_action('wp_ajax_nopriv_filtrer_photos', 'filtrer_photos');

function filtrer_photos()
{
    $requeteAjax = new WP_Query(
        array(
            'post_type' => 'photos',
            'orderby' => 'date',
            'order' => $_POST['orderDirection'],
            'posts_per_page' => 4,
            'paged' => $_POST['page'],
            'tax_query' =>
            array(
                'relation' => 'AND',
                $_POST['categories'] != "all" ?
                    array(
                        'taxonomy' => $_POST['categories'],
                        'field' => 'slug',
                        'terms' => $_POST['categories'],
                    )
                    : '',
                $_POST['formats'] != "all" ?
                    array(
                        'taxonomy' => $_POST['formats'],
                        'field' => 'slug',
                        'terms' => $_POST['formats'],
                    )
                    : '',
            )
        )
    );

    // Processus pour renvoyer la réponse au format JSON
    $photos = array();

    while ($requeteAjax->have_posts()) {
        $requeteAjax->the_post();
        // Collecte des données de chaque photo
        $photo_data = array(
            'id' => get_the_ID(),
            'title' => get_the_title(),
            // Ajoute d'autres données que tu souhaites renvoyer
        );
    }
    $photos[] = $photo_data;
    // Vérifier les données récupérées
    var_dump($photos);

    // Vérifier si la requête renvoie des résultats
    var_dump($requeteAjax->have_posts());
    wp_reset_postdata(); // Réinitialise les données des publications

    echo json_encode($photos); // Renvoie la réponse au format JSON

    wp_die(); // Termine l'exécution correctement
}
add_action('wp_ajax_nopriv_filtrer_photos', 'filtrer_photos');
add_action('wp_ajax_filtrer_photos', 'filtrer_photos');


function galerie_filtres($cat_id = 0, $format = '', $date = 'DESC')
{
    $args = array(
        'post_type' => 'photo',
        'posts_per_page' => 2,
        'order' => $date,
        'tax_query' => array(
            'relation' => 'AND',
            array(
                'taxonomy' => 'categories', // Remplacez 'categories' par le slug de la taxonomie des catégories
                'field' => 'term_id',
                'terms' => $cat_id,
            ),
            array(
                'taxonomy' => 'formats', // Remplacez 'formats' par le slug de la taxonomie des formats
                'field' => 'slug',
                'terms' => $format,
            ),
        ),
    );
    $query = new WP_Query($args);
    return $query;
}

function filtrer_photos_callback()
{
    $catSlug = $_POST['cat_slug'];
    $formatSlug = $_POST['format_slug'];
    $dateOrder = $_POST['date_order'];

    // Appeler la fonction galerie_filtres avec les paramètres appropriés
    $query = galerie_filtres($catSlug, $formatSlug, $dateOrder);

    // Utilisez la même fonction de rendu que celle utilisée dans la section de la galerie
    ob_start(); // Démarre la mise en mémoire tampon de sortie
    galeriePhotos($query);
    $response = ob_get_clean(); // Récupère la sortie mise en mémoire tampon et la nettoie

    echo $response; // Retourne la réponse au client

    wp_die(); // Ajoutez cette ligne pour terminer l'exécution correctement
}

add_action('wp_ajax_filtrer_photos', 'filtrer_photos_callback');
add_action('wp_ajax_nopriv_filtrer_photos', 'filtrer_photos_callback');


// function galerie_filtres($cat_id = 0, $format = '', $date = 'DESC')
// {
//     $args = array(
//         'post_type' => 'photo',
//         'posts_per_page' => 2,
//         'order' => $date,
//         'tax_query' => array(
//             'relation' => 'AND',
//             array(
//                 'taxonomy' => 'categories', // Remplacez 'categorie' par le slug de la taxonomie des catégories
//                 'field' => 'term_id',
//                 'terms' => $cat_id,
//             ),
//             array(
//                 'taxonomy' => 'formats', // Remplacez 'format' par le slug de la taxonomie des formats
//                 'field' => 'slug',
//                 'terms' => $format,
//             ),
//         ),
//     );
//     $query = new WP_Query($args);
// }
// add_action('wp_ajax_filtrer_photos', 'filtrer_photos_callback');
// add_action('wp_ajax_nopriv_filtrer_photos', 'filtrer_photos_callback');



// function filtrer_photos_callback()
// {
//     $catSlug = $_POST['catSlug'];
//     $formatSlug = $_POST['formatSlug'];
//     $dateOrder = $_POST['dateOrder'];

//     // Appeler la fonction galerie_filtres avec les paramètres appropriés
//     galerie_filtres($catSlug, $formatSlug, $dateOrder);

//     // Utilisez la même fonction de rendu que celle utilisée dans la section de la galerie
//     galeriePhotos($query, false);

//     exit;
// }
// add_action('wp_ajax_filtrer_photos', 'filtrer_photos_callback');
// add_action('wp_ajax_nopriv_filtrer_photos', 'filtrer_photos_callback');










// function galerie_filtres($cat_id = 9, $format = 'paysage', $date = 'DESC')
// {
//     $args = array(
//         'post_type' => 'photo',
//         'cat' => $cat_id,
//         'posts_per_page' => 8,
//         'order' => $date,
//         'meta_query' => array(
//             array(
//                 'key' => 'formats',
//                 'value' => $format,
//                 'compare' => '='
//             )
//         )
//     );
//     $query = new WP_Query($args);

//     ob_start(); // Démarrer la mise en tampon de sortie

//     if ($query->have_posts()) {
//         while ($query->have_posts()) {
//             $query->the_post();

//             // Afficher les photos ici
//             get_template_part('template-parts/content', 'image');
//         }
//     }

//     $content = ob_get_clean(); // Récupérer le contenu mis en tampon

//     return $content;
// }

// // filtre par catégorie

// add_action('wp_ajax_filtrer_par_categorie', 'filtrer_par_categorie');
// add_action('wp_ajax_nopriv_filtrer_par_categorie', 'filtrer_par_categorie');

// function filtrer_par_categorie()
// {
//     if (isset($_POST['cat_id'])) {
//         $catId = $_POST['cat_id'];

//         // Appeler la fonction galerie_filtres avec la catégorie filtrée
//         $filteredContent = galerie_filtres($catId);

//         // Renvoyer le contenu filtré en tant que réponse Ajax
//         echo $filteredContent;
//     }

//     // Terminer le script PHP
//     exit();
// }

// // filtre par format

// add_action('wp_ajax_filtrer_par_format', 'filtrer_par_format');
// add_action('wp_ajax_nopriv_filtrer_par_format', 'filtrer_par_format');

// function filtrer_par_format()
// {
//     if (isset($_POST['formats'])) {
//         $format = $_POST['formats'];

//         // Appeler la fonction galerie_filtres avec le format filtré
//         $filteredContent = galerie_filtres(9, $format);

//         // Renvoyer le contenu filtré en tant que réponse Ajax
//         echo $filteredContent;
//     }

//     // Terminer le script PHP
//     exit();
// }





// function galerie_filtres($cat_id = 9, $format = 'paysage', $date = 'DESC')
// {
//     $args = array(
//         'post_type' => 'photo',
//         // 'post__not_in' => array(get_the_ID()),
//         'cat' => $cat_id,
//         'posts_per_page' => 2,
//         'order' => $date,
//         'meta_key' => 'format',
//         'meta_value' => $format,
//         'field' => 'slug'

//     );
//     $query = new WP_Query($args);
//     // var_dump($query);

// }

// if (isset($_POST['action']) && $_POST['action'] === 'filtrer_par_categorie') {
//     // Récupérer la valeur de cat_id envoyée depuis la requête Ajax
//     $catId = $_POST['cat_id'];

//     // Appeler la fonction galerie_filtres avec la catégorie filtrée
//     echo galerie_filtres($catId);

//     // Terminer le script PHP
//     exit();
// }

// // Hook pour connecter la fonction à la requête Ajax
// add_action('wp_ajax_filtrer_photos_par_categorie', 'galerie_filtres');
// add_action('wp_ajax_nopriv_filtrer_photos_par_categorie', 'galerie_filtres');





// requête pagination

function weichie_load_more()
{
    $paged = $_POST['paged']; // Récupère la valeur de 'paged' depuis la requête Ajax

    // Ajouter un code de débogage pour afficher la valeur de 'paged'
    // error_log('$_POST["paged"] value: ' . $paged);

    $ajaxposts = new WP_Query([
        'post_type' => 'photo',
        'posts_per_page' => 4,
        'paged' => $paged,
        'order' => 'DESC',
        'orderby' => ['date' => 'DESC', 'ID' => 'ASC']
    ]);

    $response = '';
    // var_dump($ajaxposts->have_posts());

    if ($ajaxposts->have_posts()) {
        while ($ajaxposts->have_posts()) : $ajaxposts->the_post();
            $response .=  get_template_part('template-parts/content', 'image');
        endwhile;
    } else {
        $response = '';
        // var_dump($response);
    }

    echo $response;
    exit;
}
add_action('wp_ajax_weichie_load_more', 'weichie_load_more');
add_action('wp_ajax_nopriv_weichie_load_more', 'weichie_load_more');


function weichie_disable_ajax_cache()
{
    if (defined('DOING_AJAX') && DOING_AJAX) {
        // Désactiver la mise en cache des requêtes Ajax
        define('DONOTCACHEPAGE', true);
    }
}
add_action('init', 'weichie_disable_ajax_cache');
