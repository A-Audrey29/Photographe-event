<!-- intégration de la zone de contenu -->
<div>
	<ul class="photo-info">
		<div class="info part">
			<li>
				<h2 class="photo-titre"><?php echo get_field('titre'); ?></h2>
			</li>
			<li>
				<p class="ref info-tx">RÉFÉRENCE : <span id="reference"><?php echo get_field('reference'); ?></span></p>
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
			<?php if (has_post_thumbnail()) : ?>
				<img src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>" class="post-thumbnail" />
				<img id="icon-oeil" src="<?php echo get_template_directory_uri(); ?>/assets/images/icon_oeil.png" alt="Icône en forme d'oeil" />
				<img id="icon-fullscreen" src="<?php echo get_template_directory_uri(); ?>/assets/images/fullscreen.png" alt="Icône de plein écran" />
			<?php endif; ?>
			<?php the_content(); ?>

		</div>
	</ul>
</div>