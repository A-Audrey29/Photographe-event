<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <?php wp_head(); ?>
</head>

<body class="home" <?php body_class(); ?>>
    <header class="header">
        <div class="header-desktop">
            <a href="<?php echo home_url('/'); ?>">
                <img class="logo" src="<?php echo get_template_directory_uri(); ?>'/assets/images/Logo.png'" alt="Logo">
            </a>

            <div class="header-nav">
                <?php wp_nav_menu([
                    'theme_lacation' => 'main',
                    // 'container' => false,
                    'menu_class' => 'navbar'
                ]); ?>
            </div>
        </div>

        <!-- menu burger -->

        <nav id="site-navigation" class="main-navigation navbar">
            <div class="menu-mobile">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <div class="line line_one"></div>
                    <div class="line line_two"></div>
                    <div class="line line_three"></div>
                </button>
            </div>
            <ul class="open_nav navbar-links">
                <?php wp_nav_menu([
                    'theme_lacation' => 'main',
                    // 'container' => false,
                    'menu_class' => 'navbar-burger'
                ]); ?>
            </ul>

    </header>
    <?php wp_body_open(); ?>