<?php

/**
 * Template Name: template page accueil
 */
?>

<?php get_header(); ?>

<h1 class="nom-site"><?php the_title() ?></h1>
<!-- récupère contenu  -->
<?php the_content() ?>

<!-- hero -->


<?php
$args = array(
    'post_type'      => 'photos',
    'tax_query'      => array(
        // array(
        //     'taxonomy' => 'format',
        //     'field'    => 'slug',
        //     'terms'    => 'paysage',
        // ),
    ),
    'orderby'        => 'rand',
    'posts_per_page' => 1,
);

$hero = get_posts($args);

if ($hero) {
    $image = $hero[0];
    $image_url = get_the_post_thumbnail_url($image->ID);

    echo '<img class="hero_img" src="';
    echo the_post_thumbnail_url();
    echo '" />';
}
?>


<!-- galerie -->






<?php get_footer(); ?>