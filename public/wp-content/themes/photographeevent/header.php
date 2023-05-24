<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <?php wp_head(); ?>
</head>

<body class="home" <?php body_class(); ?>>
    <header class="header">
        <a href="<?php echo home_url('/'); ?>">
            <img class="logo" src="<?php echo get_template_directory_uri(); ?>'/assets/images/Logo.png'" alt="Logo">
        </a>

        <?php wp_nav_menu([
            'theme_lacation' => 'main',
            // 'container' => false,
            'menu_class' => 'navbar'
        ]); ?>

    </header>
    <?php wp_body_open(); ?>