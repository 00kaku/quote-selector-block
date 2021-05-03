import { useBlockProps } from '@wordpress/block-editor';

const quotesEditor = ( { posts, setAttributes, attributes } ) => {
	const handlePostSelect = ( id ) => {
		setAttributes( { isSelected: true, postId: id } );
	};
	return (
		<div { ...useBlockProps() }>
			<div className="quotes__container">
				{ ! posts && <div className="quotes__noQuote">Loading </div> }

				{ posts &&
					( posts.length > 0 ? (
						posts.map(
							( post ) =>
								(
									<div
										key={ post.id }
										className="quotes__item"
										onClick={ () =>
											handlePostSelect( post.id )
										}
										onKeyDown={ ( e ) =>
											e.key === 'Enter' &&
											handlePostSelect( post.id )
										}
										role="button"
										tabIndex={ 0 }
									>
										<h3>{ post.title.rendered }</h3>
									</div>
								) || <div></div>
						)
					) : (
						<div className="quotes__noQuote">
							No Quotes are available.
						</div>
					) ) }

				{ attributes?.isSelected && (
					<button className="quotes__button">Approve</button>
				) }
			</div>
		</div>
	);
};

export default quotesEditor;
