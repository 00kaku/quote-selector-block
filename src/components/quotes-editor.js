import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
import Quote from './Quote';
import { PanelBody } from '@wordpress/components';
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

		setAttributes( { isChecked: true, post: updatedPost } );
	};
	const handleApprove = () => {
		setAttributes( { isApproved: true } );
	};
	return (
		<div { ...useBlockProps() }>
			<InspectorControls key="settings">
				<PanelBody title="Theme Color" initialOpen={ true }>
					<ColorPalette
						onChange={ ( color ) => setAttributes( { color } ) }
						value={ attributes.color }
					/>
				</PanelBody>
			</InspectorControls>
			{ ! attributes.isApproved && (
				<div className="quotes__container">
					{ ! posts && (
						<div className="quotes__noQuote">Loading </div>
					) }

					{ posts &&
						( posts.length > 0 ? (
							posts.map(
								( post ) =>
									(
										<div
											key={ post.id }
											className="quotes__item"
											onClick={ () =>
												handlePostSelect( post )
											}
											onKeyDown={ ( e ) =>
												e.key === 'Enter' &&
												handlePostSelect( post )
											}
											role="button"
											tabIndex={ 0 }
											style={ {
												backgroundImage: `url( ${
													post._embedded?.[
														'wp:featuredmedia'
													][ 0 ]?.source_url ||
													'https://via.placeholder.com/150'
												})`,
												backgroundSize: 'cover',
											} }
										>
											<div
												className={ `quotes__check ${
													attributes.post?.id ===
														post.id && 'checked'
												}` }
											></div>
											<h3 className="quote__title">
												{ post.title.rendered }
											</h3>
										</div>
									) || <div></div>
							)
						) : (
							<div className="quotes__noQuote">
								No Quotes are available.
							</div>
						) ) }

					{ attributes?.isChecked && (
						<button
							className="quotes__button"
							onClick={ handleApprove }
						>
							Approve
						</button>
					) }
				</div>
			) }
			{ attributes.isApproved && (
				<div>
					<Quote
						quote={ attributes.post }
						color={ attributes.color }
					/>
					<button
						className="quote__button"
						onClick={ () => setAttributes( { isApproved: false } ) }
					>
						Change
					</button>
				</div>
			) }
		</div>
	);
};

export default quotesEditor;
