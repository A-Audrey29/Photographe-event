<?php

/**
 * Template Name: template page accueil
 */
?>

<?php get_header(); ?>

<h1 class="nom-site"><?php the_title() ?></h1>
<!-- récupère contenu  -->
<?php the_content() ?>

<!-- hero -->
<?php
$images = get_field('nom_du_champ_de_galerie', false, false);
$random_image = $images[array_rand($images)];
?>

<div class="hero" style="background-image: url('<?php echo $random_image; ?>');">
  <!-- Votre contenu de héros ici -->
</div>



<?php get_footer(); ?>