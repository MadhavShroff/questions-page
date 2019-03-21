import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // Necessary

class Button extends Component {
	render() {
		var submit = (async function() {
			console.log("Submit Button pressed");
		});
		return ( 
			<AwesomeButton
				type="primary"
				action={submit}>
				Submit Answer
			</AwesomeButton>
		);

	}
}

export default Button;