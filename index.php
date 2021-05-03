<?php
/**
 * Plugin Name:       Quotes Selector Block Plugin
 * Plugin URI:        https://github.com/00kaku/
 * Description:       A basic block to select and show a quotes CPT.
 * Version:           1.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Akash Sharma
 * Author URI:        https://github.com/00kaku
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html

 * @package           QuotesSelectorBlock
 * @author            Akash Sharma
 * @copyright         2019 Akash Sharma
 * @license           GPL-2.0-or-later
 */

/**
 * Function to enqueue scripts for the block.

 * @return void
 */
function quote_selector_block_enqueue_scripts() {
	$asset_file = is_readable( plugin_dir_path( __FILE__ ) . 'build/index.asset.php' ) && require plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_register_script(
		'quote-selector-block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
	wp_register_style(
		'quote-selector-block-style-editor',
		plugins_url( 'src/editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
	);

	wp_register_style(
		'quote-selector-block-style',
		plugins_url( 'src/style.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
	);

	register_block_type(
		'quote/selector-block',
		array(
			'api_version'   => 2,
			'editor_script' => 'quote-selector-block',
			'style'         => 'quote-selector-block-style',
			'editor_style'  => 'quote-selector-block-style-editor',
		)
	);
}

add_action( 'init', 'quote_selector_block_enqueue_scripts' );
