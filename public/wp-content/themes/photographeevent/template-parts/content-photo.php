<!-- intégration de la zone de contenu -->
<div>
	<ul class="photo-info">
		<div class="info part">
			<li>
				<h2 class="photo-titre"><?php echo get_field('titre'); ?></h2>
			</li>
			<li>
				<p class="ref info-tx">RÉFÉRENCE : </p><?php echo get_field('reference'); ?>
			</li>
			<li>
				<p class="categorie info-tx">CATÉGORIE :</p><?php echo get_field('categorie'); ?>
			</li>
			<li>
				<p class="format info-tx">FORMAT :</p><?php echo get_field('format'); ?>
			</li>
			<li>
				<p class="type info-tx">TYPE :</p><?php echo get_field('type'); ?>
			</li>
			<li>
				<p class="annee info-tx">ANNÉE :<Emb></Emb>
				</p><?php echo get_field('annee'); ?>
			</li>
		</div>
		<div class="photo-container part">
			<li><img class="photo" src="<?php echo get_field('photo')['url']; ?>" alt="" /></li>
		</div>
	</ul>
</div>