import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import quotesEditor from './components/quotes-editor';
const { withSelect, select } = wp.data;
import Quote from './components/Quote';
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
			default: null,
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
	save: ( { attributes } ) => {
		return attributes.post === null ? null : (
			<Quote quote={ attributes?.post } color={ attributes?.color } />
		);
	},
} );
