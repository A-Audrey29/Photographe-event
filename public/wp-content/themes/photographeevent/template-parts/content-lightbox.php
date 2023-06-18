<div class="lightbox active">
    <button class="lightbox-close"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/croix.png" alt="Croix de fermeture" /></button>
    <button class="lightbox-prev"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" /> </button>
    <button class="lightbox-next"><img class="#" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
    </button>

    <!-- <div class="lightbox-container"> -->
    <!-- <img class="lightbox-image" src="" alt="" /> -->

    <div class="lightbox-container">
        <!-- <img class="lightbox-image" src="" alt="" /> -->
        <?php if (has_post_thumbnail()) : ?>
            <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>" class="post-thumbnail" />
            <div class="lightbox-photo-info">
                <h2 class="lightbox-titre"><?php echo get_field('titre'); ?></h2>
                <p class="lightbox-cat"><?php echo get_field('categorie'); ?></p>
                <p class="lightbox-annee"><?php echo get_field('annee'); ?></p>
            </div>
        <?php endif; ?>
        <?php the_content(); ?>

    </div>