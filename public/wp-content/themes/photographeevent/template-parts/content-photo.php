<?php get_header(); ?>

<!-- intégration de la zone de contenu -->
<div class="run-information">
	<ul>
		<li>Photo<?php the_field('photo'); ?></li>
		<li>Titre<?php the_field('titre'); ?></li>
		<li>Référence<?php the_field('reference'); ?></li>
		<li>Catégorie<?php the_field('categorie'); ?></li>
		<li>Format<?php the_field('format'); ?></li>
		<li>Type<?php the_field('type'); ?></li>
		<li>Année<?php the_field('annee'); ?></li>
	</ul>
</div>


<?php get_footer(); ?>