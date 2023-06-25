<?php

$thumbnail_id = get_post_thumbnail_id();
$thumbnail_url = wp_get_attachment_image_src($thumbnail_id, 'custom-size');

// Récupérer l'attribut alt de l'image
$thumbnail_alt = get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true);

// Récupérer le titre de l'article
$article_title = get_the_title();

// Récupérer le titre de l'article
$categories = get_terms(array(
    'taxonomy' => 'categories',
    'hide_empty' => false,
));

// var_dump($categories)

?>

<div class="galerie-photo">
    <div class="galerie-img size-img">
        <img id="img-fullscreen" class="img-hover" src="<?php echo $thumbnail_url[0]; ?>" alt="<?php echo $thumbnail_alt; ?>" title="<?php echo $article_title; ?>">
        <div class="galerie-hover-icon">
            <a href="<?php echo get_post_permalink(); ?>">
                <img class="icon-oeil" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_oeil.png" alt="Icône en forme d'oeil" />
            </a>
            <a href="#">
                <img class="icon-fullscreen" src="<?php echo get_template_directory_uri(); ?>/assets/images/fullscreen.png" alt="Icône de plein écran" />
            </a>


            <div class="galerie-img-info" data-date=<?php $post_date = get_the_date('Y');
                                                    echo $post_date; ?>>
                <p class="galerie-title"><?php echo $article_title; ?></p>
                <p class="galerie-cat"><?php echo the_terms(get_the_ID(), 'categories', false); ?></p>
            </div>
        </div>
    </div>
</div>