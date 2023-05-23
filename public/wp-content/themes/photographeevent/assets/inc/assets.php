<?php

// branchement du fichier CSS
function photographeevent_enqueue_styles()
{
    wp_enqueue_style("style.css", get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'photographeevent_enqueue_styles');

// branchement du fichier JS
function photographeevent_enqueue_scripts()
{
    wp_enqueue_script('script.js', get_template_directory_uri() . '/assets/js/script.js', '', '', true);
}
add_action('wp_enqueue_scripts', 'photographeevent_enqueue_scripts');

// Jquery

function photographeevent_scripts()
{
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'photographeevent_scripts');
