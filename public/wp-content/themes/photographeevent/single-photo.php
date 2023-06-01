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

		<?php
		// Récupérer les catégories associées à l'article en cours
		$cat_id = get_the_category();

		// Vérifier s'il y a des catégories
		if ($cat_id) {
			// Récupérer le premier ID de catégorie
			$cat_id = get_the_category()[0]->term_id;

			// Paramètres de la requête WP_Query
			$args = array(
				'post_type' => 'photos',
				'cat' => $cat_id,
				'posts_per_page' => 2,
			);

			// Exécuter la requête WP_Query
			$query = new WP_Query($args);

			// Vérifier s'il y a des images dans la catégorie
			if ($query->have_posts()) {
				// Boucle pour afficher les images
				while ($query->have_posts()) {
					$query->the_post();
					$link = get_permalink();
					$title = get_the_title();
					$date = get_the_date();
				} ?>
				<a href="<?php the_post_thumbnail(); ?>">

			<?php
				// Réinitialiser la requête postdata
				wp_reset_postdata();
			} else {
				// Aucune image à afficher dans cette catégorie
				echo '<p class="texte">Il n\'y a pas encore d\'autres photos à afficher dans cette catégorie.</p>';
			}
		}

			?>

			<?php
			$cat_id = get_the_category();
			if (get_the_category() == 0) {

				$cat_id = get_the_category()[0]->term_id;
				$args = array(
					'post_type' => 'photo',
					'post__not_in' => array(get_the_ID()),
					'cat' => $cat_id, //can be set to ID
				);
				$query = new WP_Query($args);

				while ($query->have_posts()) :
					$query->the_post();
					$link = get_permalink();
					$title = get_the_title();
					$date = get_the_date(); ?>
					<a href="<?php echo $link; ?>">
						<img class="aimez-aussi-img" src="<?php echo get_field('photo')['url']; ?>" alt="#" />
					</a>
					<a href="<?php echo $link; ?>">
						<img class="aimez-aussi-img" src="<?php echo get_field('photo')['url']; ?>" alt="#" />
					</a>
			<?php endwhile;
			} else {
				echo '<p class="message">Il n\'y a pas d\'autres photos à afficher dans cette catégorie.</p>';
			}
			?>
	</div>
</div>

<div class="aimez-aussi-btn-conatainer">
	<button class="btn-CTA aimez-aussi-btn">Toutes les photos</button>
</div>

<?php get_footer(); ?>