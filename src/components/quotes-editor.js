import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
import Quote from './Quote';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';
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
			id: post?.id,
			title: post.title?.rendered,
			quote: post.meta?.quote,
			author: post.meta?.author,
			citation: post.meta?.citation,
			srcUrl:
				post._embedded?.[ 'wp:featuredmedia' ][ 0 ]?.source_url ||
				'https://via.placeholder.com/150',
		};

		setAttributes( { post: updatedPost, isSelected: true } );
	};
	useEffect( () => {
		const optionsArray = [];
		if ( posts?.length > 0 ) {
			optionsArray.push( {
				value: 0,
				label: 'Select a quote from below ',
			} );
			posts.map( ( post ) => {
				return optionsArray.push( {
					value: JSON.stringify( post ),
					label: __( post.title.rendered, 'quotes-selector-plugin' ),
				} );
			} );
		} else {
			optionsArray.push( {
				value: 0,
				label: __( 'No Quotes available' ),
			} );
		}

		setAttributes( { optionsArray, spliceOptionsArray: optionsArray } );
	}, [ posts ] );

	const handleTermChange = ( term ) => {
		const tempArray = [];
		setAttributes( { term } );
		attributes.optionsArray.forEach( ( element ) => {
			if (
				element.label.toLowerCase().includes( term.toLowerCase() ) &&
				element.value !== 0 &&
				term !== ''
			) {
				if ( tempArray.length === 0 ) {
					tempArray.push( {
						value: 0,
						label: __( 'Updated Quotes' ),
					} );
				}
				tempArray.push( element );
			}
		} );
		if ( tempArray.length > 0 && term ) {
			setAttributes( { spliceOptionsArray: tempArray } );
		} else {
			setAttributes( { spliceOptionsArray: attributes.optionsArray } );
		}
	};
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
					title={ __( 'Select quote', 'quotes-selector-plugin' ) }
					initialOpen={ true }
				>
					<input
						type="text"
						placeholder="Search to filter quotes."
						onChange={ ( event ) =>
							handleTermChange( event.target.value )
						}
						value={ attributes.term }
						className="quotes-selector-filter"
					/>
					<SelectControl
						options={ attributes.spliceOptionsArray }
						onChange={ ( post ) =>
							handlePostSelect( JSON.parse( post ) )
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
