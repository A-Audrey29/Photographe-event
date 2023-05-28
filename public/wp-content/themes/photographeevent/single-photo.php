<?php

/**
 * The template for displaying all single posts
 */
?>

<?php get_header(); ?>

<?php
/* Start the Loop */
while (have_posts()) :
	the_post();

	get_template_part('template-parts/content-photo');

endwhile; // End of the loop.
?>

<div class="more">
	<div class="more-tx-btn">
		<p class="more-tx">Cette photo vous intéresse ?</p>
		<button class="btn-contact">CONTACT</button>
	</div>
	<div class="more-feches">
		<img class="fleche fleche_gauche" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" />
		<img class="fleche fleche_gauche" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
	</div>
</div>

<div class="aimez-aussi">
	<h3 class="aimer-aussi-titre">VOUS AIMEREZ AUSSI</h3>

	<div class="photo-aimez-aussi-container part">
		<img class="photo-aimez-aussi" src="<?php echo get_field('photo')['url']; ?>" alt="#" />
		<img class="photo-aimez-aussi" src="<?php echo get_field('photo')['url']; ?>" alt="#" />
	</div>
</div>

<div class="toutes-photos">
	<button>Toutes les photos</button>
</div>

<?php get_footer(); ?>