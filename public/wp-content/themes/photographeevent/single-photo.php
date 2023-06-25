<?php

/**
 * The template for displaying all single posts
 */
?>

<?php get_header(); ?>

<!-- section info de la photo et la photo -->

<?php
/* Start the Loop */
while (have_posts()) :
	the_post();

	get_template_part('template-parts/content-photo');

endwhile; // End of the loop.
?>

<!-- section "cette photo vous intéresse ?" -->

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

<div class="galerie background">

	<h3 class="aimez-aussi-titre">VOUS AIMEREZ AUSSI</h3>
	<div class="galerie-container">
		<?php
		$categorie = strip_tags(get_the_term_list($post->ID, 'categories'));
		$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
		$morePhotos = new WP_Query(array(
			'post_type' => 'photo',
			'post__not_in' => array(get_the_ID()),
			'orderby' => 'date',
			'order' => 'DESC',
			'posts_per_page' => 2,
			'paged' => $paged,
			'tax_query' => array(
				array(
					'taxonomy' => 'categories',
					'field' => 'slug',
					'terms' => $categorie,
				),
			),

		));

		$nombreImagesSimilaires = $morePhotos->post_count;
		if ($nombreImagesSimilaires > 0) {
			galeriePhotos($morePhotos, false);
		} else {
			echo '<p class="texte">Il n\'y a pas encore d\'autres photos à afficher dans cette catégorie.</p>';
		}
		?>
	</div>

	<div class="galerie-container">

	</div>
</div>

<div class="aimez-aussi-btn-conatainer">
	<a href="<?php echo home_url('/'); ?>">
		<button class="btn-CTA aimez-aussi-btn">Toutes les photos</button>
	</a>
</div>

<?php get_footer(); ?>