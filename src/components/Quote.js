const Quote = ( { quote, color } ) => {
	return (
		<div>
			<div
				className="quote__header"
				style={ {
					'border-top': `2px solid ${ color }`,
				} }
			>
				<p className="quote__quote">{ quote.quote }</p>
			</div>
			<div className="quote__footer">
				<div className="quote__footer__text">
					<h3
						style={ {
							color,
							fontSize: '22px',
							fontWeight: 'bold',
							fontFamily: 'Alegreya SC, serif',
							margin: '0',
						} }
					>
						{ quote.citation }
					</h3>
					<h4
						style={ {
							fontSize: '20px',
							fontWeight: 'bold',
							color: '#fff',
							fontFamily:
								'Open Sans condensed, Arial Narrow, serif',
							textShadow: '2px 2px rgba(0, 0, 0, 0.5)',
							margin: 0,
							marginLeft: 'auto',
						} }
					>
						{ quote.author }
					</h4>
				</div>
				<div className="image__outer">
					<div className="image">
						<img
							src={ quote.srcUrl }
							alt={ `Author: ${ quote.author || 'Unknown' }` }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quote;
