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

<div class="galerie">

	<h3 class="aimez-aussi-titre">VOUS AIMEREZ AUSSI</h3>

	<div class="galerie-container">

		<?php
		$cat_id = get_the_category()[0]->term_id;
		$args = array(
			'post_type' => 'photo',
			'post__not_in' => array(get_the_ID()),
			'cat' => $cat_id,
			'posts_per_page' => 2,
		);
		$query = new WP_Query($args);

		while ($query->have_posts()) :
			$query->the_post();
			$link = get_permalink();
			$title = get_the_title();
			$date = get_the_date();

			if (has_post_thumbnail()) : ?>
				<div class="galerie-img">
					<!-- <img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>" class="post-thumbnail" /> -->
					<?php affichageGalerie($args, false); ?>
				</div>
			<?php endif;
			the_content(); ?>
		<?php endwhile;
		?>
	</div>
</div>

<div class="aimez-aussi-btn-conatainer">
	<button class="btn-CTA aimez-aussi-btn">Toutes les photos</button>
</div>

<?php get_footer(); ?>