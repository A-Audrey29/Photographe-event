<div class="lightbox active">
    <button class="lightbox-close"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/croix.png" alt="Croix de fermeture" /></button>
    <button class="lightbox-prev"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" /> </button>
    <button class="lightbox-next"><img class="#" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
    </button>
    <div class="lightbox-container">
        <?php if (has_post_thumbnail()) : ?>
            <?php
            $imageUrl = get_the_post_thumbnail_url(); ?>
            <a href="<?php echo $imageUrl; ?>" onclick="return !window.open(this.href, '','top=50 left=100 width=800 height=600')">
                <?php the_post_thumbnail(); ?>
            </a>

        <?php endif; ?>
        <?php the_content(); ?>
    </div>
</div>