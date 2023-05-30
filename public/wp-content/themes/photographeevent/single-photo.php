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
		<button class="btn-CTA">CONTACT</button>
	</div>
	<div class="more-fleches">
		<img class="fleche fleche_gauche" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" />
		<img class="fleche fleche_gauche" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
	</div>
</div>

<div class="aimez-aussi">
	<h3 class="aimez-aussi-titre">VOUS AIMEREZ AUSSI</h3>

	<div class="aimez-aussi-photos part">
		<div>
			<img class="aimez-aussi-img" src="<?php echo get_field('photo')['url']; ?>" alt="#" />
		</div>
		<div>
			<img class="aimez-aussi-img" src="<?php echo get_field('photo')['url']; ?>" alt="#" />
		</div>
	</div>
</div>

<div class="aimez-aussi-btn-conatainer">
	<button class="btn-CTA aimez-aussi-btn">Toutes les photos</button>
</div>

<?php get_footer(); ?>