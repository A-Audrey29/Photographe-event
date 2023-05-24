<?php get_header();
// $photo = get_fields();

?>

<!-- intégration de la zone de contenu -->
<div>
	<ul class="photo-info">
		<div class="info">
			<li>
				<h2 class="photo-titre"><?php echo get_field('titre'); ?></h2>
			</li>
			<li>
				<p class="ref">RÉFÉRENCE :</p><?php echo get_field('reference'); ?>
			</li>
			<li>
				<p class="categorie">CATÉGORIE :</p><?php echo get_field('categorie'); ?>
			</li>
			<li>
				<p class="format">FORMAT :</p><?php echo get_field('format'); ?>
			</li>
			<li>
				<p class="type">TYPE :</p><?php echo get_field('type'); ?>
			</li>
			<li>
				<p class="annee">ANNÉE :<Emb></Emb>
				</p><?php echo get_field('annee'); ?>
			</li>
		</div>
		<div class="photo-container">
			<li><img class="photo" src="<?php echo get_field('photo')['url']; ?>" alt="" /></li>
		</div>
	</ul>
</div>

<?php get_footer(); ?>