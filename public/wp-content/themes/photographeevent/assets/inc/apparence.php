<?php

// ajout du logo via le customier
add_action('customize_register', function (WP_Customize_Manager $manager) {

    $manager->add_section('photographeevent_appearance', [
        'title' => __('Theme appearance')
    ]);

    $manager->add_setting('logo');

    $manager->add_control(new WP_Customize_Control($manager, 'logo', [
        'label' => __('logo', 'photographeevent'),
        'section' => 'photographeevent_appearance'
    ]));
});


// fonction pour afficher les photos page d'accueil et "vous aimeriez aussi" de la single

function galeriePhotos()
{
    if (have_posts()) :
        while (have_posts()) :
            the_post();


            // Récupérer l'image mise en avant de l'article
            add_image_size('custom-size', 500, 500, true);
            $thumbnail_id = get_post_thumbnail_id();
            $thumbnail_url = wp_get_attachment_image_src($thumbnail_id, 'custom-size');

            // Récupérer l'attribut alt de l'image
            $thumbnail_alt = get_post_meta(get_post_thumbnail_id(), '_wp_attachment_image_alt', true);

            // Récupérer le titre de l'article
            $article_title = get_the_title();
?>
            <div class="galerie-photo">
                <div class="galerie-img">
                    <img id="img-fullscreen" src="<?php echo $thumbnail_url[0]; ?>" alt="<?php echo $thumbnail_alt; ?>" title="<?php echo $article_title; ?>">
                    <div class="galerie-hover-icon">
                        <a href="<?php echo get_post_permalink(); ?>">
                            <img id="icon-oeil" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_oeil.png" alt="Icône en forme d'oeil" />
                        </a>
                        <a href="#">
                            <img id="icon-fullscreen" src="<?php echo get_template_directory_uri(); ?>/assets/images/fullscreen.png" alt="Icône de plein écran" />
                        </a>
                    </div>

                    <div class="galerie-img-info">
                        <p><?php echo $article_title; ?></p>
                        <?php
                        // Récupérer les catégories de l'article
                        $categories = get_the_category();

                        // Parcourir les catégories et afficher leurs noms
                        if (!empty($categories)) {
                            foreach ($categories as $category) {
                                echo '<p class="galerie-cat">' . $category->name . '</p>';
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
<?php
        endwhile;
    endif;
}
// Utilisation de la fonction pour afficher les articles
galeriePhotos();
?>