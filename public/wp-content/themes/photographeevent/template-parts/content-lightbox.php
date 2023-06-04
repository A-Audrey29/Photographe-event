<!-- cachera le site en arrière plan -->
<div class="lightbox" id="lightbox-container">
    <button class="lightbox-close" type="button">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/croix.png" alt="Croix de fermeture" />
    </button>
    <button class="lightbox-next">
        <img class="#" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" />
    </button>
    <button class="lightbox-prev">
        <img class="#" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
    </button>
    <div class="lightbox-img">
        <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>" />

    </div>