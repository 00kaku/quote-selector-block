import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
import Quote from './Quote';
import { PanelBody } from '@wordpress/components';
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
				label: 'Remove quote',
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
				term !== ''
			) {
				tempArray.push( element );
			}
		} );
		if ( tempArray.length > 0 && term ) {
			setAttributes( {
				spliceOptionsArray: tempArray,
			} );
		} else if ( ! term ) {
			setAttributes( {
				spliceOptionsArray: attributes.optionsArray,
			} );
		} else {
			setAttributes( { spliceOptionsArray: [] } );
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
					style={ { padding: '10px' } }
				>
					<div className="quotes-selector-items">
						<input
							type="text"
							placeholder="Search for a quote..."
							onChange={ ( event ) =>
								handleTermChange( event.target.value )
							}
							value={ attributes.term }
							className="quotes-selector-filter"
						/>

						{ attributes?.spliceOptionsArray.map( ( option ) => {
							return (
								<span
									key={
										JSON.parse( option?.value )?.post?.id
									}
									className="quotes-selector-item"
									role="button"
									tabIndex="0"
									onClick={ () =>
										handlePostSelect(
											JSON.parse( option.value )
										)
									}
									onKeyDown={ ( event ) =>
										event.key === 'Enter' &&
										handlePostSelect(
											JSON.parse( option.value )
										)
									}
								>
									{ option.label }
								</span>
							);
						} ) }
					</div>
				</PanelBody>
			</InspectorControls>
			<div>
				<Quote quote={ attributes.post } color={ attributes.color } />
			</div>
		</div>
	);
};

export default quotesEditor;
