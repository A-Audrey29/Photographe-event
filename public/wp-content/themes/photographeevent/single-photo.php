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

<div>
	<p>Cette photo vous intéresse ?</p>
</div>

<?php get_footer(); ?>