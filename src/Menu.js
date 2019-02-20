import React from 'react';
import './Menu.css';

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
			<div id="menu">
				<form onClick={this.handleClick}>
					<input type="radio" name="src" value="coronation" />
						<span class="form-label">coronation</span> 
					<input type="radio" name="src" value="horseman" />
						<span class="form-label">horseman</span>
					<input type="radio" name="src" value="intervention" />
						<span class="form-label">intervention</span>
					<input type="radio" name="src" value="oath" />
						<span class="form-label">oath</span>
					<input type="radio" name="src" value="recamier" />
						<span class="form-label">recamier</span>
				</form>
			</div>
		)
	}
}

export { Menu };