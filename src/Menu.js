import React from 'react';

class Menu extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		const text = e.target.value;
		this.props.chooseImage(text);
	}
	render() {
		return (
			<div>
				<form onClick={this.handleClick}>
					<input type="radio" name="src" value="coronation" />
						coronation
					<input type="radio" name="src" value="horseman" />
						horseman
					<input type="radio" name="src" value="intervention" />
						intervention
					<input type="radio" name="src" value="oath" />
						oath
					<input type="radio" name="src" value="recamier" />
						recamier
				</form>
			</div>
		)
	}
}

export { Menu };