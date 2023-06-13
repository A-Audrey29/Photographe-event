<div class="lightbox active">
    <button class="lightbox-close"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/croix.png" alt="Croix de fermeture" /></button>
    <button class="lightbox-prev"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" /> </button>
    <button class="lightbox-next"><img class="#" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
    </button>
    <div>

    </div>
    <div class="lightbox-container">
        <img class="lightbox-image" src="" alt="" />

        <ul class="lightbox-photo-info">

            <li>
                <h2 class="lightbox-photo-titre"><?php echo get_field('titre'); ?></h2>
            </li>
            <div class="cat-annee">
                <li>
                    <p class="lightbox-categorie info-tx"><?php echo get_field('categorie'); ?></p>
                </li>
                <li>
                    <p class="annee info-tx"><?php echo get_field('annee'); ?></p>
                </li>
            </div>
        </ul>
    </div>
</div>

<div class="more-fleches">
    <?php if (!empty($prevPhoto)) {
        $prevThumbnail = get_the_post_thumbnail_url($prevPhoto->ID);
        $prevLink = get_permalink($prevPhoto); ?>
        <a href="<?php echo $prevLink; ?>">
            <img class="fleche fleche_gauche" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" />
        </a>
    <?php } else { ?>
        <p></p>
    <?php }
    if (!empty($nextPhoto)) {
        $nextThumbnail = get_the_post_thumbnail_url($nextPhoto->ID);
        $nextLink = get_permalink($nextPhoto); ?>
        <a href="<?php echo $nextLink; ?>">
            <img class="fleche fleche_droite" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
        </a>
    <?php } else { ?>
        <p></p>
    <?php } ?>
</div>
<div class="photo-hover-container">
    <div class="photo-hover">
        <?php
        if (isset($prevThumbnail) && !empty($prevThumbnail)) {
            // Afficher l'image suivante
            echo '<img class="prev-photo" src="' . $prevThumbnail . '" alt="affichage de la photo précédente" />';
        } else {
            // Afficher un message d'erreur ou une image par défaut
            echo '<p></p>';
        }
        ?>
    </div>