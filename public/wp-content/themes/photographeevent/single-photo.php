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
	<div class="more-slider">
		<?php
		$prevPhoto = get_previous_post();
		$nextPhoto = get_next_post();
		// var_dump($prevPhoto);
		?>

		<div class="more-fleches">
			<?php if (!empty($prevPhoto)) {
				$prevThumbnail = get_the_post_thumbnail_url($prevPhoto->ID);
				$prevLink = get_permalink($prevPhoto); ?>
				<a href="<?php echo $prevLink; ?>">
					<img class="fleche fleche_gauche" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" />
				</a>
			<?php } else { ?>
				<img style="opacity:0; cursor: auto;" class="fleche " src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_gauche.png" alt="Flèche vers la gauche" />
			<?php }
			if (!empty($nextPhoto)) {
				$nextThumbnail = get_the_post_thumbnail_url($nextPhoto->ID);
				$nextLink = get_permalink($nextPhoto); ?>
				<a href="<?php echo $nextLink; ?>">
					<img class="fleche fleche_droite" src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
				</a>
			<?php } else { ?>
				<img style="opacity:0; cursor: auto;" class="fleche " src="<?php echo get_template_directory_uri(); ?>/assets/images/fleche_droite.png" alt="Flèche vers la droite" />
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
			<div class="photo-hover">
				<?php
				if (isset($nextThumbnail) && !empty($nextThumbnail)) {
					// Afficher l'image suivante
					echo '<img class="next-photo" src="' . $nextThumbnail . '" alt="affichage de la photo suivante" />';
				} else {
					// Afficher un message d'erreur ou une image par défaut
					echo '<p></p>';
				}
				?> </div>
		</div>
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
					<?php galeriePhotos($args, false); ?>
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