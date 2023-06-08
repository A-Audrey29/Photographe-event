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
            // 'terms' => 'paysage',
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

<section class="galerie">


    <!-- filtres -->

    <?php galerie_filtres(); ?>

    <div class="filtres-container">

        <div class="filtres">

        </div>

        <div class="tri">


        </div>


    </div>

    <!-- affichage des images  -->

    <div class="galerie-container">
        <?php $galerie = query_posts(
            array(
                'post_type' => 'photo',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => 6,
                'paged' => 1
            )
        );

        galeriePhotos($galerie, false);
        ?>

    </div>

    <div class="galerie-btn-container">
        <button class="galerie-btn"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/appareil_photo.png" alt="icon d'un appareil photo"/>Charger plus</button>
    </div>
</section>

<?php get_footer(); ?>