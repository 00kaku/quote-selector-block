import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
import Quote from './Quote';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * This function will provied the user with grid of all post of type quotes and let them select a quote to display.
 * It will then use imported Quote component to display the quote.
 *
 * @param {Object} props The object passed from the index.js.
 * @param {Array} props.posts The array of all the posts type quotes.
 * @param {Function} props.setAttributes The function to update attributes of the block.
 * @param {Object} props.attributes The attributes of the block.
 * @return {undefined}
 */
const quotesEditor = ( { posts, setAttributes, attributes } ) => {
	const handlePostSelect = ( post ) => {
		const updatedPost = {
			id: post.id,
			title: post.title.rendered,
			quote: post.meta.quote,
			author: post.meta.author,
			citation: post.meta.citation,
			srcUrl:
				post._embedded?.[ 'wp:featuredmedia' ][ 0 ]?.source_url ||
				'https://via.placeholder.com/150',
		};

		setAttributes( { post: updatedPost, isSelected: true } );
	};
	const optionsArray = [];
	if ( posts?.length > 0 ) {
		optionsArray.push( { value: 0, label: 'Select a quote from below ' } );
		posts.map( ( post ) => {
			return optionsArray.push( {
				value: JSON.stringify( post ),
				label: __( post.title.rendered, 'quotes-selector-plugin' ),
			} );
		} );
	} else {
		optionsArray.push( { value: 0, label: 'No Quotes available' } );
	}
	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="settings">
				<PanelBody
					title={ __( 'Theme Color', 'quotes-selector-plugin' ) }
					initialOpen={ false }
				>
					<ColorPalette
						onChange={ ( color ) => setAttributes( { color } ) }
						value={ attributes.color }
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Select post', 'quotes-selector-plugin' ) }
					initialOpen={ true }
				>
					<SelectControl
						options={ optionsArray }
						onChange={ ( post ) =>
							post !== 0 && handlePostSelect( JSON.parse( post ) )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div>
				<Quote quote={ attributes.post } color={ attributes.color } />
			</div>
		</div>
	);
};

export default quotesEditor;
