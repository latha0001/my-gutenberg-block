<?php
/**
 * Plugin Name: My Gutenberg Block
 * Description: A simple custom Gutenberg block.
 * Version: 1.0
 * Author: Your Name
 */

function my_custom_block_register() {
    wp_register_script(
        'my-custom-block-script',
        plugins_url( '/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . '/build/index.js' )
    );

    register_block_type( 'my-plugin/my-custom-block', array(
        'editor_script' => 'my-custom-block-script',
    ) );
}

add_action( 'init', 'my_custom_block_register' );
