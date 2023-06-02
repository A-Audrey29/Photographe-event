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

<section class="galerie">
    <?php query_posts(
        array(
            'post_type' => 'photo',
            'orderby' => 'date',
            'order' => 'DESC',
            'posts_per_page' => 6,
            'paged' => 1
        )
    ); ?>


    <div class="galerie-container">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();

                // Récupérer les catégories de l'article
                $categories = get_the_category();

                // Parcourir les catégories et afficher leurs noms
                if (!empty($categories)) {
                    foreach ($categories as $category) {
                        echo '<div class="galerie-cat">' . $category->name . '</div>';
                    }
                }

                // Récupérer l'image mise en avant de l'article
                $thumbnail_url = get_the_post_thumbnail_url();

                // Récupérer l'attribut alt de l'image
                $thumbnail_alt = get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true);

                // Récupérer le titre de l'article
                $article_title = get_the_title();

                // Afficher l'image avec l'attribut alt, le titre et la catégorie
        ?>
                <div class="galerie-img-titre">
                    <h3><?php echo $article_title; ?></h3>
                </div>
                <div class="galerie-img">
                    <img src="<?php echo $thumbnail_url; ?>" alt="<?php echo $thumbnail_alt; ?>" title="<?php echo $article_title; ?>">
                </div>
        <?php
            endwhile;
        endif;
        ?>

</section>
<?php get_footer(); ?>