import { useBlockProps } from '@wordpress/block-editor';
const quotesEditor = ( { posts, setAttributes, attributes } ) => {
	const handlePostSelect = ( post ) => {
		setAttributes( { isChecked: true, post } );
	};
	const handleApprove = () => {
		setAttributes( { isApproved: true } );
	};
	return (
		<div { ...useBlockProps() }>
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
					{ attributes.post.title.rendered }
					<button
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
