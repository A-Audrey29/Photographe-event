<?php

/**
 * Template Name: template page accueil
 */
?>

<!-- hero -->

<?php get_header(); ?>
<div class="hero-container">
    <h1 class="nom-site"><?php the_title() ?></h1>

    <?php query_posts(
        array(
            'post_type' => 'photo',
            'showposts' => 1,
            'orderby' => 'rand',
            'terms' => 'paysage',
        )
    ); ?>
    <?php if (have_posts()) :
        while (have_posts()) :
            the_post(); ?>
            <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>"> <?php
                                                                                                endwhile;
                                                                                            endif; ?>
</div>
<!-- galerie -->

<?php get_footer(); ?>