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



<div class="accueil_aleatoire_photo">
    <?php query_posts(
        array(
            'post_type' => 'photo',
            'showposts' => 1,
            'orderby' => 'rand',
        )
    ); ?>
    <?php if (have_posts()) :
        while (have_posts()) :
            the_post(); ?>
            <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>" <?php
                                                                                            endwhile;
                                                                                        endif; ?> <?php get_footer(); ?>