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

    <div class="filtres-container">
        <!-- récupère les catégories -->

        <?php function affichageCat($nomTaxonomie)
        {
            if ($terms = get_terms(array(
                'taxonomy' => $nomTaxonomie,
                'orderby' => 'name'
            ))) {
                foreach ($terms as $term) {
                    echo '<option class="js-filter-item" value="' . $term->slug . '">' . $term->name . '</option>';
                }
            }
        }

        galerie_filtres(); ?>

        <div class="filtres">

            <!-- categories -->

            <div class="filtres-cat colonne">
                <label for="category-select">Catégories</label>
                <!-- <select id="category-select"> -->
                <!-- <option value="all" hidden></option> -->
                <!-- <option value="all">Toutes les catégories</option> -->
                <?php
                // Récupérer les catégories
                $categories = get_categories();

                // Vérifier s'il y a des catégories
                if ($categories) {
                    $select_options = '<option value="">Sélectionner une catégorie</option>';

                    foreach ($categories as $category) {
                        $select_options .= '<option value="' . $category->term_id . '">' . $category->name . '</option>';
                    }

                    // Afficher le menu déroulant des catégories
                    wp_dropdown_categories(array(
                        'show_option_none' => ' ',
                        'option_none_value' => '',
                        'taxonomy' => 'category',
                        'name' => 'category-dropdown', // Nom du champ de sélection
                        // 'orderby' => 'name',
                        'selected' => false, // Catégorie sélectionnée par défaut
                        'echo' => true,
                        'class' => 'category-dropdown' // Classe CSS facultative
                    ));
                }
                ?>
                <?php galerie_filtres('categories'); ?>
                </select>

            </div>

            <!-- formats -->

            <div class="filtre-format colonne">

                <label for="format-select">Formats</label>
                <select id="format-select">
                    <option value="all" hidden></option>
                    <option value="all">Tous les formats</option>
                    <?php
                    $formats = get_terms(array(
                        "taxonomy" => "format",
                        "hide_empty" => false,
                    ));
                    foreach ($formats as $format) {
                        echo '<option value="' . $format->slug . '">' . $format->name . '</option>';
                    }
                    ?>
                    <?php galerie_filtres('format'); ?>
                </select>

            </div>

        </div>

        <!-- tri -->

        <div class="filtre-tri colonne">

            <label for="date-select">Trier par</label>
            <select id="date-select">
                <option value="DESC">Nouveautés</option>
                <option value="ASC">Les plus anciennes</option>
            </select>
        </div>

    </div>
    </div>

    <!-- affichage des images  -->

    <div class="galerie-container">
        <?php $galerie = query_posts(
            array(
                'post_type' => 'photo',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => 12,
                'paged' => 1
            )
        );

        galeriePhotos($galerie, false);
        ?>

    </div>

    <!-- pagination -->

    <?php
    $publications = new WP_Query([
        'post_type' => 'photos',
        'posts_per_page' => 12,
        'orderby' => 'date',
        'order' => 'DESC',
        'paged' => 1,
    ]);
    ?>

    <?php if ($publications->have_posts()) : ?>
        <ul class="publication-list">
            <?php
            while ($publications->have_posts()) : $publications->the_post();
                get_template_part('parts/card', 'photos');
            endwhile;
            ?>
        </ul>
    <?php endif; ?>
    <?php wp_reset_postdata(); ?>

    <div class="galerie-btn-container">
        <a id="charger-plus" href="#!"><button class="galerie-btn">Charger plus</button></a>
    </div>
</section>

<?php get_footer(); ?>