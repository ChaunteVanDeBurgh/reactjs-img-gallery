import React from 'react';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<form>
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