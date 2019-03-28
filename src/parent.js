import React, { Component } from 'react';
import Sidebar from "./components/sidebar.js";
import SubmitButton from "./components/submitButton.js";
import TextField from '@material-ui/core/TextField';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
		  questions: "null",
		  ans: "",
		  qid: -1
		};
    }

    render(props) {
        return (
            <div className="App" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
				{/* <Particles /> */}
				<div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
					<div className="sidebar">
						<Sidebar questions={this.props.questions} setQid={(QID) => {
							this.setState({
								qid: QID
							});
						}}/>
					</div>
					<div id="qanda">
						<div className="question" id="qsn">
							<h3>Select a Question...</h3>
						</div>
						<div className="answer" id="ans">
						<TextField id="answer" label="Answer" multiline rows="4" variant="outlined" onChange={(e) => {
							this.setState({
								ans: e.target.value
							})
						}}/>
							<div className="submit-button" id="submit">
								<SubmitButton submit={() => {
									fetch("http://54.146.176.87/api/question/checkAnswer", {
										method: "POST",
										credentials: "include",
										headers: {
										Accept: "application/json",
											"Content-Type": "application/json",
											"Access-Control-Allow-Credentials": "true"
										}, body: JSON.stringify({
											"qid" : this.state.qid,
											"ans" : this.state.ans
										})
									})
									.then( (response) => {
										console.log(response);
										return response.json();
									})
									.then( (myJson) => {
										console.log(myJson);
										this.setState({
											questions: myJson.questionData
										})
										return myJson;
									})
									.catch(err => {
										console.log(err);
									});
								}}/>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Parent;