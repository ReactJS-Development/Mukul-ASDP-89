import React, { Component } from 'react';


class Stateful extends Component {
	constructor (props) {
		super(props)
		this.state = {username: 'John'};
	}


	render() {
		return (

			<div>
			<h3>{this.state.username}</h3>
			</div>

		);
	}
}
export default Stateful;