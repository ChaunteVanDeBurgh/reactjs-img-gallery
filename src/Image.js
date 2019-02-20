import React from 'react';
import './Image.css'

class Image extends React.Component {
	render() {
		return (
			<div id="image">
				<img src={this.props.src} />
			</div>
		)
	}
}

export { Image };