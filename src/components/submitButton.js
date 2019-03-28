import React, {Component} from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"; // Necessary

class Button extends Component {
	render() {
		return ( 
			<div id="button">
				<AwesomeButton
					type="primary"
					action={ () => {
						this.props.submit();
						document.getElementById("buttonResponse").setAttribute("hidden", false);
					}}>
					Submit Answer
				</AwesomeButton>
				<p hidden={true} id="buttonResponse"> Helloooo </p>
			</div>
		);
	}
}

export default Button;