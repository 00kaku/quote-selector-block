import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import quotesEditor from './components/quotes-editor';
const { withSelect, select } = wp.data;
/**
 * The function register our block with the cofiguration passed in the second argument. The 'edit' function in the object
 * the editor component presented to the user to make changes and the 'save' function is what will be presented on the screen.
 *
 * @return {undefined}
 */
registerBlockType( 'quote/selector-block', {
	apiVersion: 2,
	title: __( 'Quote Selector Block' ),
	icon: 'images-alt2',
	category: 'design',
	attributes: {
		post: {
			type: 'Object',
		},
		isChecked: {
			type: 'boolean',
			default: false,
		},
		isApproved: {
			type: 'boolean',
			default: false,
		},
		color: {
			type: 'string',
			default: '#222',
		},
	},
	edit: withSelect( () => {
		return {
			posts: select( 'core' ).getEntityRecords( 'postType', 'quotes', {
				_embed: true,
			} ),
		};
	} )( quotesEditor ),
	save: () => {
		return null;
	},
} );
