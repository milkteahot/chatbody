import React, { Component } from 'react';
import "./Content.css"
import PropTypes from "prop-types";

const ContentView = (props) => {
	let url = "/view/"+props.id
	return (<NavLink to={url})>
				{props.children}
				</NavLink>)
}

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false
		};
	}


	render() {
		return (
		<div className="content" >
		{this.props.onClick?
			(<FullContentLink onChangeFullContent={this.onChangeFullContent}>):
		}
		)
	}

}

export default Content;